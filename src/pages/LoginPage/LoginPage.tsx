import Login from '../../components/Login/Login'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
	return (
		<div className={styles['login-page']}>
			<div className='container'>
				<Login />
			</div>
		</div>
	)
}
export default LoginPage
