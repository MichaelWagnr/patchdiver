const send200Status = (req, res) => {
	return res.status(200).json({ status: 200, message: 'All clear' })
}

module.exports = { send200Status }
