import { useParams } from 'react-router-dom'
import { useProductsByCategory } from '../../hooks/useProducts'
import ProductItem from '../../components/Product/ProductItem'
import Spinner from '../../components/Spinner/Spinner'
import styles from './CategoriesPage.module.scss'

const CategoriesPage = () => {
	const { categoryName } = useParams()

	const {
		isLoading,
		data: products,
		error,
	} = useProductsByCategory(categoryName || 'headphones')

	if (isLoading) return <Spinner />

	if (error) return <h1>Somethin went wrong!</h1>

	return (
		<div className={styles['categories-page']}>
			<div className='container'>
				<div className={styles['wrapper']}>
					{products.map((product, index) => (
						<ProductItem
							key={product.id}
							isReversed={index % 2 !== 0}
							product={product}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CategoriesPage
