import { supabase } from './supabase'

interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
	image: string
}

export interface CreateOrderProps {
	user_id: string
	name: string
	email: string
	phone_number: string
	address: string
	zip_code: string
	city: string
	country: string
	payment_method: string
	e_money_number?: string
	e_money_pin?: string
	cart_items: CartItem[]
}

export async function createOrder(orderData: CreateOrderProps) {
	const { data, error } = await supabase.from('orders').insert([orderData])

	if (error) throw new Error(error.message)

	return data
}
