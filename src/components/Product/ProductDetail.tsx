import { useMoveBack } from '../../hooks/useMoveBack'
import Button from '../Button/Button'
import QuantityBtn from '../QuantityBtn/QuantityBtn'
import styles from './ProductDetail.module.scss'
import Img from '@images/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import ImgTablet from '@images/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import ImgMobile from '@images/product-xx99-mark-two-headphones/mobile/image-product.jpg'

const ProductDetail = () => {
	const handleBack = useMoveBack()

	return (
		<div className={styles['product-detail']}>
			<div className={styles['back-btn']}>
				<Button onClick={handleBack} variant='link'>
					Go back
				</Button>
			</div>
			<div className={styles['product-header']}>
				<picture className={styles['product-image']}>
					<source media='(max-width: 767px)' srcSet={ImgMobile} />
					<source media='(max-width: 1023px)' srcSet={ImgTablet} />
					<img src={Img} alt='Prodcut image' />
				</picture>
				<div className={styles['product-desc']}>
					<span className={`subtitle ${styles['sub']} `}>NEW PRODUCT</span>
					<h2>XX99 Mark II Headphones</h2>
					<p>
						The new XX99 Mark II headphones is the pinnacle of pristine audio.
						It redefines your premium headphone experience by reproducing the
						balanced depth and precision of studio-quality sound.
					</p>
					<h6>$ 2,999</h6>
					<div className={styles['btn-group']}>
						<QuantityBtn />
						<Button variant='primary'>ADD TO CART</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
