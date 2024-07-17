import { useMutation } from '@tanstack/react-query'
import { CreateOrderProps, createOrder } from '../services/apiOrders'
import toast from 'react-hot-toast'

export function useCreateOrder() {
	const { mutate: createOrderMutation, status } = useMutation({
		mutationFn: (args: CreateOrderProps) => createOrder(args),
		onSuccess: () => {
			toast.success('Order placed successfully!')
		},
		onError: (err: Error) => {
			console.error('Error:', err.message)
			toast.error('Failed to place order. Please try again.')
		},
	})

	return {
		createOrder: createOrderMutation,
		isLoading: status === 'pending',
	}
}
