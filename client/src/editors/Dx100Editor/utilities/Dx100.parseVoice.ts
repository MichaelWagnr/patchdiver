import { DX100Patch, DX100SysexArr } from '../../types'
import { dx100Parameters } from './Dx100.paramData'

const parseVoice = (sysexArr: DX100SysexArr): DX100Patch | {} => {
	const paramsArr = removeHeaders(sysexArr)
	const patch = createPatchObject(paramsArr)
	return patch
}

function removeHeaders(sysexArr: DX100SysexArr): number[] {
	return sysexArr.slice(6, -1)
}

function createPatchObject(paramsArr: number[]) {
	const keys = Object.keys(dx100Parameters) // ["op4_ar", "op4_d1r", ...]

	const patchObject: { [key: string]: { param: number; value: number } } = {}

	keys.forEach((key, index) => {
		patchObject[key] = {
			param: dx100Parameters[key].param,
			value: paramsArr[index],
		}
	})

	return patchObject
}

export default parseVoice
