import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import {
	getCurrentUser,
	login as loginApi,
	signUp as signUpApi,
	updateCurrentUser,
	logout as logoutApi,
} from '../services/apiAuth'
import toast from 'react-hot-toast'

interface LoginArgs {
	email: string
	password: string
}

interface SignUpArgs {
	email: string
	password: string
	username: string
}

export function useLogin() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const { mutate: login, status } = useMutation({
		mutationFn: (args: LoginArgs) => loginApi(args),
		onSuccess: data => {
			queryClient.setQueryData(['user'], data.user)

			const intendedPath = localStorage.getItem('intendedPath') || '/profile'
			localStorage.removeItem('intendedPath')
			navigate(intendedPath, { replace: true })
		},
		onError: err => {
			console.log('Error:', err.message)
			toast.error('Provided email or password is incorrect')
		},
	})

	return { login, isLoading: status === 'pending' }
}

export function useUser() {
	const { isLoading, data: user } = useQuery({
		queryKey: ['user'],
		queryFn: getCurrentUser,
	})

	return { isLoading, user, isAuthenticated: !!user }
}

export function useSignUp() {
	const navigate = useNavigate()

	const {
		mutate: signUp,
		status,
		error,
	} = useMutation({
		mutationFn: (args: SignUpArgs) => signUpApi(args),
		onSuccess: () => {
			console.log('Sign-up successful, navigating to login...')
			toast.success(`Account successfully created!`)
			navigate('/login', { replace: true })
		},
		onError: err => {
			console.error('Error during sign-up:', err.message)
			toast.error(`Something went wrong during sign-up`)
		},
	})

	return { signUp, isLoading: status === 'pending', error }
}

interface UpdateUserProps {
	username: string
	full_name: string
	phone_number: string
	address: string
	zip_code: string
	city: string
	country: string
	avatar: FileList | null
}

export function useUpdateUser() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const { mutate: updateUserMutation, status } = useMutation({
		mutationFn: (args: UpdateUserProps) => updateCurrentUser(args),
		onSuccess: () => {
			toast.success('Profile updated successfully!')
			queryClient.invalidateQueries({ queryKey: ['user'] })
			navigate('/profile', { replace: true })
		},
		onError: err => {
			console.error('Error:', err.message)
			toast.error('An error occurred while updating the profile')
		},
	})

	return {
		updateUser: updateUserMutation,
		isLoading: status === 'pending',
	}
}

export function useLogout() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const { mutate: logout, status } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			queryClient.removeQueries()
			navigate('/', { replace: true })
		},
	})

	return { logout, isLoading: status === 'pending' }
}
