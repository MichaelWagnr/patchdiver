const { getAlbumArtMB } = require('./getAlbumArtMB')
const { getArtSP } = require('./getArtSP')
const { getUserById } = require('./getUserById')
const { getAllUsers } = require('./getAllUsers')
const { createUser } = require('./createUser')
const { deleteUserById } = require('./deleteUserById')

module.exports = {
	getAlbumArtMB,
	getArtSP,
	getUserById,
	getAllUsers,
	createUser,
	deleteUserById,
}
