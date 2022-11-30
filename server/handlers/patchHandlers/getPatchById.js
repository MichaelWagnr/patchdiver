const getPatchById = async (req, res) => {
	const { id } = req.params
	const patch = await accessDB((db) =>
		db.collection('patches').findOne({ _id: id })
	)

	if (patch) {
		return res.status(200).json({ status: 200, dbResponse: patch })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { getPatchById }
