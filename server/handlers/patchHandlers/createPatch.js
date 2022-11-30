const { accessDB } = require('../../utils/accessDB')

const createPatch = async (req, res) => {
	const {} = req.body
	const newPatch = await accessDB((db) =>
		db.collection('patches').insertOne({ _id: id })
	)

	if (newPatch) {
		return res.status(200).json({ status: 200, dbResponse: newPatch })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { createPatch }
