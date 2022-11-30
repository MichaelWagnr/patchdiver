const { accessDB } = require('../../utils/accessDB')

const getAllUsers = async (req, res) => {
	const allUsers = await accessDB((db) =>
		db.collection('users').find().toArray()
	)

	if (allUsers) {
		return res.status(200).json({ status: 200, dbResponse: allUsers })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { getAllUsers }
