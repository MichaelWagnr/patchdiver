const fetch = require('node-fetch')
// const util = require('util')

const getAlbumArtMB = async (req, res) => {
	const { track, artist } = req.query

	try {
		const mbEndpoint = `https://musicbrainz.org/ws/2/recording?fmt=json&query=%22${track}%22ANDartistname:%22${artist}%22-"Various"ANDstatus:officialANDprimarytype:albumANDcreditname:${artist}-various`

		const artistRegex = new RegExp(`${artist}`, 'i')

		const response = await fetch(mbEndpoint)
		const data = await response.json()
		let releasesArr = data.recordings.map((obj) => obj.releases?.[0])

		if (
			releasesArr.some((obj) =>
				/various/i.test(obj?.['artist-credit']?.[0]?.name)
			)
		) {
			releasesArr = releasesArr.filter(
				(obj) =>
					artistRegex.test(obj?.['artist-credit']?.[0]?.name) &&
					!/various/i.test(obj?.['artist-credit']?.[0]?.name)
			)
		}

		//? Condition for if filtering and regex testing returns an empty array?

		const mbID = releasesArr?.[0]?.id

		// console.log(
		// 	util.inspect(filtered, {
		// 		showHidden: false,
		// 		depth: null,
		// 		colors: true,
		// 	})
		// )

		if (mbID) {
			const artEndpoint = `https://ia903200.us.archive.org/18/items/mbid-${mbID}/index.json`
			const response = await fetch(artEndpoint)
			const data = await response.json()

			const imgSrc = data?.images?.[0]?.thumbnails?.['250']

			//? Convert img src URL to base 64 ?
			// const getBase64FromUrl = async (url) => {
			// 	const data = await fetch(url)
			// 	const blob = await data.blob()
			// 	return new Promise((resolve) => {
			// 		const reader = new FileReader()
			// 		reader.readAsDataURL(blob)
			// 		reader.onloadend = () => {
			// 			const base64data = reader.result
			// 			resolve(base64data)
			// 		}
			// 	})
			// }

			// if (imgSrc) {
			// 	getBase64FromUrl(imgSrc).then((res) => console.log(res))
			// }

			if (imgSrc) {
				return res.status(200).json({
					status: 200,
					srcUrl: imgSrc,
				})
			} else {
				return res.status(404).json({
					status: 404,
					srcUrl: '',
				})
			}
		}
	} catch {
		return res.status(400).json({
			status: 400,
			message: 'Something went wrong',
		})
	}

	return res.status(400).json({
		status: 400,
		message: 'Something went wrong',
	})
}

module.exports = { getAlbumArtMB }
