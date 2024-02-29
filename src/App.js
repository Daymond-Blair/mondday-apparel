import './components/categories/categories.styles.scss'
import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/sign-in/sign-in.component'

const Shop = () => {
	return <h1>Here's the shop component</h1>
}

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				{/* Its breaking right here when I call SignIn component, investigate there */}
				<Route path="sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	)
}

export default App
