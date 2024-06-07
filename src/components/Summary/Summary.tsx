import { useCart } from '../../Context/CartContext'
import { formatCurrency } from '../../utils/helpers'
import Button from '../Button/Button'
import styles from './Summary.module.scss'

const vatPercent = 20
const shippingCost = 50

const Summary = ({ onPayClick }: { onPayClick: () => void }) => {
	const { cartItems } = useCart()

	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}

	const totalPrice = calculateTotal()
	const vat = (totalPrice / 100) * vatPercent
	const grandTotal = totalPrice + shippingCost

	return (
		<div className={styles['summary']}>
			<div className={styles['summary-header']}>
				<h6>Summary</h6>
			</div>
			<div className={styles['summary-body']}>
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
						<div className={styles['quantity']}>
							<span>x{item.quantity}</span>
						</div>
					</div>
				))}
			</div>
			<div className={styles['summary-footer']}>
				<div className={styles['price-wrapper']}>
					<div className={styles['total']}>
						<p>Total</p>
						<h6>{formatCurrency(totalPrice)}</h6>
					</div>
					<div className={styles['shipping']}>
						<p>SHIPPING</p>
						<h6>{formatCurrency(shippingCost)}</h6>
					</div>
					<div className={styles['vat']}>
						<p>VAT (INCLUDED)</p>
						<h6>{formatCurrency(vat)}</h6>
					</div>
				</div>
				<div className={styles['grand-total']}>
					<p>GRAND TOTAL</p>
					<h6>{formatCurrency(grandTotal)}</h6>
				</div>
				<Button onClick={onPayClick}>CONTINUE & PAY</Button>
			</div>
		</div>
	)
}

export default Summary
