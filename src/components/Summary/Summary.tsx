import { useState, useEffect } from 'react'
import { useCart } from '../../Context/CartContext'
import { SHIPPING_COST, VAT_PERCENT } from '../../utils/constants'
import { formatCurrency } from '../../utils/helpers'
import Button from '../Button/Button'
import styles from './Summary.module.scss'
import Modal from '../Modal/Modal'
import ThankYou from '../ThankYou/ThankYou'

interface SummaryProps {
	onClick: () => void
	paymentMethod: string
	isOpen: boolean
}

const Summary = ({ onClick, paymentMethod, isOpen }: SummaryProps) => {
	const { cartItems } = useCart()
	const [isThankYouOpen, setThankYouOpen] = useState(true)

	useEffect(() => {
		if (isOpen) {
			setThankYouOpen(true)
		}
	}, [isOpen])

	const closeThankYou = () => setThankYouOpen(false)

	const handleClick = () => {
		onClick()
	}

	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}

	const totalPrice = calculateTotal()
	const vat = (totalPrice / 100) * VAT_PERCENT
	const grandTotal = totalPrice + SHIPPING_COST

	const buttonText =
		paymentMethod === 'cashOnDelivery' ? 'CONTINUE' : 'CONTINUE & PAY'

	return (
		<>
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
							<h6>{formatCurrency(SHIPPING_COST)}</h6>
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
					<Button onClick={handleClick}>{buttonText}</Button>
				</div>
			</div>
			<Modal isOpen={isThankYouOpen} onClose={closeThankYou}>
				<ThankYou onClose={closeThankYou} />
			</Modal>
		</>
	)
}

export default Summary
