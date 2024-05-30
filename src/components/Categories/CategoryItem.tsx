import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './CategoryItem.module.scss'
import { RiArrowRightSLine } from 'react-icons/ri'

interface CategoryItem {
	category: string
	img: string
}

const CategoryItem = ({ category, img }: CategoryItem) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/${category}`)
	}

	return (
		<div className={styles['category-item']}>
			<div className={styles['image']}>
				<img src={img} alt='headphones' />
			</div>
			<h6>{category}</h6>
			<Button
				onClick={handleClick}
				variant='icon'
				icon={<RiArrowRightSLine size={20} />}
			>
				Shop
			</Button>
		</div>
	)
}

export default CategoryItem
