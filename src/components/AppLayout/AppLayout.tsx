import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import HeaderCategorySection from '../HeaderCategorySection/HeaderCategorySection'
import GearSection from '../GearSection/GearSection'
import Categories from '../Categories/Categories'
import styles from './AppLayout.module.scss'

const AppLayout = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'
	const isCheckout = location.pathname === '/checkout'
	const isProfile = location.pathname === '/profile'
	const categories: { [key: string]: string } = {
		'/products/headphones': 'Headphones',
		'/products/speakers': 'Speakers',
		'/products/earphones': 'Earphones',
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
				<ScrollRestoration />
			</main>
			{!isHomePage && !isCheckout && !isProfile && (
				<div className={`container ${styles['padding']}`}>
					<Categories />
				</div>
			)}
			{!isCheckout && !isProfile && <GearSection />}
			<Footer />
		</div>
	)
}

export default AppLayout
