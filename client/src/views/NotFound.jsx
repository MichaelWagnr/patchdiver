import styled from 'styled-components'

const NotFound = () => {
	return (
		<Container>
			<video
				autoPlay
				muted
				loop
				poster="true"
				id="video"
				onPlay={(e) => {
					e.target.playbackRate = 0.4
				}}>
				<source src="barz.mp4" type="video/mp4" />
			</video>
			<div>404: Page not found</div>
		</Container>
	)
}

const Container = styled.div`
	div {
		height: 100vh;
		width: 100vw;
		background: rgb(0, 0, 0, 0.7);
		backdrop-filter: blur(10px);
		display: grid;
		place-content: center;
		font-size: 3rem;
		font-weight: bold;
	}

	#video {
		width: 100vw;
		z-index: -1;
		position: absolute;
		left: 0px;
		top: 0px;
	}
`

export default NotFound
