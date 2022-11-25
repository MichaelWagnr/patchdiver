import styled from 'styled-components'

const EllipsisSpinner = () => {
	return (
		<Spinner>
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Spinner>
	)
}

const Spinner = styled.div`
	.lds-ellipsis {
		display: inline-block;
		position: relative;
		width: calc(80px / 3);
		height: calc(80px / 3);
	}
	.lds-ellipsis div {
		position: absolute;
		top: calc(33px / 3);
		width: calc(13px / 3);
		height: calc(13px / 3);
		border-radius: 50%;
		background: var(--secondary-fg);
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.lds-ellipsis div:nth-child(1) {
		left: calc(8px / 3);
		animation: lds-ellipsis1 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(2) {
		left: calc(8px / 3);
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(3) {
		left: calc(32px / 3);
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(4) {
		left: calc(56px / 3);
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(calc(24px / 3), 0);
		}
	}
`

export default EllipsisSpinner
