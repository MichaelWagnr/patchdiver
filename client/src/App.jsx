import { Routes, Route } from 'react-router-dom'
import Header from './views/Header'
import LogInPage from './views/login-signup/LogInPage'
import Feed from './views/feed/Feed'
import NotFound from './views/NotFound'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<LogInPage />} />
				<Route path="/profile/*" element={<Feed profileView={true} />} />
				<Route path="/feed/*" element={<Feed profileView={false} />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
