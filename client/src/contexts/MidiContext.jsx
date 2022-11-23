import { createContext, useEffect, useState } from 'react'

export const MidiContext = createContext(null)

const MidiProvider = ({ children }) => {
	const [midi, setMidi] = useState(null)

	const requestMidi = (options) => {
		// Log incoming midi messages if options.logInput = true
		const logIncomingMessages = (midiObj) => {
			midiObj.input.onmidimessage = (e) => {
				if (e.data[0] !== 254) console.log(e.data)
			}
		}

		const onMIDISuccess = (midiAccess) => {
			// { midiAccess, input, output, send()}
			const midi = { midiAccess: midiAccess }
			midiAccess.inputs.forEach((input) => (midi.input = input))
			midiAccess.outputs.forEach((output) => (midi.output = output))
			midi.send = function (message, timestamp = null) {
				this.midiAccess.outputs.get(midi.output.id).send(message, timestamp)
			}

			if (options.logInput) logIncomingMessages(midi)

			// Test: send middle C, 1000ms
			midi.send([0x90, 60, 0x7f])
			midi.send([0x80, 60, 0x40], window.performance.now() + 1000.0)

			setMidi(midi)
		}

		const onMIDIFailure = (msg) => {
			alert('Failed to get MIDI access - ' + msg)
		}

		// Request access to midi device with navigator object
		navigator
			.requestMIDIAccess({ sysex: true })
			.then(onMIDISuccess, onMIDIFailure)
	}

	// Request midi access on app mount
	// useEffect(() => {
	// 	requestMidi({ logInput: true })
	// }, []) // eslint-disable-line

	return (
		<MidiContext.Provider value={{ midi, requestMidi }}>
			{children}
		</MidiContext.Provider>
	)
}

export default MidiProvider
