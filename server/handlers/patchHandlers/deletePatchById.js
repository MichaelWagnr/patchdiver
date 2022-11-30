const { accessDB } = require('../../utils/accessDB')

const deletePatchById = async (req, res) => {
	const { id } = req.params
	const deletePatch = await accessDB((db) =>
		db.collection('patches').deleteOne({ _id: id })
	)

	if (deletePatch) {
		return res.status(200).json({ status: 200, dbResponse: deletePatch })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { deletePatchById }
