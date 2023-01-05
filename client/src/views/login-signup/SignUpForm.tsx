import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'

const SignUp = () => {
	const [signUpData, setSignUpData] = useState({
		userName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [error, setError] = useState(null)
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

		fetch(`${import.meta.env.VITE_API_BASE}/api/users/`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			method: 'POST',
			body: JSON.stringify(signUpData),
		})
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				if (data.status !== 200) {
					return setError(data.message)
				}
				setUser(data.user)
				navigate('/feed')
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<SignUpForm
			onSubmit={(e) => {
				handleSubmit(e)
			}}>
			<label htmlFor="userName">Name</label>
			<input
				type="text"
				name="userName"
				id="userName"
				autoComplete="off"
				value={signUpData.userName}
				onChange={(e) =>
					setSignUpData({ ...signUpData, userName: e.target.value })
				}
			/>
			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				autoComplete="off"
				value={signUpData.email}
				onChange={(e) =>
					setSignUpData({ ...signUpData, email: e.target.value })
				}
			/>
			<label htmlFor="email">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				value={signUpData.password}
				onChange={(e) =>
					setSignUpData({ ...signUpData, password: e.target.value })
				}
			/>
			<label htmlFor="email">Confirm Password</label>
			<input
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				value={signUpData.confirmPassword}
				onChange={(e) =>
					setSignUpData({ ...signUpData, confirmPassword: e.target.value })
				}
			/>
			<div className="error">
				<p>{error ? error : null}</p>
			</div>
			<button className="sign-up">Sign Up</button>
		</SignUpForm>
	)
}

const SignUpForm = styled.form`
	flex: 1;
	display: grid;
	grid-template-columns: 1fr 2fr;
	height: fit-content;
	align-items: center;

	input {
		background: inherit;
		border: 1px solid var(--primary-fg);
		height: 28px;
		color: var(--primary-fg);
	}

	.error {
		grid-column: 1 / span 2;
		position: absolute;
		left: 0;
		bottom: 142px;
		font-size: 0.8rem;
		animation: beat 6s ease-in-out infinite;
		width: 300px;
		display: grid;
		place-content: center;
		span {
			width: fit-content;
		}
	}

	@keyframes beat {
		0% {
			color: hsl(0, 100%, 25%);
		}
		50% {
			color: hsl(0, 100%, 45%);
		}
		100% {
			color: hsl(0, 100%, 25%);
		}
	}

	.sign-up {
		height: 30px;
		width: 69px;
		justify-self: center;
		grid-column: 1 / span 2;
		background: inherit;
		border: 1px solid var(--primary-fg);
		border-radius: 5px;
		margin-top: 40px;
		color: inherit;
		height: 27px;
		width: 75px;
	}
`

export default SignUp
