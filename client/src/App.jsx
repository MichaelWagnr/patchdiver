import { Routes, Route } from 'react-router-dom'
import Header from './views/Header'
import LogInPage from './views/login-signup/LogInPage'
import MainFeed from './views/mainfeed/MainFeed'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/login" element={<LogInPage />} />
				<Route path="/profile/*" element={<h1>Profile</h1>} />
				<Route path="/feed/*" element={<MainFeed />} />
				<Route path="/" element={<h1>Main Page</h1>} />
				<Route path="/*" element={<h1>Not Found</h1>} />
			</Routes>
		</>
	)
}

export default App
