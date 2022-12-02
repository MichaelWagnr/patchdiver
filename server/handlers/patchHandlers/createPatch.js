const { accessDB } = require('../../utils/accessDB')
const { v4: uuidv4 } = require('uuid')

const createPatch = async (req, res) => {
	const patchObj = req.body
	const {
		userName,
		userAvatar,
		userId,
		manufacturer,
		model,
		patchName,
		patchTag,
		genreTag,
		patchData,
	} = req.body

	// Validation
	if (!userName || !userAvatar || !userId)
		return res.status(400).json({
			status: 400,
			message:
				'Some User-related data is missing, please ensure that you are signed in',
		})

	if (!manufacturer || !model)
		return res.status(400).json({
			status: 400,
			message:
				'Manufacturer and Model fields are missing, this is required to determine which patch editor version is launched',
		})

	if (!patchName)
		return res.status(400).json({
			status: 400,
			message: 'Please give this patch a name',
		})

	if (!patchTag || !genreTag)
		return res.status(400).json({
			status: 400,
			message:
				'Please select tags to describe this patch, if a desired tag is not available, select "Other"',
		})

	if (!patchData)
		return res.status(400).json({
			status: 400,
			message:
				'Something went wrong, this request is missing the patch data. Please refresh save screen and try again',
		})

	// Append patch obj
	const _id = uuidv4()
	const currentTime = new Date()
	const currentDate = currentTime.toDateString()

	patchObj._id = _id
	patchObj.timestamp = currentTime
	patchObj.created = currentDate

	const newPatch = await accessDB((db) =>
		db.collection('patches').insertOne(patchObj)
	)

	if (newPatch) {
		return res.status(200).json({ status: 200, dbResponse: newPatch })
	}
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { createPatch }
