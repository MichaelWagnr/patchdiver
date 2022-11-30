const { accessDB } = require('../utils/accessDB')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const md5 = require('blueimp-md5')

const createUser = async (req, res) => {
	let { userName, email, password, confirmPassword } = req.body

	email = email.trim().toLowerCase()

	// Validation
	if (!email || !password || !confirmPassword)
		return res.status(400).json({ status: 400, message: 'Missing fields' })

	if (!/.+@.+\.(com|ca|org|io)/.test(email))
		return res
			.status(400)
			.json({ status: 400, message: 'Invalid email, please try again' })

	const existingUser = await accessDB((db) =>
		db.collection('users').findOne({ email: req.body.email })
	)

	if (existingUser)
		return res
			.status(400)
			.json({ status: 400, message: 'Email already exists in database' })

	if (password !== confirmPassword)
		return res
			.status(400)
			.json({ status: 400, message: 'Passwords do not match' })

	if (password.length < 8)
		return res.status(400).json({
			status: 400,
			message: 'Password must atleast 8 characters long',
		})

	// Creating user object
	const hashedEmail = md5(email)
	const gravatarEndpoint = `https://www.gravatar.com/avatar/${hashedEmail}?f=y&d=retro`
	password = await bcrypt.hash(password, 12)

	const _id = uuidv4()

	const userObject = {
		_id,
		userName,
		email,
		password,
		avatarSrc: gravatarEndpoint,
	}

	const token = jwt.sign({ _id: _id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	})

	const newUser = await accessDB((db) =>
		db.collection('users').insertOne(userObject)
	)

	if (newUser) {
		res.cookie('jwt', token, {
			expires: new Date(
				Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
			),
			// TODO set secure to true, once in production
			// secure: true,
			httpOnly: true,
		})

		return res
			.status(200)
			.json({ status: 'Success', token, dbResponse: newUser })
	}
	// Catch all
	return res.status(500).json({ status: 500, message: 'Error occured' })
}

module.exports = { createUser }
