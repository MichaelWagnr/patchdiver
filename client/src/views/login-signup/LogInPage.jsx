import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogIn from './LogInForm'
import SignUp from './SignUpForm'

const LandingPage = () => {
	const [isNewUser, setIsNewUser] = useState(false)

	return (
		<Container>
			<video
				autoPlay
				muted
				loop
				poster="true"
				id="video"
				onPlay={(e) => {
					e.target.playbackRate = 0.6
				}}>
				<source src="tinyocean.mp4" type="video/mp4" />
			</video>

			<Form>
				{isNewUser ? <SignUp /> : <LogIn />}
				<div className="divider"></div>
				<p>
					{isNewUser ? 'Already have an account?' : "Don't have an account?"}{' '}
					<button className="switch" onClick={() => setIsNewUser(!isNewUser)}>
						{isNewUser ? 'log in here' : 'create one here'}
					</button>
				</p>
			</Form>
			<Info>
				<h1>Patch Diver</h1>
				<div className="description">
					<p>
						Patch Diver is a free online patch editor dedicated to hardware
						synthesizers.
					</p>
					<p>
						This web application seeks to solve the problem of 'menu-diving' and
						abstract the complexities of sending sysex midi messages and
						patches.
					</p>
					<p>
						Patches can be categorized and browsed by genre, type of sound and
						source of inspiration - artist or track.
					</p>
					<p>
						Presets can be easily loaded from a synthesizer, saved online and
						shared amongst peers.
					</p>
					<p>
						By design, patches sent to the synthesizer occur in the edit buffer
						and are not saved over pre-existing sounds, making it safe to try
						several presets without overwriting banks with conventional sysex
						messages.
					</p>
					<p className="secondary">
						Registering is necessary in order to have a profile to save patches
						to, but you can look around and try it out
						<Link to="/feed"> here!</Link>
					</p>
					<p className="secondary">Currently supported models: Yamaha DX100</p>
				</div>
			</Info>
		</Container>
	)
}

const Container = styled.div`
	display: grid;
	height: 100vh;
	width: 100vw;
	gap: 100px;
	grid-template-columns: 1fr 2fr;
	place-content: center;
	background-color: rgb(0, 0, 0, 0.4);

	#video {
		width: 100vw;
		z-index: -1;
		position: absolute;
		left: 0px;
		top: 0px;
	}
`

const Form = styled.div`
	background: rgb(0, 0, 0, 0.5);
	backdrop-filter: blur(7px);
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 300px;
	height: 320px;
	padding: 20px;
	border-radius: 5px;
	justify-self: end;
	align-self: center;

	.divider {
		height: 1px;
		width: 100%;
		background: var(--secondary-fg);
	}

	.switch {
		font-size: 1rem;
		position: relative;
		right: 5px;
		top: 5px;
		background: inherit;
		border: none;
		text-decoration: underline;
		color: var(--secondary-fg);
	}
`

const Info = styled.div`
	width: 725px;
	height: 500px;
	padding: 20px;
	border-radius: 5px;
	background: rgb(0, 0, 0, 0.5);
	backdrop-filter: blur(7px);
	justify-self: center;
	align-self: center;
	position: relative;
	top: 20px;

	h1 {
		font-size: 2.1rem;
		color: var(--secondary-fg);
		text-align: end;
		border-top: 1px solid var(--secondary-fg);
	}

	.description {
		position: relative;
		bottom: 25px;
	}

	p {
		width: 500px;
		margin: 20px 0px;
		line-height: 1.2;
	}

	.secondary {
		color: var(--secondary-fg);

		a {
			color: var(--primary-fg);
			text-decoration: none;
		}
	}
`

export default LandingPage
