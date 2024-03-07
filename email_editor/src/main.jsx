import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/home/Home.jsx'
import Provider from './Provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider>
			<Home />
		</Provider>
	</React.StrictMode>
)
