import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HeadPhones from './pages/HeadPhones/HeadPhones'
import Speakers from './pages/Speakers/Speakers'
import EarPhones from './pages/EarPhones/EarPhones'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Checkout from './pages/Checkout/Checkout'
import AppLayout from './components/AppLayout/AppLayout'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='/headphones' element={<HeadPhones />} />
					<Route path='/speakers' element={<Speakers />} />
					<Route path='/earphones' element={<EarPhones />} />
					<Route path='/product/:productId' element={<ProductDetail />} />
					<Route path='/checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
