import styled from 'styled-components'

const Spacer = ({ height, width, children }) => {
	return (
		<Space height={height} width={width}>
			{children}
		</Space>
	)
}

const Space = styled.div`
	height: ${({ height }) => height};
	width: ${({ width }) => width};
`

export default Spacer
