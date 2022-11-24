const fetch = require('node-fetch')
const util = require('util')

const getAlbumArt = async (req, res) => {
	const { track, artist } = req.query
	const mbEndpoint = `https://musicbrainz.org/ws/2/recording?fmt=json&limit=7&query=%22${track}%22ANDartist:%22${artist}%22ANDstatus:officialANDprimarytype:album`

	// const mbID = await fetch(mbEndpoint).then((res) => console.log(res))
	const artistRegex = new RegExp(`${artist}`, 'i')

	const response = await fetch(mbEndpoint)
	const data = await response.json()
	const mbID = data.recordings.map((obj) => obj.releases[0])
	// .filter((obj) => artistRegex.test(obj['artist-credit'][0].name))[0].id

	// console.log(
	// 	util.inspect(filtered, {
	// 		showHidden: false,
	// 		depth: null,
	// 		colors: true,
	// 	})
	// )

	// const artEndpoint = `https://ia903200.us.archive.org/18/items/mbid-${mbID}/index.json`

	return res.status(200).json({ status: 200, message: mbID })
}

module.exports = { getAlbumArt }
