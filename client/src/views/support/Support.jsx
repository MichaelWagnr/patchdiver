import styled from 'styled-components'
import { SiBuymeacoffee, SiPatreon, SiPaypal } from 'react-icons/si'
import { HiHeart } from 'react-icons/hi'

function Support() {
	return (
		<Container>
			<div className="banner">How to support Patch Diver</div>
			<div className="details">
				<p>
					Patch Diver is currently in it's first iteration. Thank you for your
					patience as the platform continues to improve. If you enjoy this
					application so far, Please consider sharing with a friend.
				</p>
				<p>
					Patch Diver is maintained by a single Developer. Any help to cover
					hosting fees and make future versions possible is greatly appreciated.
					I am committed to adding new features, support for other synth models
					and manufacturers and improving the platform as best I can. Thank you
					for your continued support!
				</p>
			</div>
			<a
				href="https://www.patreon.com/user?u=84268314"
				target="_blank"
				className="link">
				<SiPatreon className="icon" /> Become a Patron
			</a>

			<a
				href="https://www.buymeacoffee.com/patchdiver"
				target="_blank"
				className="link">
				<SiBuymeacoffee className="icon" />
				Make a single contribution
			</a>

			<a
				href="https://paypal.me/patchdiver?country.x=CA&locale.x=en_US"
				target="_blank"
				className="link">
				<SiPaypal className="icon" />
				Make a contribution with Paypal
			</a>
			<p className="thank-you">
				{/* <HiHeart className="heart" />  */}
				Thank you <HiHeart className="heart" />
			</p>
		</Container>
	)
}

const Container = styled.div`
	width: 500px;
	height: 595px;
	border: 1px solid var(--secondary-fg-light);
	border-radius: 5px;
	margin: 70px auto;
	overflow: hidden;

	.banner {
		height: 50px;
		background: var(--primary-bg-light);
		font-size: 1.5rem;
		padding: 12px;
		text-align: center;
	}

	div:not(.banner) {
		padding: 20px;
	}

	.details {
		p {
			margin-bottom: 10px;
		}
	}

	.icon {
		font-size: 2rem;
		color: var(--heart-light);
	}

	.link {
		border: 3px dotted var(--heart-dark);
		border-radius: 5px;
		margin: 10px 20px;
		display: flex;
		gap: 20px;
		padding: 20px;
		align-items: center;
		text-decoration: none;
		color: var(--primary-fg);
		transition: transform 1.5s;

		&:hover {
			transform: scale(1.05);
		}
	}

	.thank-you {
		text-align: center;
		margin-top: 30px;
		font-size: 1.3rem;
		color: hsl(0, 100%, 25%);
	}

	.heart {
		font-size: 1.3rem;
		position: relative;
		top: 3px;
		animation: beat 4.5s ease-in-out infinite;
	}

	@keyframes beat {
		0% {
			color: hsl(0, 100%, 15%);
		}
		50% {
			color: hsl(0, 100%, 25%);
		}
		100% {
			color: hsl(0, 100%, 15%);
		}
	}
`

export default Support
