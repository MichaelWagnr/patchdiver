import styled from 'styled-components'
import LfoPanel from './LfoPanel'
import LfoParams from './LfoParams'

const LfoSection = () => {
	return (
		<Section>
			<LfoPanel />
			<LfoParams />
		</Section>
	)
}

const Section = styled.div`
	display: grid;
	& > * {
		grid-column: 1;
		grid-row: 1;
	}

	grid-row: span 2;
`

export default LfoSection

/**********************************************************
  

**********************************************************/
