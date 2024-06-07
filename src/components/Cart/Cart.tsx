import { useNavigate } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import { formatCurrency } from '../../utils/helpers'
import Button from '../Button/Button'
import QuantityBtn from '../QuantityBtn/QuantityBtn'
import styles from './Cart.module.scss'

interface CartProps {
	onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
	const { cartItems, removeFromCart, clearCart, updateCartQuantity } = useCart()

	const navigate = useNavigate()

	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}

	const totalPrice = calculateTotal()

	const handleQuantityChange = (id: number, newQuantity: number) => {
		if (newQuantity < 1) {
			removeFromCart(id)
		} else {
			updateCartQuantity(id, newQuantity)
		}
	}

	const handleCheckout = () => {
		navigate('/checkout')
		onClose()
	}

	return (
		<div className={styles['cart-modal']}>
			<div className={styles['cart']}>
				<div className={styles['cart-header']}>
					<h6>Cart ({cartItems.length})</h6>
					<Button variant='link' onClick={clearCart}>
						Remove all
					</Button>
				</div>
				<div className={styles['cart-body']}>
					{cartItems.map(item => (
						<div className={styles['item-wrapper']} key={item.id}>
							<div className={styles['item']}>
								<div className={styles['img']}>
									<img src={item.image} alt={item.name} />
								</div>
								<div className={styles['desc']}>
									<p>{item.name}</p>
									<span>{formatCurrency(item.price)}</span>
								</div>
							</div>
							<div className='btn'>
								<QuantityBtn
									initialQuantity={item.quantity}
									size='small'
									onChange={newQuantity =>
										handleQuantityChange(item.id, newQuantity)
									}
								/>
							</div>
						</div>
					))}
				</div>
				<div className={styles['cart-footer']}>
					<div className={styles['total']}>
						<p>Total</p>
						<h6>{formatCurrency(totalPrice)}</h6>
					</div>
					<Button onClick={() => handleCheckout()}>Checkout</Button>
				</div>
			</div>
		</div>
	)
}

export default Cart
