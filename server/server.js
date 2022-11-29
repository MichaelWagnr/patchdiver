const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const {
	getArtSP,
	getUserById,
	getAllUsers,
	createUser,
	deleteUserById,
} = require('./handlers')

const port = 8000

express()
	.use(express.json())
	.use(morgan('tiny'))
	.use(helmet())

	.get('/api/artwork', getArtSP)

	.get('/api/users', getAllUsers)
	.get('/api/users/:id', getUserById)
	.post('/api/users/', createUser)
	.delete('/api/users/:id', deleteUserById)

	.get('*', (req, res) =>
		res.status(404).json({ status: 404, message: 'Invalid endpoint' })
	)

	.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
