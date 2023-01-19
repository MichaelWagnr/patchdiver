import {
	getOperatorParamEncoders,
	getOperatorParamSliders,
} from '../Dx100.uiData'
import Encoder from '../Encoder'
import Slider from '../Slider'

type Props = {
	operator: string
}

const OpParams = ({ operator }: Props) => {
	const sliders = getOperatorParamSliders(operator)
	const encoders = getOperatorParamEncoders(operator)

	return (
		<svg
			width="260"
			height="420"
			viewBox="0 0 260 420"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			{Object.keys(sliders).map((slider) => {
				const { x, y, fill, x2, y2, type } = sliders[slider]
				return (
					<Slider
						key={slider}
						id={slider}
						x={x}
						y={y}
						fill={fill}
						x2={x2}
						y2={y2}
						type={type}
					/>
				)
			})}
			{Object.keys(encoders).map((encoder) => {
				const { cx, cy, fill, cx2, cy2 } = encoders[encoder]
				return (
					<Encoder
						key={encoder}
						id={encoder}
						cx={cx}
						cy={cy}
						fill={fill}
						cx2={cx2}
						cy2={cy2}
					/>
				)
			})}
		</svg>
	)
}

export default OpParams
