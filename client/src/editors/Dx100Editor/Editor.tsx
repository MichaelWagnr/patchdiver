import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MidiContext } from '../../contexts/MidiContext'
import { PatchContext } from '../../contexts/PatchContext'
import DisplaySection from './Display/DisplaySection'

import LfoSection from './LfoSection/LfoSection'
import Menu from './Menu/Menu'
import OpSection from './OpSection/OpSection'
import StatusBar from './StatusBar'
import init from './utilities/Dx100.initialPatch'
import parseVoice from './utilities/Dx100.parseVoice'

type Props = {
	editorIsActive: boolean
}

const Editor = ({ editorIsActive }: Props) => {
	const { setVoice, setPatch } = useContext(PatchContext)
	const [menuIsActive, setMenuIsActive] = useState(false)
	const [theme, setTheme] = useState('default')

	useEffect(() => {
		setVoice(parseVoice(init))
		setPatch(parseVoice(init))
	}, [])

	const operators = [1, 2, 3, 4]

	return (
		<Container className={theme}>
			<Menu menuIsActive={menuIsActive} setTheme={setTheme} />
			{operators.map((operator) => {
				return <OpSection key={'op' + operator} number={operator} />
			})}

			<LfoSection />
			<DisplaySection />
			<StatusBar
				setMenuIsActive={setMenuIsActive}
				menuIsActive={menuIsActive}
				editorIsActive={editorIsActive}
			/>
		</Container>
	)
}

const Container = styled.div`
	height: 660px;
	width: 1334px;
	background: black;
	padding: 0px 2px;
	display: grid;
	column-gap: 2px;
	grid-template-rows: 420px auto auto;
	grid-template-columns: repeat(5, 260px);
	position: relative;
	overflow: hidden;
`

export default Editor
