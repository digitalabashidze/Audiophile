import { RiArrowRightSLine } from 'react-icons/ri'
import Button from '../Button/Button'
import styles from './CategoryItem.module.scss'

interface CategoryItemProps {
	category: string
	img: string
}

const CategoryItem = ({ category, img }: CategoryItemProps) => {
	return (
		<div className={styles['category-item']}>
			<div className={styles['image']}>
				<img src={img} alt={`${category}`} />
			</div>
			<h6>{category}</h6>
			<Button
				isLink
				to={`/products/${category}`}
				variant='icon'
				icon={<RiArrowRightSLine size={20} />}
			>
				Shop
			</Button>
		</div>
	)
}

export default CategoryItem
