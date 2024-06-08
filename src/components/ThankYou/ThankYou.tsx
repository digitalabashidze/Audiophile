import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import { formatCurrency } from '../../utils/helpers'
import { SHIPPING_COST } from '../../utils/constants'
import Icon from '@images/checkout/icon-order-confirmation.svg'
import Button from '../Button/Button'
import styles from './ThankYou.module.scss'

interface ThankYouProps {
	onClose: () => void
}

const ThankYou = ({ onClose }: ThankYouProps) => {
	const { cartItems, clearCart } = useCart()
	const [showMore, setShowMore] = useState(false)
	const navigate = useNavigate()

	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}
	const total = calculateTotal()
	const grandTotal = total + SHIPPING_COST

	const handleToggleShowMore = () => {
		setShowMore(prevShowMore => !prevShowMore)
	}

	const handleClick = () => {
		onClose()
		clearCart()
		navigate('/')
	}

	return (
		<div className={styles['thank-you']}>
			<div className={styles['icon']}>
				<img src={Icon} alt='Icon' />
			</div>
			<div className={styles['title']}>
				<h3>THANK YOU </h3>
				<h3>FOR YOUR ORDER</h3>
			</div>

			<p className={styles['text']}>
				You will receive an email confirmation shortly.
			</p>

			<div className={styles['products-wrapper']}>
				<div className={styles['items']}>
					{(showMore ? cartItems : cartItems.slice(0, 1)).map(item => (
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
							<div className={styles['quantity']}>
								<span>x{item.quantity}</span>
							</div>
						</div>
					))}
					{cartItems.length > 1 && (
						<div className={styles['view-more-less']}>
							<p onClick={handleToggleShowMore}>
								{showMore
									? 'View less'
									: `and ${cartItems.length - 1} other item(s)  `}
							</p>
						</div>
					)}
				</div>
				<div className={styles['grand-total']}>
					<span>GRAND TOTAL</span>
					<h6>{formatCurrency(grandTotal)}</h6>
				</div>
			</div>
			<Button onClick={handleClick}>BACK TO HOME</Button>
		</div>
	)
}

export default ThankYou
