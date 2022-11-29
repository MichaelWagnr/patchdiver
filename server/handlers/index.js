const { getAlbumArtMB } = require('./getAlbumArtMB')
const { getArtSP } = require('./getArtSP')
const { getUserById } = require('./getUserById')
const { getAllUsers } = require('./getAllUsers')
const { createUser } = require('./createUser')
const { loginUser } = require('./loginUser')
const { logoutUser } = require('./logoutUser')
const { deleteUserById } = require('./deleteUserById')

module.exports = {
	getAlbumArtMB,
	getArtSP,
	getUserById,
	getAllUsers,
	createUser,
	loginUser,
	logoutUser,
	deleteUserById,
}
