const { accessDB } = require('../../utils/accessDB')

const likePatchById = async (req, res) => {
	const { id } = req.params
	console.log(id)

	const likePatch = await accessDB((db) =>
		db.collection('patches').updateOne({ _id: id }, { $inc: { likes: 1 } })
	)

	if (likePatch) {
		return res
			.status(200)
			.json({ status: 200, message: 'Success', dbResponse: likePatch })
	}

	return res.status(500).json({
		status: 500,
		message: 'An Error has occurred while liking this patch',
	})
}

module.exports = { likePatchById }
