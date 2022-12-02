const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
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
} = require('./handlers')
const { authorize } = require('./utils/authorize')

const port = 8000

express()
	.use(express.json())
	.use(morgan('tiny'))
	.use(helmet())
	.use(cookieParser())
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

	.get('*', (req, res) =>
		res.status(404).json({ status: 404, message: 'Invalid endpoint' })
	)

	.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
