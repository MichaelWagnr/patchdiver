import { DX100Patch } from '../../types'

const compileVoice = (voiceObj: DX100Patch): number[] => {
	const calculateChecksum = (arr: number[]): number => {
		let sum = 0
		arr.forEach((val) => (sum += val))
		const checksum = 128 - (sum % 128)
		return checksum === 128 ? 0 : checksum
	}

	const sysexArr = [240, 67, 0, 3, 0, 93]

	const objArr = Object.values(voiceObj)
	const sorted = objArr.sort((a, b) => a.param - b.param)
	const arrValues = sorted.map((obj) => obj.value)
	const arrMinusOldChecksum = arrValues.slice(0, -1)
	const newCheckSum = calculateChecksum(arrMinusOldChecksum)

	arrMinusOldChecksum.forEach((value) => sysexArr.push(value))
	sysexArr.push(newCheckSum)
	sysexArr.push(247)
	return sysexArr
}

export default compileVoice
