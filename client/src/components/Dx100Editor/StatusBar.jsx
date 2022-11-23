import { useContext } from 'react'
import styled from 'styled-components'
import { MidiContext } from '../../contexts/MidiContext'
import { SiMidi } from 'react-icons/si'
import { MdPiano } from 'react-icons/md'

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

			<div>
				{!midi || midi.output.state === 'disconnected' ? (
					<button
						onClick={() => requestMidi({ logInput: true })}
						className="connect">
						<MdPiano />
						<SiMidi className="midi-icon" />
					</button>
				) : (
					<MidiIsConnected>
						<MidiPortInfo>
							<p>
								<span className="ports">Input</span> | {midi.input.manufacturer}{' '}
								{midi.input.name} <span>{midi.input.state} </span>
							</p>
							<p>
								<span className="ports">Output</span> |{' '}
								{midi.output.manufacturer} {midi.output.name}{' '}
								<span>{midi.output.state} </span>
							</p>
						</MidiPortInfo>
						{midi && <button className="send-voice">Send Voice</button>}
						{midi && (
							<MidiKeys>
								<div className="row1">
									<Key>w</Key>
									<Key>e</Key>
									<div className="large space"></div>
									<Key>t</Key>
									<Key>y</Key>
									<Key>u</Key>
									<div className="xl space"></div>
									<Key>+</Key>
								</div>
								<div className="row2">
									<Key>a</Key>
									<Key>s</Key>
									<Key>d</Key>
									<div className="space"></div>
									<Key>f</Key>
									<Key>g</Key>
									<Key>h</Key>
									<Key>j</Key>
									<div className="space"></div>
									<Key>k</Key>
									<div className="space"></div>
									<Key>-</Key>
								</div>
							</MidiKeys>
						)}
					</MidiIsConnected>
				)}
			</div>
		</Container>
	)
}

const Container = styled.div`
	margin-top: -2px;
	height: 44px;
	width: 1330px;
	grid-row: 3;
	grid-column: span 5;
	display: grid;
	grid-template-columns: 30px 1fr;
	grid-template-rows: 44px;
	gap: 22px;
	align-content: center;
	padding: 30px 10px;
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
`

const MidiIsConnected = styled.div`
	display: grid;
	grid-template-rows: 44px;
	grid-template-columns: 875px 100px 1fr;
	align-items: center;

	.send-voice {
		height: 37px;
		width: 100px;
		position: relative;
		bottom: 5px;
	}
`

const MidiPortInfo = styled.div`
	height: 100%;
	color: var(--fm-typography);

	span {
		font-weight: bold;

		&.ports {
			width: 60px;
			display: inline-block;
		}
	}
`

const MidiKeys = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	padding: 1px 0px 10px 33px;

	.space {
		display: inline-block;
		width: 1ch;
	}

	.large {
		width: 34px;
	}

	.xl {
		width: 56px;
	}
	.row1 {
		position: relative;
		left: 12px;
	}
`

const Key = styled.div`
	display: inline-block;
	border: 1px solid var(--fm-typography);
	color: var(--fm-typography);
	height: 20px;
	width: 20px;
	text-align: center;
	padding-top: 2px;
	margin: 1px 2px;
	border-radius: 50%;
	font-size: 0.8rem;
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
		top: 23px;
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
