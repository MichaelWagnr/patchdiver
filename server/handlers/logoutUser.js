const logoutUser = (req, res) => {
	res.cookie('jwt', 'loggedout', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
	})
	return res.status(200).json({ status: 'Logged out' })
}

module.exports = { logoutUser }
