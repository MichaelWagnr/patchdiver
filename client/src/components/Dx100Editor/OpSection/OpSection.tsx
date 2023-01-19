import styled from 'styled-components'
import OpPanel from './OpPanel'
import OpParams from './OpParams'

type Props = {
	number: number
}

const OpSection = ({ number }: Props) => {
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
