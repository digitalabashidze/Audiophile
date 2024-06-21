import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useLogin } from '../../hooks/useAuth'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './Login.module.scss'
import { LoginProps } from '../../services/apiAuth'

const Login = () => {
	const methods = useForm<LoginProps>({
		defaultValues: {
			email: '',
			password: '',
		},
	})
	const {
		handleSubmit,
		formState: { errors },
	} = methods
	const { login, isLoading } = useLogin()

	const onSubmit: SubmitHandler<LoginProps> = data => {
		login(data)
	}

	return (
		<div className={styles.login}>
			<Logo fillColor='var(--color-accent)' />
			<div className={styles.wrapper}>
				<h4>Login</h4>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							name='email'
							label='Email'
							type='email'
							placeholder='Enter your email'
							rules={{
								required: 'Email is required',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Invalid email format',
								},
							}}
						/>
						{errors.email && (
							<p className={styles.error}>{errors.email.message}</p>
						)}

						<Input
							name='password'
							label='Password'
							type='password'
							placeholder='Enter your password'
							rules={{ required: 'Password is required' }}
						/>
						{errors.password && (
							<p className={styles.error}>{errors.password.message}</p>
						)}

						<Button type='submit' disabled={isLoading}>
							{isLoading ? 'Logging in...' : 'Login'}
						</Button>
						<p>
							Don't have an Account?{' '}
							<Button variant='link' isLink to='/signup'>
								Sing Up
							</Button>
						</p>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}

export default Login
