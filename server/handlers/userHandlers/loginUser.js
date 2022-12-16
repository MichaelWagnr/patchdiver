const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { accessDB } = require('../../utils/accessDB')

const loginUser = async (req, res, next) => {
	const { email, password } = req.body

	// 1 check if email and password exist
	if (!email || !password)
		return res
			.status(400)
			.json({ status: 400, message: 'Please provide email and password' })
	// 2 check is user exists && password is correct
	const existingUser = await accessDB((db) =>
		db.collection('users').findOne({ email })
	)

	// const validPassword = await bcrypt.compare(password, existingUser.password)

	if (!existingUser || !(await bcrypt.compare(password, existingUser.password)))
		return res
			.status(401)
			.json({ status: 401, message: 'Incorrect email or password' })

	// 3 if everything is ok, send token to client
	const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	})

	res.cookie('jwt', token, {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
		),
		// TODO set secure to true, once in production
		secure: process.env.NODE_ENV === 'production' ? true : null,
		httpOnly: true,
	})

	const loggedInUser = {
		_id: existingUser._id,
		userName: existingUser.userName,
		avatarSrc: existingUser.avatarSrc,
		patchArray: existingUser.patchArray,
	}

	return res
		.status(200)
		.json({ status: 200, message: 'Success', user: loggedInUser })
}

module.exports = { loginUser }
