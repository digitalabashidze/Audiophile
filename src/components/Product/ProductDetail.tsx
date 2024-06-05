import { useMoveBack } from '../../hooks/useMoveBack'
import Button from '../Button/Button'
import QuantityBtn from '../QuantityBtn/QuantityBtn'
import styles from './ProductDetail.module.scss'
import Img from '@images/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import ImgTablet from '@images/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import ImgMobile from '@images/product-xx99-mark-two-headphones/mobile/image-product.jpg'

import Img1 from '@images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import Img1Tablet from '@images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
import Img1Mobile from '@images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'

import Img2 from '@images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import Img2Tablet from '@images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
import Img2Mobile from '@images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'

import Img3 from '@images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import Img3Tablet from '@images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
import Img3Mobile from '@images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
import RelatedProducts from '../RelatedProducts/RelatedProducts'

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
			<div className={styles['product-body']}>
				<div className={styles['features']}>
					<h3>FEATURES</h3>
					<p>
						Featuring a genuine leather head strap and premium earcups, these
						headphones deliver superior comfort for those who like to enjoy
						endless listening. It includes intuitive controls designed for any
						situation. Whether you’re taking a business call or just in your own
						personal space, the auto on/off and pause features ensure that
						you’ll never miss a beat.
					</p>
					<p>
						The advanced Active Noise Cancellation with built-in equalizer allow
						you to experience your audio world on your terms. It lets you enjoy
						your audio in peace, but quickly interact with your surroundings
						when you need to. Combined with Bluetooth 5. 0 compliant
						connectivity and 17 hour battery life, the XX99 Mark II headphones
						gives you superior sound, cutting-edge technology, and a modern
						design aesthetic.
					</p>
				</div>
				<div className={styles['in-box']}>
					<h3>in the box</h3>
					<ul>
						<li>
							<span className={styles['quantity']}>1x</span>
							<span className={styles['item']}>Headphone Unit</span>
						</li>
						<li>
							<span className={styles['quantity']}>1x</span>
							<span className={styles['item']}>Headphone Unit</span>
						</li>
						<li>
							<span className={styles['quantity']}>1x</span>
							<span className={styles['item']}>Headphone Unit</span>
						</li>
						<li>
							<span className={styles['quantity']}>1x</span>
							<span className={styles['item']}>Headphone Unit</span>
						</li>
						<li>
							<span className={styles['quantity']}>1x</span>
							<span className={styles['item']}>Headphone Unit</span>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles['product-gallery']}>
				<div className={styles['img-wrapper']}>
					<picture>
						<source media='(max-width: 640px)' srcSet={Img1Mobile} />
						<source media='(max-width: 768px)' srcSet={Img1Tablet} />
						<img src={Img1} alt='' />
					</picture>
					<picture>
						<source media='(max-width: 640px)' srcSet={Img2Mobile} />
						<source media='(max-width: 768px)' srcSet={Img2Tablet} />
						<img src={Img2} alt='' />
					</picture>
				</div>

				<picture className={styles['img']}>
					<source media='(max-width: 640px)' srcSet={Img3Mobile} />
					<source media='(max-width: 768px)' srcSet={Img3Tablet} />
					<img src={Img3} alt='' />
				</picture>
			</div>
			<div className='product-footer'>
				<RelatedProducts />
			</div>
		</div>
	)
}

export default ProductDetail
