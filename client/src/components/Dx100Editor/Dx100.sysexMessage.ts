import { dx100Parameters } from './Dx100.paramData'

const sysexMessage = (key, val) => {
	// Adjusted parameter value (val), ex. operator release rate runs from 0 - 15, but is controlled by a slider with a range of 0 - 101, the sliders current position is adjusted to reflect reaching it's max value at the height of it's slider. In the case of release rate, param position 101 becomes 15; ampmod, position 20 becomes 1 (on/off)

	// const val = Math.floor(
	// 	paramPosition * (dx100Parameters[paramName].max / sliderRange)
	// )

	// Key is the identifying sysex parameter number

	// const key = dx100Parameters[paramName].param

	// Sysex strings contain a bytes that signify the start of a sysex message (Status); ID no.; Substatus / ch. no.; Parameter group no.; Switch no. (key); Data (val); end of sysex message signifer (EOX)
	const sysex = [240, 67, 16, 18, key, val, 247]

	return sysex
}

export default sysexMessage
