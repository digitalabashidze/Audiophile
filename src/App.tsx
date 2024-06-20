import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from './Context/CartContext'
import Home from './pages/Home/Home'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import Checkout from './pages/Checkout/Checkout'
import AppLayout from './components/AppLayout/AppLayout'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import ErrorPage from './pages/404/404'
import LoginPage from './pages/LoginPage/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import SignUpPage from './pages/SingUpPage/SignUpPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
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
			{
				path: '/checkout',
				element: (
					<ProtectedRoute>
						<Checkout />
					</ProtectedRoute>
				),
			},
			{
				path: '/profile',
				element: (
					<ProtectedRoute>
						<ProfilePage />
					</ProtectedRoute>
				),
			},
		],
	},
	{ path: '*', element: <ErrorPage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/signup', element: <SignUpPage /> },
])

function App() {
	return (
		<CartProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<RouterProvider router={router} />
				<Toaster
					position='top-center'
					gutter={12}
					containerStyle={{ margin: '8px' }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 5000,
						},
						style: {
							fontSize: '16px',
							maxWidth: '500px',
							padding: '16px 24px',
							backgroundColor: 'var(--color-white)',
							color: 'var(--color-accent)',
						},
					}}
				/>
			</QueryClientProvider>
		</CartProvider>
	)
}

export default App
