import { useContext, useEffect, useState } from 'react'
import { PatchContext } from '../../../contexts/PatchContext'
import freqRatios from '../Dx100.freqRatios'

const DisplayValues = () => {
	const { patch } = useContext(PatchContext)
	let {
		currentChanges: [paramName, paramVal],
	} = useContext(PatchContext)

	if (paramName === 'ALGORITHM') paramVal = paramVal + 1
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

	// TODO reflecting d2r changes to ADSR is not obvious
	// const init = {
	// 	op4_ar: { value: 31 },
	// 	op4_d1r: { value: 31 },
	// 	op4_d1l: { value: 0 },
	// 	op4_d2r: { value: 15 },
	// 	op4_rr: { value: 15 },
	// 	op3_ar: { value: 31 },
	// 	op3_d1r: { value: 31 },
	// 	op3_d1l: { value: 0 },
	// 	op3_d2r: { value: 15 },
	// 	op3_rr: { value: 15 },
	// 	op2_ar: { value: 31 },
	// 	op2_d1r: { value: 31 },
	// 	op2_d1l: { value: 0 },
	// 	op2_d2r: { value: 15 },
	// 	op2_rr: { value: 15 },
	// 	op1_ar: { value: 31 },
	// 	op1_d1r: { value: 31 },
	// 	op1_d1l: { value: 0 },
	// 	op1_d2r: { value: 15 },
	// 	op1_rr: { value: 15 },
	// }

	// const [adsrValues, setAdsrValues] = useState(init)

	// useEffect(() => {
	// 	setAdsrValues(patch)
	// }, [patch])

	// const {
	// 	op4_ar: { value: op4_ar },
	// 	op4_d1r: { value: op4_d1r },
	// 	op4_d1l: { value: op4_d1l },
	// 	op4_d2r: { value: op4_d2r },
	// 	op4_rr: { value: op4_rr },
	// 	op3_ar: { value: op3_ar },
	// 	op3_d1r: { value: op3_d1r },
	// 	op3_d1l: { value: op3_d1l },
	// 	op3_d2r: { value: op3_d2r },
	// 	op3_rr: { value: op3_rr },
	// 	op2_ar: { value: op2_ar },
	// 	op2_d1r: { value: op2_d1r },
	// 	op2_d1l: { value: op2_d1l },
	// 	op2_d2r: { value: op2_d2r },
	// 	op2_rr: { value: op2_rr },
	// 	op1_ar: { value: op1_ar },
	// 	op1_d1r: { value: op1_d1r },
	// 	op1_d1l: { value: op1_d1l },
	// 	op1_d2r: { value: op1_d2r },
	// 	op1_rr: { value: op1_rr },
	// } = adsrValues

	const opacity = 0.6
	const textOpacity = 0.7
	const width = 3

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
				{/* {patch && (
					<>
						<polyline
							// points=`13,82 ${AR},12 ${D1R},${D1L} ${D2R},50 ${RR}, 82`
							// points={`
							// 13,82

							// ${44 - op1_ar},14

							// ${31 - op1_d1r + (44 - op1_ar)},${80 - op1_d1l * 4.4}

							// ${31 - op1_d2r + (44 - op1_ar) + (31 - op1_d1r)}, ${80 - op1_d2r * 4.4}

							//  ${15 - op1_rr + (31 - op1_d2r) + (44 - op1_ar) + (31 - op1_d1r)}, 82
							// `}
							points={`
					13,82 

					${44 - op1_ar},14 

					${31 - op1_d1r + (44 - op1_ar)},${80 - op1_d1l * 4.4} 

					${31 + (44 - op1_ar) + (31 - op1_d1r)}, ${80 - op1_d1l * 4.4 + op1_d2r}


					`}
							fill="none"
							stroke="var(--fm-display-fg)"
							strokeOpacity={opacity}
							strokeWidth={width}
							// filter="url(#f1)"
						/>
						<polyline
							points={`275,82 ${342 - op2_ar},14 ${378 - op2_d1r},${
								48 - op2_d2r
							} ${456 - op2_d2r},48 ${510 - op2_rr}, 82`}
							fill="none"
							stroke="var(--fm-display-fg)"
							strokeOpacity={opacity}
							strokeWidth={width}
						/>
						<polyline
							// points="537,82 604,14 640,48 718,48 772, 82"
							points={`537,82 ${604 - op3_ar},14 ${640 - op3_d1r},${
								48 - op3_d2r
							} ${718 - op3_d2r},48 ${772 - op3_rr}, 82`}
							fill="none"
							stroke="var(--fm-display-fg)"
							strokeOpacity={opacity}
							strokeWidth={width}
						/>
						<polyline
							// points="799,82 866,14 902,48 980,48 1034, 82"
							points={`799,82 ${866 - op4_ar},14 ${902 - op4_d1r},${
								48 - op4_d2r
							} ${980 - op4_d2r},48 ${1034 - op4_rr}, 82`}
							fill="none"
							stroke="var(--fm-display-fg)"
							strokeOpacity={opacity}
							strokeWidth={width}
						/>
					</>
				)} */}
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
