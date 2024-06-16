import './components/categories/categories.styles.scss'
import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'
import Shop from './components/shop/shop.component'
import Authentication from './components/authentication/authentication.component'

// this component is currently inside the app, lets modularize and make it an external component

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				{/* Its breaking right here when I call SignIn component, investigate there */}
				<Route path="authentication" element={<Authentication />} />
			</Route>
		</Routes>
	)
}

export default App
