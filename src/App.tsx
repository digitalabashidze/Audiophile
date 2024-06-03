import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import Checkout from './pages/Checkout/Checkout'
import AppLayout from './components/AppLayout/AppLayout'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='/headphones' element={<CategoriesPage />} />
					<Route path='/speakers' element={<CategoriesPage />} />
					<Route path='/earphones' element={<CategoriesPage />} />
					<Route path='/product/:productId' element={<ProductDetailPage />} />
					<Route path='/checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
