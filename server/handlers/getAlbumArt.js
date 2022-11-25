const fetch = require('node-fetch')
// const util = require('util')

const getAlbumArt = async (req, res) => {
	const { track, artist } = req.query
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

	const mbID = releasesArr[0].id

	console.log(mbID)

	// console.log(
	// 	util.inspect(filtered, {
	// 		showHidden: false,
	// 		depth: null,
	// 		colors: true,
	// 	})
	// )

	const artEndpoint = `https://ia903200.us.archive.org/18/items/mbid-${mbID}/index.json`

	if (mbID) {
		const response = await fetch(artEndpoint)
		const data = await response.json()
		return res.status(200).json({
			status: 200,
			data: data.images[0].thumbnails['250'],
		})
	}

	return res.status(404).json({
		status: 404,
		mbID: mbID,
		albumArtEndpoint: artEndpoint,
		releasesArr: releasesArr,
		data: '',
	})
}

module.exports = { getAlbumArt }
