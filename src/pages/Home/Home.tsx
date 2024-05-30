import Categories from '../../components/Categories/Categories'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles['categories-section']}>
			<div className='container'>
				<Categories />
			</div>
		</div>
	)
}

export default Home
