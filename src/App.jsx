import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import DetailPages from './pages/DetailPages'

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route path="/detail/:id" element={<DetailPages />} /> */}
			</Routes>
		</div>
	)
}

export default App
