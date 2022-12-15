const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const {
	getArtSP,
	getUserById,
	getAllUsers,
	createUser,
	loginUser,
	logoutUser,
	deleteUserById,
	getAllPatches,
	getPatchById,
	deletePatchById,
	createPatch,
	getCurrentUser,
	likePatchById,
	send200Status,
} = require('./handlers')
const { authorize } = require('./utils/authorize')

const port = 8000

const limiter = rateLimit({
	max: 777,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP, please try again in an hour.',
})

express()
	.use(helmet())
	.use(express.json())
	.use(morgan('tiny'))
	.use(cookieParser())
	.use(mongoSanitize())
	.use(xss())
	.use(hpp())
	.use('/api', limiter)

	.all('*', (req, res, next) => {
		if (process.env.NODE_ENV === 'development')
			res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
		if (process.env.NODE_ENV === 'production')
			res.header('Access-Control-Allow-Origin', 'https://www.patchdiver.com')
		next()
	})

	// .use((req, res, next) => {
	// 	req.requestTime = new Date().toISOString()
	// 	console.log(req.cookies)
	// 	next()
	// })

	// Artwork endpoint
	.get('/api/artwork', getArtSP)

	// User endpoints
	.get('/api/users', getAllUsers)
	.get('/api/users/:id', getUserById)
	.delete('/api/users/:id', deleteUserById)
	.post('/api/users/', createUser)

	.post('/api/login/', loginUser)
	.get('/api/persist/', getCurrentUser)
	.get('/api/logout/', logoutUser)

	// Patch endpoints
	.get('/api/patches', getAllPatches)
	.get('/api/patches/:id', getPatchById)
	.get('/api/patches/like/:id', likePatchById)
	.delete('/api/patches/:id', deletePatchById)
	.post('/api/patches/', authorize, createPatch)

	// Additional endpoints
	.get('/healthcheck', send200Status)

	.get('*', (req, res) =>
		res.status(404).json({ status: 404, message: 'Invalid endpoint' })
	)

	.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
