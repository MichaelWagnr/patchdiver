import { useState } from 'react'
import styled from 'styled-components'
import LogIn from './LogInForm'
import SignUp from './SignUpForm'

const LandingPage = () => {
	const [isNewUser, setIsNewUser] = useState(false)

	return (
		<Container>
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
		</Container>
	)
}

const Container = styled.div`
	display: grid;
	height: 100vh;
	width: 100vw;
	place-content: center;
`

const Form = styled.div`
	display: grid;
	place-content: center;
	grid-template-rows: 3fr 1px 2fr;
	gap: 20px;
	width: 300px;
	height: 300px;
	padding: 20px;
	border: 1px solid var(--primary-fg);
	border-radius: 5px;

	.divider {
		height: 1px;
		width: 100%;
		background: var(--secondary-fg-light);
	}

	.switch {
		background: inherit;
		border: none;
		text-decoration: underline;
		color: var(--secondary-fg-light);
	}
`

export default LandingPage
