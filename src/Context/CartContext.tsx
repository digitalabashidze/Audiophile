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
	addToCart: (item: CartItem) => void
	removeFromCart: (id: number) => void
	clearCart: () => void
	updateCartQuantity: (id: number, quantity: number) => void
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

	const addToCart = (item: CartItem) => {
		setCartItems(prevItems => {
			const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
			if (existingItem) {
				return prevItems.map(cartItem =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + item.quantity }
						: cartItem
				)
			} else {
				return [...prevItems, item]
			}
		})
	}

	const removeFromCart = (id: number) => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== id))
	}

	const clearCart = () => {
		setCartItems([])
	}

	const updateCartQuantity = (id: number, quantity: number) => {
		setCartItems(prevItems =>
			prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
		)
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart,
				updateCartQuantity,
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
