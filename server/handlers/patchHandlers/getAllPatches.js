const { accessDB } = require('../../utils/accessDB')

const getAllPatches = async (req, res) => {
	const { profileView, userId } = req.query

	// If viewing a profile return user's patches
	if (profileView === 'true' && userId !== 'null') {
		let patches = await accessDB((db) => {
			if (req.query?.orderBy === 'mostLiked') {
				return db
					.collection('patches')
					.find({ userId })
					.sort({ likes: -1 })
					.limit(25)
					.toArray()
			} else {
				return db
					.collection('patches')
					.find({ userId })
					.sort({ timestamp: -1 })
					.limit(25)
					.toArray()
			}
		})

		if (req.query.genreTag !== 'null')
			patches = patches.filter((patch) =>
				patch.genreTag !== 'null' ? patch.genreTag === req.query.genreTag : true
			)
		if (req.query.patchTag !== 'null')
			patches = patches.filter((patch) =>
				patch.patchTag !== 'null' ? patch.patchTag === req.query.patchTag : true
			)

		if (patches)
			return res.status(200).json({ status: 200, dbResponse: patches })
		return res.status(404).json({ status: 404, message: 'No patches found' })
	}

	// If viewing the main feed return any patches
	let patches = await accessDB((db) => {
		if (req.query?.orderBy === 'mostLiked') {
			return db
				.collection('patches')
				.find()
				.sort({ likes: -1 })
				.limit(25)
				.toArray()
		} else {
			return db
				.collection('patches')
				.find()
				.sort({ timestamp: -1 })
				.limit(25)
				.toArray()
		}
	})

	if (req.query.genreTag !== 'null')
		patches = patches.filter((patch) =>
			patch.genreTag !== 'null' ? patch.genreTag === req.query.genreTag : true
		)
	if (req.query.patchTag !== 'null')
		patches = patches.filter((patch) =>
			patch.patchTag !== 'null' ? patch.patchTag === req.query.patchTag : true
		)

	if (patches) return res.status(200).json({ status: 200, dbResponse: patches })

	return res.status(404).json({ status: 404, message: 'No patches found' })
}

module.exports = { getAllPatches }
