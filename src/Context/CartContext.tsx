import {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from 'react'

interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
	image: string
}

interface CartContextProps {
	cartItems: CartItem[]
	updateCart: (item: CartItem) => void
	clearCart: () => void
}

const CartContext = createContext<CartContextProps | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>(() => {
		const savedCart = localStorage.getItem('cart')
		return savedCart ? JSON.parse(savedCart) : []
	})

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems))
	}, [cartItems])

	const updateCart = (item: CartItem) => {
		setCartItems(prevItems => {
			const existingItem = prevItems.find(cartItem => cartItem.id === item.id)

			if (existingItem) {
				return prevItems
					.map(cartItem =>
						cartItem.id === item.id
							? { ...cartItem, quantity: item.quantity }
							: cartItem
					)
					.filter(cartItem => cartItem.quantity > 0)
			} else {
				return item.quantity > 0 ? [...prevItems, item] : prevItems
			}
		})
	}

	const clearCart = () => {
		setCartItems([])
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				updateCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}
	return context
}
