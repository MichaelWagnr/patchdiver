import { useContext, useEffect, useState } from 'react'
import { MidiContext } from '../../contexts/MidiContext'
import { PatchContext } from '../../contexts/PatchContext'
import { dx100Parameters } from './utilities/Dx100.paramData'
import sysexMessage from './utilities/Dx100.sysexMessage'

type Props = {
	id: string
	x: string
	y: string
	fill: string
	x2: string
	y2: string
	type: string
}

const Slider = ({ id, x, y, fill, x2, y2, type }: Props) => {
	const { handlePatchChange, voice } = useContext(PatchContext)

	const { midi } = useContext(MidiContext)
	const [paramPosition, setParamPosition] = useState(0)

	const handleNewPositions = () => {
		const initialValue = voice[id].value

		const maxRange = type === 'switch' ? 20 : 101

		const position =
			initialValue > 0
				? Math.ceil(initialValue / (dx100Parameters[id].max / maxRange))
				: 0

		return position
	}

	useEffect(() => {
		if (voice) {
			setParamPosition(handleNewPositions())
		}
	}, [voice])

	const handleMouse = (e: React.MouseEvent) => {
		document.body.style.cursor = 'grabbing'
		const startY = e.clientY

		const handleMove = (e: MouseEvent) => {
			const maxRange = type === 'switch' ? 20 : 101
			let offsetY =
				type === 'switch'
					? 20 * Math.sign(startY - e.clientY)
					: type === 'lfo'
					? 33 * Math.sign(startY - e.clientY)
					: startY - e.clientY

			// hold shiftKey to finetune
			if (e.shiftKey && type !== 'switch') offsetY = offsetY / 8

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
			transform={`translate(0 -${paramPosition})`}>
			<rect
				id="Rectangle 35_10"
				x={x}
				y={y}
				width="22"
				height="42"
				fill="var(--fm-slider-bg)"
			/>
			<rect
				id="Rectangle 36_10"
				x={x2}
				y={y2}
				width="22"
				height="4"
				fill={fill}
			/>
		</g>
	)
}

export default Slider
