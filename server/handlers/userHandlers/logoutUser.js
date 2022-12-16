const logoutUser = (req, res) => {
	res.cookie('jwt', 'loggedout', {
		expires: new Date(Date.now() + 10 * 1000),
		secure: process.env.NODE_ENV === 'production' ? true : null,
		httpOnly: true,
	})
	return res.status(200).json({ status: 'Logged out' })
}

module.exports = { logoutUser }
