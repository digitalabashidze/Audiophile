import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import {
	getCurrentUser,
	login as loginApi,
	signUp as signUpApi,
	updateCurrentUser,
	logout as logoutApi,
	LoginProps,
	SignUpProps,
	UpdateCurrentUserProps,
} from '../services/apiAuth'
import toast from 'react-hot-toast'

export function useLogin() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const { mutate: login, status } = useMutation({
		mutationFn: (args: LoginProps) => loginApi(args),
		onSuccess: data => {
			queryClient.setQueryData(['user'], data.user)

			const intendedPath = localStorage.getItem('intendedPath') || '/profile'
			navigate(intendedPath, { replace: true })
		},
		onError: err => {
			console.error('Error:', err.message)
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
		mutationFn: (args: SignUpProps) => signUpApi(args),
		onSuccess: () => {
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

export function useUpdateUser() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const { mutate: updateUserMutation, status } = useMutation({
		mutationFn: (args: UpdateCurrentUserProps) => updateCurrentUser(args),
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
