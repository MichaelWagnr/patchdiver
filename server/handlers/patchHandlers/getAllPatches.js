const { accessDB } = require('../../utils/accessDB')

const getAllPatches = async (req, res) => {
	const patches = await accessDB((db) =>
		db.collection('patches').find().toArray()
	)

	if (patches) {
		return res.status(200).json({ status: 200, dbResponse: patches })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { getAllPatches }
