import { useNavigate } from 'react-router-dom'
import Login from '../../components/Login/Login'
import { useUser } from '../../hooks/useAuth'
import styles from './LoginPage.module.scss'
import { useEffect } from 'react'

const LoginPage = () => {
	const { isAuthenticated } = useUser()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated) {
			const intendedPath = localStorage.getItem('intendedPath') || '/profile'
			localStorage.removeItem('intendedPath')
			navigate(intendedPath, { replace: true })
		}
	}, [isAuthenticated, navigate])

	return (
		<div className={styles['login-page']}>
			<div className='container'>
				<Login />
			</div>
		</div>
	)
}
export default LoginPage
