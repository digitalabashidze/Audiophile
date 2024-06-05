import { useNavigate } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import Button from '../Button/Button'
import styles from './CategoryItem.module.scss'

interface CategoryItemProps {
	category: string
	img: string
	onClose?: () => void
}

const CategoryItem: React.FC<CategoryItemProps> = ({
	category,
	img,
	onClose,
}) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/products/${category}`)
		if (onClose) {
			onClose()
		}
	}

	return (
		<div className={styles['category-item']}>
			<div className={styles['image']}>
				<img src={img} alt={`${category}`} />
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
