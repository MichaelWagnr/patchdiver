import MidiProvider from './MidiContext'
import PatchProvider from './PatchContext'

const Provider = ({ children }) => {
	return (
		<MidiProvider>
			<PatchProvider>{children}</PatchProvider>
		</MidiProvider>
	)
}

export default Provider
