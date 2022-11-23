import { useContext, useState } from 'react'
import { MidiContext } from '../../../../contexts/MidiContext'
import MenuView from '../Menu.style'
import styled from 'styled-components'
import { PatchContext } from '../../../../contexts/PatchContext'
import { init, parseVoice } from '../../Dx100.parseVoice'

const Load = () => {
	const { midi } = useContext(MidiContext)
	const { setVoice, setPatch } = useContext(PatchContext)

	const [queuedPatch, setQueuedPatch] = useState(null)

	if (midi) {
		console.log(midi)
		midi.input.onmidimessage = (e) => {
			if (e.data.length === 101) setQueuedPatch(e.data)
		}
	}

	const handleVoiceLoad = () => {
		setVoice(parseVoice(queuedPatch))
		setPatch(parseVoice(queuedPatch))
	}

	const handleInitLoad = () => {
		setVoice(parseVoice(init))
		setPatch(parseVoice(init))
	}

	return (
		<MenuView>
			<LoadMenu>
				<h2>Load</h2>
				<p>
					Once midi connection is established, patches can be sent from the user
					synthesizer to the patch editor by physically selecting a patch on the
					user's synthesizer. Try it out!
				</p>
				<div className="queued-patch">
					{queuedPatch ? (
						<>
							<div className="patch-array">{queuedPatch.toString()}</div>
							<p>Hey! Looks like a pretty cool patch sound.</p>
							<button onClick={() => handleVoiceLoad()}>Load</button>{' '}
							<span className="warning">
								This will overwrite what is currently in the editor
							</span>
						</>
					) : (
						<div className="patch-array"></div>
					)}
				</div>
				<p>Load initialized system patch.</p>
				<button onClick={() => handleInitLoad()}>Load</button>{' '}
				<span className="warning">
					This will overwrite what is currently in the editor
				</span>
			</LoadMenu>
		</MenuView>
	)
}

const LoadMenu = styled.div`
	width: 550px;
	padding-right: 20px;

	.queued-patch {
		height: 400px;
		border-bottom: 1px solid var(--primary-fg);
	}

	.patch-array {
		height: 140px;
		width: 500px;
		border: 1px solid var(--primary-fg);
		word-wrap: break-word;
		font-size: 1.3rem;
		padding: 15px;
	}

	.warning {
		font-size: 0.8rem;
		margin-left: 5px;
		color: var(--fm-typography);
	}

	button {
		border: 1px solid var(--fm-typography);
		border-radius: 5px;
		padding: 5px 15px;
		background: inherit;
		color: var(--fm-typography);
		transition: transform 0.5s;

		:hover {
			transform: scale(1.1);
			color: var(--primary-bg-dark);
			background: var(--fm-typography);
		}
	}
`

export default Load
