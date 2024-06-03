import ProductItem from '../../components/Product/ProductItem'
import styles from './CategoriesPage.module.scss'

const CategoriesPage = () => {
	return (
		<div className={styles['categories-page']}>
			<div className='container'>
				<div className={styles['wrapper']}>
					<ProductItem isReversed={false} />
					<ProductItem isReversed={true} />
					<ProductItem isReversed={false} />
				</div>
			</div>
		</div>
	)
}

export default CategoriesPage
