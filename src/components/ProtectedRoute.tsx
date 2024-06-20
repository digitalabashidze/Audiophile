import { ReactNode, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useUser } from '../hooks/useAuth'
import Spinner from './Spinner/Spinner'

interface ProtectedRouteProps {
	children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { isLoading, isAuthenticated } = useUser()
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			localStorage.setItem('intendedPath', location.pathname)
			navigate('/login')
		}
	}, [isLoading, isAuthenticated, navigate, location.pathname])

	if (isLoading) {
		return <Spinner />
	}

	return isAuthenticated ? children : null
}

export default ProtectedRoute
