import styled from 'styled-components'

const SignUp = () => {
	return (
		<SignUpForm>
			<label htmlFor="userName">Name</label>
			<input type="text" name="userName" id="userName" autoComplete="off" />
			<label htmlFor="email">Email</label>
			<input type="text" name="email" id="email" autoComplete="off" />
			<label htmlFor="email">Password</label>
			<input type="password" name="password" id="password" />
			<button className="sign-up">Sign Up</button>
		</SignUpForm>
	)
}

const SignUpForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 2fr;
	height: fit-content;
	gap: 5px;
	align-items: center;
	/* border: 1px solid red; */

	input {
		background: inherit;
		border: 1px solid var(--primary-fg);
		height: 28px;
		color: var(--primary-fg);
	}

	.sign-up {
		height: 30px;
		width: 69px;
		justify-self: center;
		grid-column: 1 / span 2;
		background: inherit;
		border: 1px solid var(--primary-fg);
		border-radius: 5px;
		margin-top: 10px;
		color: inherit;
	}
`

export default SignUp
