import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import HeaderCategorySection from '../HeaderCategorySection/HeaderCategorySection'
import styles from './AppLayout.module.scss'
import GearSection from '../GearSection/GearSection'

const AppLayout = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'
	const categories: { [key: string]: string } = {
		'/headphones': 'Headphones',
		'/speakers': 'Speakers',
		'/earphones': 'Earphones',
	}

	const categoryName = categories[location.pathname]

	return (
		<div className={styles['app-layout']}>
			<header className={isHomePage ? styles['header-hero'] : styles.header}>
				<Header />
				{isHomePage && <HeroSection />}
				{categoryName && <HeaderCategorySection categoryName={categoryName} />}
			</header>
			<main className={styles['main-content']}>
				<Outlet />
			</main>
			<GearSection />
			<Footer />
		</div>
	)
}

export default AppLayout
