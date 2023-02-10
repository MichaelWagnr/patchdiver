import { createContext, ReactNode, useState } from 'react'
import { midiObject } from '../types'

export const MidiContext = createContext(null)

const MidiProvider = ({ children }: { children: ReactNode }) => {
	const [midi, setMidi] = useState<midiObject | null>(null)

	const requestMidi = () => {
		const onMIDISuccess = (midiAccess: WebMidi.MIDIAccess) => {
			const midi: midiObject = {
				midiAccess: midiAccess,
				input: null,
				output: null,
				send: null,
			}
			midiAccess.inputs.forEach((input) => (midi.input = input))
			midiAccess.outputs.forEach((output) => (midi.output = output))
			midi.send = function (message, timestamp = null) {
				this.midiAccess.outputs.get(midi.output.id).send(message, timestamp)
			}

			// midi.input.onmidimessage = (e: WebMidi.MIDIMessageEvent) => {
			// 	if (e.data[0] !== 254) console.log(e.data)
			// }

			midi.send([0x90, 60, 0x7f]) // Test tone mid-C, 1000ms
			midi.send([0x80, 60, 0x40], window.performance.now() + 1000.0)

			setMidi(midi)
		}

		const onMIDIFailure = (msg: string) => {
			alert('Failed to get MIDI access - ' + msg)
		}

		navigator
			.requestMIDIAccess({ sysex: true })
			.then(onMIDISuccess, onMIDIFailure)
	}

	return (
		<MidiContext.Provider value={{ midi, requestMidi }}>
			{children}
		</MidiContext.Provider>
	)
}

export default MidiProvider
