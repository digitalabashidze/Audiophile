import Categories from '../../components/Categories/Categories'
import SectionOne from '../../components/HomePageSections/SectionOne/SectionOne'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<>
			<div className={styles['categories-section']}>
				<div className='container'>
					<Categories />
				</div>
			</div>
			<div className={styles['section-one']}>
				<div className='container'>
					<SectionOne />
				</div>
			</div>
		</>
	)
}

export default Home
