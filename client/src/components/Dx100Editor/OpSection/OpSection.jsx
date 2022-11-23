import styled from 'styled-components'
import OpPanel from './OpPanel'
import OpParams from './OpParams'

const OpSection = ({ number }) => {
	const op = `op${number}`

	return (
		<Section>
			<OpPanel operator={op} />
			<OpParams operator={op} />
		</Section>
	)
}

const Section = styled.div`
	display: grid;
	& > * {
		grid-column: 1;
		grid-row: 1;
	}
`

export default OpSection

/**********************************************************
  OpSection:

  The OpSection is the background Panel and Sliders of each FM operator. 

  OpSection takes a number from it's parent component and returns a Section div with a Panel component and a Params component. The two components are superimposed on top of one another and `op${number}` is passed down as props to identify which operator is referenced by said OpSection.

**********************************************************/
