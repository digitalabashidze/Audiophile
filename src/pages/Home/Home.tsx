import Categories from '../../components/Categories/Categories'
import SectionOne from '../../components/HomePageSections/SectionOne/SectionOne'
import SectionThree from '../../components/HomePageSections/SectionThree/SectionThree'
import SectionTwo from '../../components/HomePageSections/SectionTwo/SectionTwo'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<>
			<section className={styles['categories-section']}>
				<div className='container'>
					<Categories />
				</div>
			</section>
			<section className={styles['section-one']}>
				<div className='container'>
					<SectionOne />
				</div>
			</section>
			<section className={styles['section-two']}>
				<div className='container'>
					<SectionTwo />
				</div>
			</section>
			<section className={styles['section-three']}>
				<div className='container'>
					<SectionThree />
				</div>
			</section>
		</>
	)
}

export default Home
