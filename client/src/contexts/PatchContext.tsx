import { ReactNode, useState } from 'react'
import { createContext } from 'react'
import { DX100Patch } from '../types'

export const PatchContext = createContext(null)

const PatchProvider = ({ children }: { children: ReactNode }) => {
	// Patches are user-created in editor
	const [patch, setPatch] = useState(null)
	// Voices are either initial or from preset
	const [voice, setVoice] = useState(null)
	const [currentChanges, setCurrentChanges] = useState<
		[string, number] | null[]
	>([null, null])

	const handlePatchChange = (id: string, name: string, val: number): void => {
		console.log(id, name, val)
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
