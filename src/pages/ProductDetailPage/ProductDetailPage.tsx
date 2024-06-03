import ProductDetail from '../../components/Product/ProductDetail'
import styles from './ProductDetailPage.module.scss'

const ProductDetailPage = () => {
	return (
		<div className={styles['product-detail-page']}>
			<div className='container'>
				<ProductDetail />
			</div>
		</div>
	)
}

export default ProductDetailPage
