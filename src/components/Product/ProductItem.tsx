import Button from '../Button/Button'
import styles from './ProductItem.module.scss'
import Img from '@images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import ImgTablet from '@images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import ImgMobile from '@images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'

interface ProductItemProps {
	// product: Product
	isReversed: boolean
}

const ProductItem = ({ isReversed }: ProductItemProps) => {
	return (
		<div
			className={`${styles['product-item']} ${
				isReversed ? styles['row-reverse'] : ''
			}`}
		>
			<picture className={styles['product-image']}>
				<source media='(max-width: 640px)' srcSet={ImgMobile} />
				<source media='(max-width: 1023px)' srcSet={ImgTablet} />
				<img src={Img} alt='Product image' />
			</picture>

			<div className={styles['product-desc']}>
				<span className={styles['subtitle']}>NEW PRODUCT</span>
				<h2>XX99 Mark II Headphones</h2>
				<p>
					The new XX99 Mark II headphones is the pinnacle of pristine audio. It
					redefines your premium headphone experience by reproducing the
					balanced depth and precision of studio-quality sound.
				</p>
				<Button variant='primary'>See Product</Button>
			</div>
		</div>
	)
}

export default ProductItem
