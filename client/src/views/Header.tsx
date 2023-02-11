import styled from 'styled-components'
import { HiHeart } from 'react-icons/hi'
import { MdLightMode, MdNightlight } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

type Props = {
	theme: string
	setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ theme, setTheme }: Props) => {
	const { user, setUser } = useContext(UserContext)
	const navigate = useNavigate()
	const location = useLocation()

	const handleLogOut = () => {
		setUser(null)
		fetch(`${import.meta.env.VITE_API_BASE}/api/logout/`, {
			credentials: 'include',
		})
			.then((res) => res.json())
			.catch((err) => console.log(err))
	}

	return (
		<StyledHeader>
			<h1>
				<Link to="/feed" className="logo">
					Patch Diver
				</Link>
				{/* TODO implement light theme */}
				{/* {theme === 'dark' ? (
					<MdLightMode
						className="mode"
						onClick={() => {
							setTheme('light')
						}}
					/>
				) : (
					<MdNightlight
						className="mode"
						onClick={() => {
							setTheme('dark')
						}}
					/>
				)} */}
			</h1>
			{location.pathname !== '/' && (
				<Support to="/support">
					<HiHeart className="heart" />
					Support
				</Support>
			)}
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
	width: 1440px;
	height: 50px;
	z-index: 15;
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
		cursor: pointer;
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
			z-index: 12;
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

const Support = styled(Link)`
	padding: 4px 12px;
	margin-right: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
	background: var(--primary-bg-dark);
	color: var(--primary-fg);
	border: 1px solid var(--primary-bg-light);
	border-radius: 3px;
	transition: transform 1.5s;
	text-decoration: none;
	font-size: 0.8rem;

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
