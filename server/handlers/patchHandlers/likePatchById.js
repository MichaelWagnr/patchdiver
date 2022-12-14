const { accessDB } = require('../../utils/accessDB')

const likePatchById = async (req, res) => {
	const { id } = req.params
	const { userId } = req.query

	const user = await accessDB((db) =>
		db.collection('users').findOne({ _id: userId })
	)

	if (user.likedPatches.includes(id)) {
		return res
			.status(400)
			.json({ status: 400, message: 'Patch is already liked by User' })
	}

	const newLikedArr = [...user.likedPatches]
	newLikedArr.push(id)

	const updateLikedArr = await accessDB((db) =>
		db
			.collection('users')
			.updateOne({ _id: userId }, { $set: { likedPatches: newLikedArr } })
	)

	const likePatch = await accessDB((db) =>
		db.collection('patches').updateOne({ _id: id }, { $inc: { likes: 1 } })
	)

	if (likePatch && updateLikedArr) {
		return res.status(200).json({
			status: 200,
			message: 'Success',
			dbResponse: { likePatch, updateLikedArr },
		})
	}

	return res.status(500).json({
		status: 500,
		message: 'An Error has occurred while liking this patch',
	})
}

module.exports = { likePatchById }
