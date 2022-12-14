import styled from 'styled-components'

const NotFound = () => {
	return (
		<Container>
			<div>404: Page not found</div>
		</Container>
	)
}

const Container = styled.div`
	div {
		height: 100vh;
		width: 100vw;
		background: rgb(0, 0, 0, 0.808);
		backdrop-filter: blur(10px);
		display: grid;
		place-content: center;
		font-size: 3rem;
		font-weight: lighter;
		letter-spacing: 35px;
	}

	#video {
		width: 100%;
		z-index: -1;
		position: absolute;
		left: 0px;
		top: 0px;
	}
`

export default NotFound
