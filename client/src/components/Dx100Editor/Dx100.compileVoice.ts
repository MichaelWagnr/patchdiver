import { DX100Patch } from '../../types'

const compileVoice = (voiceObj: DX100Patch): number[] => {
	const values = getArrOfValues(voiceObj)
	const checksum = calculateChecksum(values)
	const sysexArr = [240, 67, 0, 3, 0, 93, ...values, checksum, 247]
	return sysexArr
}

function getArrOfValues(voiceObj: DX100Patch): number[] {
	const arrOfNestedObjects = Object.values(voiceObj)
	const sortedArrOfObjects = arrOfNestedObjects.sort(
		(a, b) => a.param - b.param
	)
	const arrOfValuesMinusChecksum = sortedArrOfObjects
		.map((obj) => obj.value)
		.slice(0, -1)
	return arrOfValuesMinusChecksum
}

function calculateChecksum(arrOfValues: number[]): number {
	let sum = 0
	arrOfValues.forEach((val) => (sum += val))
	const checksum = 128 - (sum % 128)
	return checksum === 128 ? 0 : checksum
}

export default compileVoice
