import { DX100Patch, DX100SysexArr } from '../../types'
import { dx100Parameters } from './Dx100.paramData'

export const parseVoice = (sysexArr: DX100SysexArr): DX100Patch | {} => {
	const newArr = sysexArr.slice(6, -1)
	const keys = Object.keys(dx100Parameters)
	const voice: { [key: string]: { param: number; value: number } } = {}
	keys.forEach((key, index) => {
		voice[key] = {
			param: dx100Parameters[key].param,
			value: newArr[index],
		}
	})
	return voice
}

export const compileVoice = (voiceObj: DX100Patch): number[] => {
	console.log('voiceObj', voiceObj)

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
