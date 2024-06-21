import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useSignUp } from '../../hooks/useAuth'
import { SignUpProps } from '../../services/apiAuth'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './SignUp.module.scss'

interface SignUpFormInputs extends SignUpProps {
	repeat_password: string
}

const SignUpForm = () => {
	const methods = useForm<SignUpFormInputs>({
		defaultValues: {
			email: '',
			password: '',
			repeat_password: '',
			username: '',
		},
	})

	const { handleSubmit, watch } = methods
	const { signUp, isLoading } = useSignUp()

	const password = watch('password')

	const onSubmit: SubmitHandler<SignUpFormInputs> = data => {
		const { email, password, username } = data

		const payload = {
			email,
			password,
			username,
		}

		signUp(payload)
	}

	return (
		<div className={styles['sign-up']}>
			<Logo fillColor='var(--color-accent)' />
			<div className={styles['wrapper']}>
				<h4>Sign Up</h4>
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
						<Input
							name='password'
							label='Password'
							type='password'
							placeholder='Enter your password'
							rules={{ required: 'Password is required' }}
						/>
						<Input
							name='repeat_password'
							label='Repeat Password'
							type='password'
							placeholder='Repeat your password'
							rules={{
								required: 'Repeat Pass is required',
								validate: (value: string) =>
									value === password || 'The passwords do not match',
							}}
						/>
						<Input
							name='username'
							label='Username'
							type='text'
							placeholder='Enter your username'
							rules={{ required: 'Username is required' }}
						/>

						<Button type='submit' disabled={isLoading}>
							{isLoading ? 'Signing up...' : 'Sign Up'}
						</Button>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}

export default SignUpForm
