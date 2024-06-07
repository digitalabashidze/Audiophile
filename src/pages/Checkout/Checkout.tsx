import { useRef } from 'react'
import { useCart } from '../../Context/CartContext'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import Summary from '../../components/Summary/Summary'
import Button from '../../components/Button/Button'
import styles from './Checkout.module.scss'

const Checkout = () => {
	const formRef = useRef<{ submit: () => void }>(null)
	const { cartItems, clearCart } = useCart()

	const handlePayClick = () => {
		if (formRef.current) {
			formRef.current.submit()
		}
	}

	return (
		<div className={styles.checkout}>
			<div className='container'>
				<div className={styles['btn']}>
					<Button variant='link'>Go Back</Button>
				</div>
				<div className={styles['wrapper']}>
					<CheckoutForm
						ref={formRef}
						cartItems={cartItems}
						clearCart={clearCart}
					/>
					<Summary onPayClick={handlePayClick} />
				</div>
			</div>
		</div>
	)
}

export default Checkout
