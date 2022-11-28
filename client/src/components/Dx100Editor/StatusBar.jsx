import { useContext } from 'react'
import styled from 'styled-components'
import { MidiContext } from '../../contexts/MidiContext'
import { SiMidi } from 'react-icons/si'
import { MdPiano } from 'react-icons/md'
import { PatchContext } from '../../contexts/PatchContext'
import { compileVoice } from './Dx100.parseVoice'
import MidiKeys from './MidiKeys'

const StatusBar = ({ editorIsActive, menuIsActive, setMenuIsActive }) => {
	const { midi, requestMidi } = useContext(MidiContext)
	const { patch } = useContext(PatchContext)

	const handleSendPatch = () => {
		midi.send(compileVoice(patch))
	}

	return (
		<Container>
			<MenuButton>
				<input
					id="menu"
					type="checkbox"
					onClick={() => setMenuIsActive(!menuIsActive)}
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
						{midi && (
							<button className="send-voice" onClick={() => handleSendPatch()}>
								Send Patch
							</button>
						)}
						{midi && (
							<MidiKeys
								editorIsActive={editorIsActive}
								menuIsActive={menuIsActive}
							/>
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
	color: var(--fm-status-fg);

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
