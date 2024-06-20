import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMoveBack } from '../../hooks/useMoveBack'
import { useProductById } from '../../hooks/useProducts'
import { useCart } from '../../Context/CartContext'
import { formatCurrency } from '../../utils/helpers'
import { ExtendedProduct } from '../../services/apiProducts'
import Button from '../Button/Button'
import QuantityBtn from '../QuantityBtn/QuantityBtn'
import RelatedProducts from '../RelatedProducts/RelatedProducts'
import Spinner from '../Spinner/Spinner'
import Empty from '../Empty/Empty'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
	const handleBack = useMoveBack()
	const { productId } = useParams<{ productId: string }>()
	const { updateCart, cartItems } = useCart()

	if (!productId) throw new Error(`product not found`)

	const item = cartItems.find(item => item.id === +productId)

	const [quantity, setQuantity] = useState(() => {
		if (item) return item.quantity
		return 1
	})

	useEffect(() => {
		const item = cartItems.find(item => item.id === +productId)
		if (item) {
			setQuantity(item.quantity)
		} else {
			setQuantity(1)
		}
	}, [cartItems, productId])

	const { isLoading, data, error } = useProductById(productId)

	if (isLoading) return <Spinner />

	if (error) return <Empty />

	const {
		name,
		new: isNew,
		description,
		features,
		features_2,
		price,
		product_images,
		product_includes,
		related_products_details,
	} = data as ExtendedProduct

	const {
		desktop_url: Img,
		tablet_url: ImgTablet,
		mobile_url: ImgMobile,
	} = product_images[1]

	const {
		desktop_url: Img1,
		tablet_url: Img1Tablet,
		mobile_url: Img1Mobile,
	} = product_images[2]

	const {
		desktop_url: Img2,
		tablet_url: Img2Tablet,
		mobile_url: Img2Mobile,
	} = product_images[3]

	const {
		desktop_url: Img3,
		tablet_url: Img3Tablet,
		mobile_url: Img3Mobile,
	} = product_images[4]

	const handleAddToCart = () => {
		const newItem = {
			id: +productId,
			name: name.split(' ').slice(0, -1).join(' '),
			price,
			quantity,
			image: Img,
		}
		updateCart(newItem)
	}

	const handleQuantityChange = (newQuantity: number) => {
		setQuantity(newQuantity)
		const updatedItem = {
			id: +productId,
			name: name.split(' ').slice(0, -1).join(' '),
			price,
			quantity: newQuantity,
			image: Img,
		}
		updateCart(updatedItem)
	}

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
					<img src={Img} alt={name} />
				</picture>
				<div className={styles['product-desc']}>
					{isNew && (
						<span className={`subtitle ${styles['sub']} `}>NEW PRODUCT</span>
					)}
					<h2>{name}</h2>
					<p>{description}</p>
					<h6>{formatCurrency(price)}</h6>
					<div className={styles['btn-group']}>
						<QuantityBtn
							minValue={1}
							initialQuantity={quantity}
							onChange={handleQuantityChange}
						/>
						<Button variant='primary' onClick={handleAddToCart}>
							ADD TO CART
						</Button>
					</div>
				</div>
			</div>

			<div className={styles['product-body']}>
				<div className={styles['features']}>
					<h3>FEATURES</h3>
					<p>{features}</p>
					<p>{features_2}</p>
				</div>
				<div className={styles['in-box']}>
					<h3>in the box</h3>
					<ul>
						{product_includes.map(item => (
							<li key={item.id}>
								<span className={styles['quantity']}>{item.quantity}x</span>
								<span className={styles['item']}>{item.item}</span>
							</li>
						))}
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
				<RelatedProducts relatedProducts={related_products_details} />
			</div>
		</div>
	)
}

export default ProductDetail
