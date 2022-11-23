import { useContext } from 'react'
import styled from 'styled-components'
import { MidiContext } from '../../contexts/MidiContext'
import { SiMidi } from 'react-icons/si'
import { GrSend } from 'react-icons/gr'
import { GoPlug } from 'react-icons/go'

import {
	MdArrowRight,
	MdPiano,
	MdContactless,
	MdLaunch,
	MdSettingsInputSvideo,
	MdOutlineContactless,
	MdOutlineCable,
	MdOutlineRssFeed,
} from 'react-icons/md'

const StatusBar = ({ isActive, setIsActive }) => {
	const { midi, requestMidi } = useContext(MidiContext)

	return (
		<Container>
			<MenuButton>
				<input
					id="menu"
					type="checkbox"
					onClick={() => setIsActive(!isActive)}
				/>
				<label className="btn" htmlFor="menu">
					<span></span>
				</label>
			</MenuButton>
			<div className="connect">
				{!midi || midi.output.state === 'disconnected' ? (
					<button
						onClick={() => requestMidi({ logInput: true })}
						className="connect">
						<MdPiano />
						<SiMidi className="midi-icon" />
						{/* <MdOutlineCable /> */}
					</button>
				) : (
					<>
						<MidiConnection>
							<p>
								<span className="ports">Input</span> | {midi.input.manufacturer}{' '}
								{midi.input.name} <span>{midi.input.state} </span>
							</p>
							<p>
								<span className="ports">Output</span> |{' '}
								{midi.output.manufacturer} {midi.output.name}{' '}
								<span>{midi.output.state} </span>
							</p>
						</MidiConnection>
						<button>Test</button>
					</>
				)}
			</div>
			{midi && <button>Send Voice</button>}
		</Container>
	)
}

const Container = styled.div`
	margin-top: -2px;
	height: 44px;
	width: 1330px;
	grid-row: 3;
	grid-column: span 5;
	display: flex;
	gap: 22px;
	align-items: center;
	padding: 5px 10px;
	background-color: var(--fm-status-bg);
	position: relative;

	button {
		cursor: pointer;
		background: inherit;
		border: 1px solid var(--fm-status-fg);
		color: var(--fm-status-fg);
		border-radius: 5px;
		padding: 7.5px 10px;

		transition: all 0.5s;
		&:hover {
			background: var(--fm-status-fg);
			color: var(--fm-status-bg);
			transform: scale(1.1);
		}

		&.connect {
			padding: 2px 15px 2px;
			font-size: 1.2rem;
			.midi-icon {
				font-size: 1.4rem;
				padding: 3.5px 1.5px 0px 0px;
			}
		}
	}

	.connect {
		flex: 1;
	}
`

const MidiConnection = styled.div`
	height: 100%;

	span {
		font-weight: bold;

		&.ports {
			width: 60px;
			display: inline-block;
		}
	}
`

const MenuButton = styled.div`
	#menu {
		opacity: 0;
		/* width: 22px;
		height: 52px; */
	}
	#menu:checked + .btn > span {
		transform: rotate(45deg);
		background-color: var(--primary-fg-light);
	}
	#menu:checked + .btn > span::before {
		top: 0;
		transform: rotate(0deg);
		background-color: var(--primary-fg-light);
	}
	#menu:checked + .btn > span::after {
		top: 0;
		transform: rotate(90deg);
		background-color: var(--primary-fg-light);
	}
	.btn {
		position: absolute;
		top: 20.5px;
		left: 12px;
		width: 26px;
		height: 26px;
		cursor: pointer;
		z-index: 10;
	}
	.btn > span,
	.btn > span::before,
	.btn > span::after {
		display: block;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: var(--fm-status-fg);
		transition-duration: 0.14s;
	}
	.btn > span::before {
		content: '';
		top: -8px;
	}
	.btn > span::after {
		content: '';
		top: 8px;
	}
`

export default StatusBar
