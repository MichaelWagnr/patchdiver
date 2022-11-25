const fetch = require('node-fetch')
require('dotenv').config()

// Get Auth token ( 1 hour limit )
// https://developer.spotify.com/console/post-playlists/

const getArtSP = async (req, res) => {
	console.log(req.query)
	const { track, artist } = req.query

	const albumArtEndpoint = `https://api.spotify.com/v1/search?q=${track}&type=track`
	const artistArtEndpoint = `https://api.spotify.com/v1/search?q=${artist}&type=artist`

	const handleError = () => {
		return res.status(404).json({ status: 404, message: 'Artwork not found' })
	}

	if (track) {
		const response = await fetch(albumArtEndpoint, {
			headers: {
				Authorization: `Bearer ${process.env.SPOTIFY_BEARER_TOKEN}`,
			},
		})
		const data = await response.json()

		if (data?.error?.status === 401) {
			return res.status(401).json({
				status: 401,
				message: 'Token expired',
			})
		}

		const imgArr = data.tracks.items[0].album.images
		const imgSrc = imgArr[imgArr.length - 1].url

		return res.status(200).json({
			status: 200,
			message: 'Fetching image from Spotify API',
			imgSrc: imgSrc,
		})
	}

	if (artist && !track) {
		const response = await fetch(artistArtEndpoint, {
			headers: {
				Authorization: `Bearer ${process.env.SPOTIFY_BEARER_TOKEN}`,
			},
		})
		const data = await response.json()

		if (data?.error?.status === 401) {
			return res.status(401).json({
				status: 401,
				message: 'Token expired',
			})
		}

		const imgArr = data.artists.items[0].images
		const imgSrc = imgArr[imgArr.length - 1].url

		return res.status(200).json({
			status: 200,
			message: 'Fetching image from Spotify API',
			imgSrc: imgSrc,
		})
	}
}

module.exports = { getArtSP }
