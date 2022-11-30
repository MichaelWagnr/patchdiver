const { accessDB } = require('../../utils/accessDB')

const getUserById = async (req, res) => {
	const { id } = req.params
	const user = await accessDB((db) =>
		db.collection('users').findOne({ _id: id })
	)

	if (user) {
		return res.status(200).json({ status: 200, dbResponse: user })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { getUserById }
