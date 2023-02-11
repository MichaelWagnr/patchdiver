import MidiProvider from './MidiContext'
import PatchProvider from './PatchContext'
import UserProvider from './UserContext'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<UserProvider>
			<MidiProvider>
				<PatchProvider>{children}</PatchProvider>
			</MidiProvider>
		</UserProvider>
	)
}

export default Provider
