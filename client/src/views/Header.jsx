import styled from 'styled-components'
import { HiHeart } from 'react-icons/hi'
import { MdLightMode, MdNightlight } from 'react-icons/md'

const Header = () => {
	return (
		<StyledHeader>
			<h1>
				DX101
				<MdLightMode className="mode" />
			</h1>
			<Sponsor>
				<HiHeart className="heart" />
				Sponsor
			</Sponsor>
			<div className="avatar"></div>
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

	.mode {
		font-size: 1.1rem;
		margin: 0px 20px;
	}

	.avatar {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		border: 2px dotted var(--primary-fg);
		justify-self: end;
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
