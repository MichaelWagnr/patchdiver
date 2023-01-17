import styled from 'styled-components'

type Props = {
	height: string
	width: string
	children?: React.ReactNode
}

const Spacer = ({ height, width, children }: Props) => {
	return (
		<Space height={height} width={width}>
			{children}
		</Space>
	)
}

const Space = styled.div<{ height: string; width: string }>`
	height: ${({ height }) => height};
	width: ${({ width }) => width};
`

export default Spacer
