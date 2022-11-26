const fetch = require('node-fetch')
const request = require('request')
require('dotenv').config()

const getArtSP = (req, res) => {
	const { track, artist } = req.query

	const albumArtEndpoint = `https://api.spotify.com/v1/search?q=${track}&type=track`
	const artistArtEndpoint = `https://api.spotify.com/v1/search?q=${artist}&type=artist`

	const requestWithToken = async (token) => {
		if (track) {
			const response = await fetch(albumArtEndpoint, {
				headers: {
					Authorization: `Bearer ${token}`,
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
					Authorization: `Bearer ${token}`,
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

	// ==============================================================================================

	const client_id = process.env.SPOTIFY_CLIENT_ID
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET

	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			Authorization:
				'Basic ' +
				Buffer.from(client_id + ':' + client_secret).toString('base64'),
		},
		form: {
			grant_type: 'client_credentials',
		},
		json: true,
	}

	request.post(authOptions, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			const token = body.access_token
			requestWithToken(token)
		}
	})
}

module.exports = { getArtSP }
