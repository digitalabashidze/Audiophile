import { useState } from 'react'
import styles from './QuantityBtn.module.scss'

interface QuantityBtnProps {
	initialQuantity?: number
	size?: 'normal' | 'small'
	onChange?: (newQuantity: number) => void
}

const QuantityBtn = ({
	initialQuantity = 1,
	size = 'normal',
	onChange,
}: QuantityBtnProps) => {
	const [quantity, setQuantity] = useState(initialQuantity)

	const increaseQuantity = () => {
		const newQuantity = quantity + 1
		setQuantity(newQuantity)
		if (onChange) {
			onChange(newQuantity)
		}
	}

	const decreaseQuantity = () => {
		const newQuantity = quantity > 1 ? quantity - 1 : 0
		setQuantity(newQuantity)
		if (onChange) {
			onChange(newQuantity)
		}
	}

	return (
		<div className={`${styles['quantity-container']} ${styles[size]}`}>
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
