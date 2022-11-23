const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const port = 8000

express()
	.use(express.json())
	.use(morgan('tiny'))
	.use(helmet())

	.get('/', (req, res) =>
		res.status(200).json({ status: 200, message: 'Hello World' })
	)

	.get('*', (req, res) =>
		res.status(404).json({ status: 404, message: 'Invalid endpoint' })
	)

	.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
