const { accessDB } = require('../utils/accessDB')

const createUser = async (req, res) => {
	const newUser = await accessDB((db) =>
		db.collection('users').insertOne(req.body)
	)

	if (newUser) {
		return res.status(200).json({ status: 200, dbResponse: newUser })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { createUser }
