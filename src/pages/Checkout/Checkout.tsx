import Button from '../../components/Button/Button'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import styles from './Checkout.module.scss'

const Checkout = () => {
	return (
		<div className={styles.checkout}>
			<div className='container'>
				<div className={styles['btn']}>
					<Button variant='link'>Go Back</Button>
				</div>
				<div className={styles['wrapper']}>
					<CheckoutForm />
				</div>
			</div>
		</div>
	)
}

export default Checkout
