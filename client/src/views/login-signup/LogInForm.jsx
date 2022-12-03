import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'

const LogIn = () => {
	const [logInData, setLogInData] = useState({})
	const [error, setError] = useState(null)
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

		fetch('/api/login/', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(logInData),
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
		<LogInForm
			onSubmit={(e) => {
				handleSubmit(e)
			}}>
			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				autoComplete="off"
				value={logInData.email}
				onChange={(e) => setLogInData({ ...logInData, email: e.target.value })}
			/>
			<label htmlFor="email">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				value={logInData.password}
				onChange={(e) =>
					setLogInData({ ...logInData, password: e.target.value })
				}
			/>
			<div className="error">{error ? error : null}</div>

			<button className="log-in" type="submit">
				Log In
			</button>
		</LogInForm>
	)
}

const LogInForm = styled.form`
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
		top: 100px;
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

	.log-in {
		height: 30px;
		width: 69px;
		justify-self: center;
		grid-column: 1 / span 2;
		background: inherit;
		border: 1px solid var(--primary-fg);
		border-radius: 5px;
		margin-top: 107px;
		color: inherit;
		height: 27px;
		width: 60px;
	}
`

export default LogIn
