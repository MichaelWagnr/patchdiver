import { getLfoParamSliders } from '../Dx100.uiData'
import Slider from '../Slider'

const LfoParams = () => {
	const sliders = getLfoParamSliders()

	return (
		<svg
			width="282"
			height="611"
			fill="none"
			viewBox="0 0 282 611"
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
		</svg>
	)
}

export default LfoParams
