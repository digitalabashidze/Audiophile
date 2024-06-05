import Button from '../Button/Button'
import styles from './ProductItem.module.scss'
import { Product } from '../../types/generalTypes'
import { useNavigate } from 'react-router-dom'

interface ProductItemProps {
	product: Product
	isReversed: boolean
}

const ProductItem = ({ isReversed, product }: ProductItemProps) => {
	const { id, name, new: isNew, description, product_images } = product
	const { desktop_url, tablet_url, mobile_url } = product_images[0]
	const navigate = useNavigate()
	return (
		<div
			className={`${styles['product-item']} ${
				isReversed ? styles['row-reverse'] : ''
			}`}
		>
			<picture className={styles['product-image']}>
				<source media='(max-width: 640px)' srcSet={mobile_url} />
				<source media='(max-width: 1023px)' srcSet={tablet_url} />
				<img src={desktop_url} alt='Product image' />
			</picture>

			<div className={styles['product-desc']}>
				{isNew && <span className='subtitle'>NEW PRODUCT</span>}
				<h2>{name}</h2>
				<p>{description}</p>
				<Button onClick={() => navigate(`/product/${id}`)} variant='primary'>
					See Product
				</Button>
			</div>
		</div>
	)
}

export default ProductItem
