const fetch = require('node-fetch')
// const axios = require('axios')
const request = require('request')
// const qs = require('qs')
require('dotenv').config()

// Get Auth token ( 1 hour limit )
// https://developer.spotify.com/console/post-playlists/

const getArtSP = (req, res) => {
	console.log(req.query)
	const { track, artist } = req.query

	const albumArtEndpoint = `https://api.spotify.com/v1/search?q=${track}&type=track`
	const artistArtEndpoint = `https://api.spotify.com/v1/search?q=${artist}&type=artist`

	const handleError = () => {
		return res.status(404).json({ status: 404, message: 'Artwork not found' })
	}

	// ==============================================================================================
	// const clientId = process.env.SPOTIFY_CLIENT_ID
	// const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

	// const requestOptions = {
	// 	method: 'POST',
	// 	headers: {
	// 		Authorization:
	// 			'Basic ' +
	// 			Buffer.from(clientId + ':' + clientSecret).toString('base64'),
	// 		'Content-Type': 'application/x-www-form-urlencoded',
	// 		// form: {
	// 		// 	grant_type: 'client_credentials',
	// 		// },
	// 	},
	// 	body: JSON.stringify({ grant_type: 'client_credentials' }),
	// 	redirect: 'follow',
	// }

	// ==============================================================================================
	// var client_id = process.env.SPOTIFY_CLIENT_ID
	// var client_secret = process.env.SPOTIFY_CLIENT_SECRET
	// const data = { grant_type: 'client_credentials' }
	// const options = {
	// 	method: 'POST',

	// 	headers: {
	// 		Authorization:
	// 			'Basic ' +
	// 			Buffer.from(client_id + ':' + client_secret).toString('base64'),
	// 		'content-type': 'application/x-www-form-urlencoded',
	// 		// 'content-type': 'application/json',
	// 		Accept: 'application/json',
	// 		// ['Content-Type'] = 'application/json',
	// 	},
	// 	data: qs.stringify(data),
	// 	url: 'https://accounts.spotify.com/api/token',
	// }
	// const response = await axios(options)

	// console.log(response)
	// ==============================================================================================

	// const getToken = async (
	// 	clientId = process.env.SPOTIFY_CLIENT_ID,
	// 	clientSecret = process.env.SPOTIFY_CLIENT_SECRET
	// ) => {
	// 	const headers = {
	// 		headers: {
	// 			Accept: 'application/json',
	// 			'Content-Type': 'application/x-www-form-urlencoded',
	// 		},
	// 		auth: {
	// 			username: clientId,
	// 			password: clientSecret,
	// 		},
	// 		responseType: 'application/json',
	// 	}
	// 	const data = {
	// 		grant_type: 'client_credentials',
	// 	}
	// 	try {
	// 		const response = await axios.post(
	// 			'https://accounts.spotify.com/api/token',
	// 			qs.stringify(data),
	// 			headers
	// 		)
	// 		console.log(response.data)
	// 		return response.data.access_token
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }

	// getToken()
	// ==============================================================================================
	// "Request" library

	const makingSomeRequests = async (token) => {
		if (track) {
			// const token = await getToken()
			console.log('🤬', token)
			const response = await fetch(albumArtEndpoint, {
				headers: {
					// Authorization: `Bearer ${process.env.SPOTIFY_BEARER_TOKEN}`,
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
					// Authorization: `Bearer ${process.env.SPOTIFY_BEARER_TOKEN}`,
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
	// ==============================================================================================

	// const getToken = async () => {
	// const getToken = () => {
	const client_id = process.env.SPOTIFY_CLIENT_ID
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET
	// let token = ''

	// your application requests authorization
	var authOptions = {
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

	request.post(authOptions, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			// use the access token to access the Spotify Web API
			// console.log('😭', body.access_token)
			const token = body.access_token
			// return body.access_token
			// var options = {
			// 	url: 'https://api.spotify.com/v1/users/jmperezperez',
			// 	headers: {
			// 		Authorization: 'Bearer ' + token,
			// 	},
			// 	json: true,
			// }
			// request.get(options, function (error, response, body) {
			// 	console.log(body)
			// })

			makingSomeRequests(token)
		}
	})

	// return token
	// }

	// }
	// ==============================================================================================
}

module.exports = { getArtSP }
