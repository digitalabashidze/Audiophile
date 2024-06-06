import Button from '../Button/Button'
import styles from './Cart.module.scss'
import Img from '@images/product-xx59-headphones/desktop/image-product.jpg'

const Cart = () => {
	return (
		<div className={styles['cart']}>
			<div className={styles['cart-header']}>
				<h6>cart (3)</h6>
				<Button variant='link'>Remove all</Button>
			</div>
			<div className={styles['cart-body']}>
				<div className='item'>
					<div className='img'>
						<img src={Img} alt='image' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
