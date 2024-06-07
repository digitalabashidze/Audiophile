import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Categories from '../Categories/Categories'
import Modal from '../Modal/Modal'
import cartIcon from '@images/shared/desktop/icon-cart.svg'
import hamburgerMenuIcon from '@images/shared/tablet/icon-hamburger.svg'
import styles from './Header.module.scss'
import Cart from '../Cart/Cart'

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isCartOpen, setIsCartOpen] = useState(false)
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 860px)' })

	const closeModal = () => setIsModalOpen(false)
	const closeCart = () => setIsCartOpen(false)

	return (
		<>
			<header className={styles.header}>
				<div className='container'>
					<div className={styles['header-wrapper']}>
						<div className={styles['menu-wrapper']}>
							{isTabletOrMobile && (
								<div
									className={styles['hamburger-menu']}
									onClick={() => setIsModalOpen(!isModalOpen)}
								>
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

						<div
							onClick={() => setIsCartOpen(!isCartOpen)}
							className={styles.cart}
						>
							<img src={cartIcon} alt='cart icon' />
						</div>
					</div>
				</div>
			</header>

			<Modal
				style={{
					alignSelf: 'flex-start',
					right: '10rem',
					borderRadius: '0.5rem',
				}}
				isOpen={isCartOpen}
				onClose={closeCart}
			>
				<Cart onClose={closeCart} />
			</Modal>

			<Modal
				style={{
					alignSelf: 'flex-start',
					width: '100%',
					padding: '6.75rem 0 4.19rem',
					borderBottomLeftRadius: '0.5rem',
					borderBottomRightRadius: '0.5rem',
				}}
				isOpen={isModalOpen}
				onClose={closeModal}
			>
				<div className='container'>
					<Categories onClose={closeModal} />
				</div>
			</Modal>
		</>
	)
}

export default Header
