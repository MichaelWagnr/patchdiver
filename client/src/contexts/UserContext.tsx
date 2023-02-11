import { createContext, ReactNode, useEffect, useState } from 'react'

export const UserContext = createContext(null)

const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_BASE}/api/persist/`, {
			credentials: 'include',
		})
			.then((res) => {
				if (res.status !== 200) {
					return setUser(null)
				}
				return res.json()
			})
			.then((data) => {
				setUser(data.user)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
