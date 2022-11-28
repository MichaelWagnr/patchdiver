import { dx100Parameters } from './Dx100.paramData'

export const init = [
	240, 67, 2, 3, 0, 93, 31, 31, 0, 15, 15, 0, 0, 0, 0, 0, 0, 4, 3, 31, 31, 0,
	15, 15, 0, 0, 0, 0, 0, 0, 4, 3, 31, 31, 0, 15, 15, 0, 0, 0, 0, 0, 0, 4, 3, 31,
	31, 0, 15, 15, 0, 0, 0, 0, 0, 90, 4, 3, 0, 0, 35, 0, 0, 0, 0, 2, 6, 0, 24, 0,
	4, 0, 0, 99, 1, 0, 0, 50, 0, 0, 0, 50, 0, 73, 78, 73, 84, 32, 86, 79, 73, 67,
	69, 99, 99, 99, 50, 50, 50, 2, 247,
]

export const parseVoice = (sysexArr) => {
	const newArr = sysexArr.slice(6, -1)
	const keys = Object.keys(dx100Parameters)
	const voice = {}
	keys.forEach((key, index) => {
		voice[key] = {
			param: dx100Parameters[key].param,
			value: newArr[index],
		}
	})
	return voice
}

export const compileVoice = (voiceObj) => {
	const sysexArr = [240, 67, 0, 3, 0, 93]
	const objArr = Object.values(voiceObj)
	const sorted = objArr.sort((a, b) => a.param - b.param)
	const valueArr = sorted.map((obj) => obj.value)

	valueArr.forEach((value) => sysexArr.push(value))
	sysexArr.push(247)
	return sysexArr
}
