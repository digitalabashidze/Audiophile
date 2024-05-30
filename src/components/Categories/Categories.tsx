import styles from './Categories.module.scss'
import CategoryItem from './CategoryItem'
import EarPhoneImg from '@images/shared/desktop/category-earphones.png'
import HeadPhoneImg from '@images/shared/desktop/category-headphones.png'
import SpeakerImg from '@images/shared/desktop/category-speakers.png'

interface Category {
	category: string
	img: string
}

const categories: Category[] = [
	{ category: 'headphones', img: HeadPhoneImg },
	{ category: 'speakers', img: SpeakerImg },
	{ category: 'earphones', img: EarPhoneImg },
]

const Categories = () => {
	return (
		<div className={styles.categories}>
			{categories.map(category => (
				<CategoryItem
					key={category.category}
					category={category.category}
					img={category.img}
				/>
			))}
		</div>
	)
}

export default Categories
