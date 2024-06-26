import { useRef, useState } from 'react'
import { useCart } from '../../Context/CartContext'
import { useMoveBack } from '../../hooks/useMoveBack'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import Summary from '../../components/Summary/Summary'
import Button from '../../components/Button/Button'
import styles from './Checkout.module.scss'

const Checkout = () => {
	const formRef = useRef<{ submit: () => void }>(null)
	const { cartItems, clearCart } = useCart()
	const handleBack = useMoveBack()
	const [paymentMethod, setPaymentMethod] = useState('eMoney')
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)

	const handleClick = () => {
		if (formRef.current) {
			formRef.current.submit()
		}
	}

	const handlePaymentMethodChange = (method: string) => {
		setPaymentMethod(method)
	}

	const handleSuccessSubmit = (success: boolean) => {
		setIsFormSubmitted(success)
	}

	return (
		<div className={styles.checkout}>
			<div className='container'>
				<div className={styles['btn']}>
					<Button onClick={handleBack} variant='link'>
						Go Back
					</Button>
				</div>
				<div className={styles['wrapper']}>
					<CheckoutForm
						ref={formRef}
						cartItems={cartItems}
						clearCart={clearCart}
						onPaymentMethodChange={handlePaymentMethodChange}
						onSuccessSubmit={handleSuccessSubmit}
					/>
					<Summary
						onClick={handleClick}
						paymentMethod={paymentMethod}
						isOpen={isFormSubmitted}
					/>
				</div>
			</div>
		</div>
	)
}

export default Checkout
