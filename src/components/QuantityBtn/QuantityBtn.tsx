import { useState } from 'react'
import styles from './QuantityBtn.module.scss'

interface QuantityBtnProps {
	initialQuantity?: number
}

const QuantityBtn = ({ initialQuantity = 1 }: QuantityBtnProps) => {
	const [quantity, setQuantity] = useState(initialQuantity)

	const increaseQuantity = () => {
		setQuantity(prevQuantity => prevQuantity + 1)
	}

	const decreaseQuantity = () => {
		setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
	}

	return (
		<div className={styles['quantity-container']}>
			<button className={styles['quantity-btn']} onClick={decreaseQuantity}>
				-
			</button>
			<span className={styles['quantity-value']}>{quantity}</span>
			<button className={styles['quantity-btn']} onClick={increaseQuantity}>
				+
			</button>
		</div>
	)
}

export default QuantityBtn
