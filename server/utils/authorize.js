const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { accessDB } = require('./accessDB')

const authorize = async (req, res, next) => {
	// 1 get token and check if it's there
	let token
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1]
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt
	}

	// 2 verify token
	if (!token)
		return res.status(401).json({
			status: 401,
			message: 'You are not logged in! Please log in to get access',
		})

	try {
		const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

		const user = await accessDB((db) =>
			db.collection('users').findOne({ _id: decoded._id })
		)

		if (!user)
			return res.status(400).json({
				status: 400,
				message: 'User belonging to this token not found in DB',
			})
	} catch {
		return res.status(401).json({
			status: 401,
			message: 'Invalid or expired token. Please log in again',
		})
	}

	next()
}

module.exports = { authorize }
