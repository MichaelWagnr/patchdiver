import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import Provider from './contexts/Provider'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import Themes from './styles/Themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<Provider>
		<Router>
			<GlobalStyles />
			<Themes />
			<App />
		</Router>
	</Provider>
	// </React.StrictMode>
)
