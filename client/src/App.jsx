import { Routes, Route } from 'react-router-dom'
import Header from './views/Header'
import LogInPage from './views/login-signup/LogInPage'
import Feed from './views/feed/Feed'
import NotFound from './views/NotFound'
import { useState } from 'react'
import Support from './views/support/Support'

function App() {
	const [theme, setTheme] = useState('dark')

	return (
		<div className={theme}>
			<Header theme={theme} setTheme={setTheme} />
			<Routes>
				<Route path="/" element={<LogInPage />} />
				<Route path="/profile/*" element={<Feed profileView={true} />} />
				<Route path="/feed/*" element={<Feed profileView={false} />} />
				<Route path="/support" element={<Support />} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</div>
	)
}

export default App
