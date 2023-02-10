import { useContext, useState, useEffect } from 'react'
import { MidiContext } from '../../contexts/MidiContext'
import { PatchContext } from '../../contexts/PatchContext'
import { dx100Parameters } from './utilities/Dx100.paramData'
import sysexMessage from './utilities/Dx100.sysexMessage'

const Encoder = ({ id, cx, cy, fill, cx2, cy2 }) => {
	const { handlePatchChange, voice } = useContext(PatchContext)

	const { midi } = useContext(MidiContext)
	const [paramPosition, setParamPosition] = useState(0)

	const handleNewPositions = () => {
		const initialValue = voice[id].value

		const maxRange = 269

		const position =
			initialValue > 0
				? Math.floor(initialValue / (dx100Parameters[id].max / maxRange))
				: 0

		return position
	}

	useEffect(() => {
		if (voice) {
			setParamPosition(handleNewPositions())
		}
	}, [voice])

	const handleMouse = (e) => {
		document.body.style.cursor = 'grabbing'
		const startY = e.clientY

		const handleMove = (e) => {
			const maxRange = 269
			let offsetY = (startY - e.clientY) * 2.5

			// hold shiftKey to finetune
			if (e.shiftKey) offsetY = offsetY / 8

			const currentParamPosition =
				paramPosition + offsetY >= maxRange
					? maxRange
					: paramPosition + offsetY <= 0
					? 0
					: paramPosition + offsetY

			setParamPosition(currentParamPosition)

			const paramName = dx100Parameters[id].name
			const paramKey = dx100Parameters[id].param
			const paramVal = Math.floor(
				currentParamPosition * (dx100Parameters[id].max / maxRange)
			)

			handlePatchChange(id, paramName, paramKey, paramVal)

			midi ? midi.send(sysexMessage(paramKey, paramVal)) : null
		}

		window.addEventListener('mousemove', handleMove)

		window.onmouseup = (e) => {
			document.body.style.cursor = 'auto'
			window.removeEventListener('mousemove', handleMove)
		}
	}

	return (
		<g
			id={id}
			onMouseDown={(e) => handleMouse(e)}
			transform={`rotate(${paramPosition} ${cx} ${cy})`}>
			<circle
				id="Ellipse 1_2"
				cx={cx}
				cy={cy}
				r="11"
				// transform="rotate(-134.5 220 396)"
				fill="var(--fm-slider-bg)"
			/>
			<circle
				id="Ellipse 7"
				cx={cx2}
				cy={cy2}
				r="2"
				// transform="rotate(-134.5 214.294 401.607)"
				fill={fill}
			/>
		</g>
	)
}

export default Encoder
