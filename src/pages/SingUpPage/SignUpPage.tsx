import SignUpForm from '../../components/SignUp/SignUp'
import styles from './SingUpPage.module.scss'

const SignUpPage = () => {
	return (
		<div className={styles['sign-up-page']}>
			<div className='container'>
				<SignUpForm />
			</div>
		</div>
	)
}

export default SignUpPage
