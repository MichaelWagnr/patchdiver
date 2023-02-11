const sysexMessage = (key: number, val: number) => {
	return [240, 67, 16, 18, key, val, 247]
}

export default sysexMessage
