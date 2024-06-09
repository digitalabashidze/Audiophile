import { useNavigate } from 'react-router-dom'
import { RelatedProductDetail } from '../../types/generalTypes'
import Button from '../Button/Button'
import styles from './RelatedProducts.module.scss'

interface RelatedProductsProps {
	relatedProducts: RelatedProductDetail[]
}

const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
	const navigate = useNavigate()

	return (
		<div className={styles['related-products']}>
			<h3>you may also like</h3>
			<div className={styles['products-wrapper']}>
				{relatedProducts.map(relatedProduct => (
					<div className={styles['item']} key={relatedProduct.id}>
						<picture className={styles['img']}>
							<source
								media='(max-width: 767px)'
								srcSet={relatedProduct.product_images[0].tablet_url}
							/>
							<source
								media='(max-width: 1023px)'
								srcSet={relatedProduct.product_images[1].tablet_url}
							/>
							<img
								src={relatedProduct.product_images[1].desktop_url}
								alt='Product image'
							/>
						</picture>
						<h5>{relatedProduct.name.split(' ').slice(0, -1).join(' ')}</h5>
						<Button
							onClick={() => navigate(`/product/${relatedProduct.id}`)}
							variant='primary'
						>
							See Product
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export default RelatedProducts
