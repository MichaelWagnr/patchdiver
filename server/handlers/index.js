const { getAlbumArtMB } = require('./getAlbumArtMB')
const { getArtSP } = require('./getArtSP')
const { getUserById } = require('./userHandlers/getUserById')
const { getAllUsers } = require('./userHandlers/getAllUsers')
const { createUser } = require('./userHandlers/createUser')
const { loginUser } = require('./userHandlers/loginUser')
const { logoutUser } = require('./userHandlers/logoutUser')
const { deleteUserById } = require('./userHandlers/deleteUserById')
const { getAllPatches } = require('./patchHandlers/getAllPatches')
const { getPatchById } = require('./patchHandlers/getPatchById')
const { deletePatchById } = require('./patchHandlers/deletePatchById')
const { createPatch } = require('./patchHandlers/createPatch')

module.exports = {
	getAlbumArtMB,
	getArtSP,
	getUserById,
	getAllUsers,
	createUser,
	loginUser,
	logoutUser,
	deleteUserById,
	getAllPatches,
	getPatchById,
	deletePatchById,
	createPatch,
}
