import styled from 'styled-components'
import { HiHeart } from 'react-icons/hi'
import { MdLightMode, MdNightlight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Header = () => {
	const { user, setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const handleLogOut = () => {
		setUser(null)
		fetch('/api/logout/')
			.then((res) => res.json())
			.then((data) => {
				navigate('/')
			})
	}

	return (
		<StyledHeader>
			<h1>
				<Link to="/feed" className="logo">
					Patch Diver
				</Link>
				<MdLightMode className="mode" />
			</h1>
			{/* <Sponsor>
				<HiHeart className="heart" />
				Support
			</Sponsor> */}
			{!user ? (
				<Link className="log-in" to="/">
					Log In
				</Link>
			) : (
				<>
					<div className="dropdown">
						<span className="user-name">{user.userName}</span>
						<img src={user.avatarSrc} alt={user.userName} className="avatar" />
						<div className="menu">
							<div className="spacer"></div>
							<div
								className="option"
								role="button"
								onClick={() => {
									navigate('/profile/')
								}}>
								Profile
							</div>
							<div
								className="option"
								role="button"
								onClick={() => {
									handleLogOut()
								}}>
								LogOut
							</div>
						</div>
					</div>
				</>
			)}
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	position: absolute;
	top: 0;
	background: rgb(0, 0, 0, 0.5);
	backdrop-filter: blur(3px);
	width: 100%;
	height: 50px;
	z-index: 10;
	display: flex;
	padding: 20px;
	align-items: center;
	gap: 20px;

	font-size: 28px;
	color: var(--primary-fg);

	h1 {
		flex: 1;
	}

	.logo {
		color: inherit;
		text-decoration: none;
	}

	.mode {
		font-size: 1.1rem;
		margin: 0px 20px;
	}

	.log-in {
		font-size: 0.8rem;
		color: inherit;
		text-decoration: none;
		border: 1px solid var(--primary-fg);
		border-radius: 5px;
		padding: 5px 10px;

		&:hover {
			transform: scale(1.1);
			transition: transform 1.5s;
		}
	}

	.user-name {
		color: var(--primary-fg);
		/* font-weight: lighter;
		letter-spacing: -0.5px; */
		font-size: 1rem;
	}

	.avatar {
		height: 35px;
		width: 35px;
		border-radius: 50%;
		/* border: 2px dotted var(--primary-fg); */
		justify-self: end;
	}

	.dropdown {
		span {
			position: relative;
			right: 10px;
			bottom: 12px;
		}
	}

	.dropdown:hover > .menu {
		display: block;
	}

	.menu {
		background: transparent;
		position: absolute;
		right: 0px;
		top: 0px;
		width: 150px;
		height: 150px;
		display: none;

		.spacer {
			height: 50px;
			background: transparent;
		}

		.option {
			display: grid;
			align-content: center;
			justify-content: center;
			height: 50px;
			padding: 15px;
			font-size: 1rem;
			text-justify: center;
			color: var(--secondary-fg-light);
			/* border-bottom: 1px solid var(--secondary-fg-light); */
			background: rgb(0, 0, 0, 0.5);
			backdrop-filter: blur(3px);

			&:hover {
				background: rgb(0, 0, 0, 1);
				/* backdrop-filter: blur(3px); */
				/* color: var(--primary-fg);*/
				/* border-bottom: 1px solid var(--primary-fg); */
				/* background: rgba(125, 125, 125, 0.1); */
				/* background: transparent; */
				color: var(--primary-fg);

				cursor: pointer;
			}
		}

		&:hover {
			display: block;
		}
	}
`

const Sponsor = styled.button`
	padding: 4px 12px;
	display: flex;
	align-items: center;
	gap: 5px;
	background: var(--primary-bg-dark);
	color: var(--primary-fg);
	border: 1px solid var(--primary-bg-light);
	border-radius: 3px;
	transition: transform 1.5s;

	&:hover {
		transform: scale(1.1);
	}

	.heart {
		font-size: 1.3rem;
		position: relative;
		bottom: 1px;
		animation: beat 4.5s ease-in-out infinite;
	}

	@keyframes beat {
		0% {
			color: hsl(0, 100%, 15%);
		}
		50% {
			color: hsl(0, 100%, 35%);
		}
		100% {
			color: hsl(0, 100%, 15%);
		}
	}
`

export default Header
