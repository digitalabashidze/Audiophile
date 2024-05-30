import { useMediaQuery } from 'react-responsive'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import cartIcon from '@images/shared/desktop/icon-cart.svg'
import hamburgerMenuIcon from '@images/shared/tablet/icon-hamburger.svg'
import styles from './Header.module.scss'

const Header = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 860px)' })

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles['header-wrapper']}>
					<div className={styles['menu-wrapper']}>
						{isTabletOrMobile && (
							<div className={styles['hamburger-menu']}>
								<img src={hamburgerMenuIcon} alt='menu icon' />
							</div>
						)}

						<div className={styles.logo}>
							<Logo />
						</div>
					</div>

					{!isTabletOrMobile && (
						<div className={styles.nav}>
							<Nav />
						</div>
					)}

					<div className={styles.cart}>
						<img src={cartIcon} alt='cart icon' />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
