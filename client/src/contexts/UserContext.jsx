import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	console.log(user)

	useEffect(() => {
		fetch('/api/persist/')
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
