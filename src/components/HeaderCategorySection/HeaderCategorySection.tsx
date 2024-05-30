import styles from './HeaderCategorySection.module.scss'

interface HeaderCategorySectionProps {
	categoryName: string
}

const HeaderCategorySection = ({
	categoryName,
}: HeaderCategorySectionProps) => {
	return (
		<div className={styles['header-category']}>
			<div className='container'>
				<div className={styles['wrapper']}>
					<h2>{categoryName}</h2>
				</div>
			</div>
		</div>
	)
}

export default HeaderCategorySection
