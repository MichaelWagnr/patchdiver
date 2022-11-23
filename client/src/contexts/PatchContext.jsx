import { useState } from 'react'
import { createContext } from 'react'

export const PatchContext = createContext(null)

const PatchProvider = ({ children }) => {
	// Patches are user-created in editor
	const [patch, setPatch] = useState(null)
	// Voices are either initial or from preset
	const [voice, setVoice] = useState(null)
	const [currentChanges, setCurrentChanges] = useState([null, null])

	const handlePatchChange = (id, name, key, val) => {
		setCurrentChanges([name, val])
		setPatch({ ...patch, [id]: { ...patch[id], value: val } })
	}

	return (
		<PatchContext.Provider
			value={{
				handlePatchChange,
				currentChanges,
				voice,
				setVoice,
				patch,
				setPatch,
			}}>
			{children}
		</PatchContext.Provider>
	)
}

export default PatchProvider
