const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
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
} = require('./handlers')
const { authorize } = require('./utils/authorize')

const port = 8000

express()
	.use(express.json())
	.use(morgan('tiny'))
	.use(helmet())
	// .use((req, res, next) => {
	// 	req.requestTime = new Date().toISOString()
	// 	console.log(req.headers)
	// 	next()
	// })

	// Artwork endpoint
	.get('/api/artwork', getArtSP)

	// User endpoints
	.get('/api/users', authorize, getAllUsers)
	.get('/api/users/:id', getUserById)
	.delete('/api/users/:id', deleteUserById)
	.post('/api/users/', createUser)

	.post('/api/login/', loginUser)
	.get('/api/logout/', logoutUser)

	// Patch endpoints
	.get('/api/patches', getAllPatches)
	.get('/api/patches/:id', getPatchById)
	.delete('/api/patches/:id', deletePatchById)
	.post('/api/patches/', createPatch)

	.get('*', (req, res) =>
		res.status(404).json({ status: 404, message: 'Invalid endpoint' })
	)

	.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
