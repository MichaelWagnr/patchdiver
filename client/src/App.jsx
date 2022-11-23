import styled from 'styled-components'
import Editor from './components/Dx100Editor/Editor'
import { Routes, Route } from 'react-router-dom'
import Header from './views/Header'
import Footer from './views/Footer'
import MainFeed from './views/mainfeed/MainFeed'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/profile/*" element={<h1>Profile</h1>} />
				<Route path="/feed/*" element={<MainFeed />} />
			</Routes>
		</>
	)
}

export default App
