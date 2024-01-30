import './components/categories/categories.styles.scss'
import Home from './components/routes/home/home.component'
import { Routes, Route, Outlet } from 'react-router-dom'

const Shop = () => {
	return <h1>Here's the shop component</h1>
}
const App = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />}>
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	)
}

export default App
