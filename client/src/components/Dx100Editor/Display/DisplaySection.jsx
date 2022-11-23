import { useContext } from 'react'
import styled from 'styled-components'
import { PatchContext } from '../../../contexts/PatchContext'
import DisplayPanel from './DisplayPanel'
import DisplayValues from './DisplayValues'

const DisplaySection = () => {
	return (
		<Section>
			<DisplayPanel />
			<DisplayValues />
		</Section>
	)
}

const Section = styled.div`
	display: grid;
	& > * {
		grid-column: 1;
		grid-row: 1;
	}

	grid-row: 2;
`

export default DisplaySection

/**********************************************************
  

**********************************************************/
