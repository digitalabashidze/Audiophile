import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CartProvider } from './Context/CartContext'
import Home from './pages/Home/Home'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import Checkout from './pages/Checkout/Checkout'
import AppLayout from './components/AppLayout/AppLayout'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import ErrorPage from './pages/404/404'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000,
			staleTime: 0,
		},
	},
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: '/products/:categoryName',
				element: <CategoriesPage />,
			},
			{ path: '/product/:productId', element: <ProductDetailPage /> },
			{ path: '/checkout', element: <Checkout /> },
		],
	},
	{ path: '*', element: <ErrorPage /> },
])

function App() {
	return (
		<CartProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</CartProvider>
	)
}

export default App
