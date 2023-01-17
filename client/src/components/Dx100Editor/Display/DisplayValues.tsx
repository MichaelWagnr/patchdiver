import { useContext } from 'react'
import { PatchContext } from '../../../contexts/PatchContext'
import freqRatios from '../Dx100.freqRatios'

const DisplayValues = () => {
	let {
		currentChanges: [paramName, paramVal],
	} = useContext<{ currentChanges: [string, number | string] }>(PatchContext)

	if (paramName === 'ALGORITHM') paramVal = +paramVal + 1
	if (paramName === 'OSCILLATOR FREQUENCY') paramVal = freqRatios[paramVal]

	const lfoValues = ['SAWTOOTH', 'SQUARE', 'TRIANGLE', 'SAMPLE/HOLD']

	if (paramName === 'LFO WAVE') paramVal = lfoValues[paramVal]

	const binarySwitch = ['OFF', 'ON']
	const switches = [
		'AMP MODULATION ENABLE',
		'PORTAMENTO',
		'PORTAMENTO FOOTSWITCH',
		'SUSTAIN FOOTSWITCH',
		'LFO SYNC',
	]

	if (switches.includes(paramName)) paramVal = binarySwitch[paramVal]

	const monoPoly = ['POLY', 'MONO']
	if (paramName === 'POLY | MONO') paramVal = monoPoly[paramVal]

	const textOpacity = 0.7

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1048"
			height="189"
			fill="none"
			viewBox="0 0 1048 189">
			<defs>
				<filter id="f2" x="-0.2" y="-0.1">
					<feGaussianBlur in="SourceGraphic" stdDeviation="0.69" />
				</filter>
			</defs>
			<g filter="url(#f2)">
				<text
					x="130"
					y="120"
					fill="var(--fm-display-fg)"
					fillOpacity={textOpacity}
					fontFamily="sans-serif"
					fontSize="16"
					textAnchor="middle">
					{paramName ?? 'Welcome to'}
				</text>
				<text
					x="130"
					y="164"
					fill="var(--fm-display-fg)"
					fillOpacity={textOpacity}
					fontFamily="sans-serif"
					fontSize="30"
					textAnchor="middle">
					{paramVal ?? 'DX101!'}
				</text>
			</g>
		</svg>
	)
}

export default DisplayValues
