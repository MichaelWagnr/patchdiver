import { DX100Patch, DX100SysexArr } from '../../types'
import { dx100Parameters } from './Dx100.paramData'

const parseVoice = (sysexArr: DX100SysexArr): DX100Patch | {} => {
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

export default parseVoice
