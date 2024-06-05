import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from './pages/Home/Home'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import Checkout from './pages/Checkout/Checkout'
import AppLayout from './components/AppLayout/AppLayout'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000,
			staleTime: 0,
		},
	},
})

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Router>
				<Routes>
					<Route path='/' element={<AppLayout />}>
						<Route index element={<Home />} />
						<Route
							path='/products/:categoryName'
							element={<CategoriesPage />}
						/>
						<Route path='/product/:productId' element={<ProductDetailPage />} />
						<Route path='/checkout' element={<Checkout />} />
					</Route>
				</Routes>
			</Router>
		</QueryClientProvider>
	)
}

export default App
