const { accessDB } = require('../../utils/accessDB')

const deleteUserById = async (req, res) => {
	const { id } = req.params
	const deleteUser = await accessDB((db) =>
		db.collection('users').deleteOne({ _id: id })
	)

	if (deleteUser) {
		return res.status(200).json({ status: 200, dbResponse: deleteUser })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { deleteUserById }
