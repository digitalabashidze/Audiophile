import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Checkout from './pages/Checkout/Checkout'
import AppLayout from './components/AppLayout/AppLayout'
import CategoriesPage from './pages/CategoriesPages/CategoriesPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='/headphones' element={<CategoriesPage />} />
					<Route path='/speakers' element={<CategoriesPage />} />
					<Route path='/earphones' element={<CategoriesPage />} />
					<Route path='/product/:productId' element={<ProductDetail />} />
					<Route path='/checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
