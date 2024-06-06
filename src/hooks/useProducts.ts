import { useQuery } from '@tanstack/react-query'
import {
	getProducts,
	getProductsByCategoryName,
	getProductsById,
} from '../services/apiProducts'

export const useProducts = () => {
	const { isLoading, data, error } = useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts(),
	})

	return { isLoading, data, error }
}

export const useProductsByCategory = (category: string) => {
	const { isLoading, data, error } = useQuery({
		queryKey: ['products', category],
		queryFn: () => getProductsByCategoryName(category),
	})

	return { isLoading, data: data || [], error }
}

export const useProductById = (productId: string) => {
	const { isLoading, data, error } = useQuery({
		queryKey: ['products', productId],
		queryFn: () => getProductsById(productId),
	})
	return { isLoading, data, error }
}
