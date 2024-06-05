import Button from '../Button/Button'
import styles from './RelatedProducts.module.scss'
import Img from '@images/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import ImgTablet from '@images/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import ImgMobile from '@images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'

const RelatedProducts = () => {
	return (
		<div className={styles['related-products']}>
			<h3>you may also like</h3>
			<div className={styles['products-wrapper']}>
				<div className={styles['item']}>
					<picture className={styles['img']}>
						<source media='(max-width: 767px)' srcSet={ImgMobile} />
						<source media='(max-width: 1023px)' srcSet={ImgTablet} />
						<img src={Img} alt='Product image' />
					</picture>
					<h5>XX99 MARK I</h5>
					<Button variant='primary'>See Product</Button>
				</div>
				<div className={styles['item']}>
					<picture className={styles['img']}>
						<source media='(max-width: 767px)' srcSet={ImgMobile} />
						<source media='(max-width: 1023px)' srcSet={ImgTablet} />
						<img src={Img} alt='Product image' />
					</picture>
					<h5>XX99 MARK I</h5>
					<Button variant='primary'>See Product</Button>
				</div>
				<div className={styles['item']}>
					<picture className={styles['img']}>
						<source media='(max-width: 767px)' srcSet={ImgMobile} />
						<source media='(max-width: 1023px)' srcSet={ImgTablet} />
						<img src={Img} alt='Product image' />
					</picture>
					<h5>XX99 MARK I</h5>
					<Button variant='primary'>See Product</Button>
				</div>
			</div>
		</div>
	)
}

export default RelatedProducts
