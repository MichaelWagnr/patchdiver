const { accessDB } = require('../../utils/accessDB')

const getAllPatches = async (req, res) => {
	const { profileView, userId } = req.query

	// If viewing a profile return user's patches

	if (profileView === 'true' && userId !== 'null') {
		const patches = await accessDB((db) =>
			db.collection('patches').find({ userId }).limit(25).toArray()
		)

		if (patches)
			return res.status(200).json({ status: 200, dbResponse: patches })
		return res.status(404).json({ status: 404, message: 'No patches found' })
	}

	// If viewing the main feed return any patches

	const patches = await accessDB((db) =>
		db.collection('patches').find().limit(25).toArray()
	)

	if (patches) return res.status(200).json({ status: 200, dbResponse: patches })

	return res.status(404).json({ status: 404, message: 'No patches found' })
}

module.exports = { getAllPatches }
