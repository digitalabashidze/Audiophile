import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { FaRegUser } from 'react-icons/fa'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Categories from '../Categories/Categories'
import Modal from '../Modal/Modal'
import Cart from '../Cart/Cart'
import hamburgerMenuIcon from '@images/shared/tablet/icon-hamburger.svg'
import CartIcon from '../CartIcon/CartIcon'
import styles from './Header.module.scss'

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isCartOpen, setIsCartOpen] = useState(false)

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 860px)' })

	const closeModal = () => setIsModalOpen(false)
	const closeCart = () => setIsCartOpen(false)

	return (
		<>
			<div className={styles.header}>
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

						<div className={styles['icons-wrapper']}>
							<Link to='/profile' className={styles.user}>
								<FaRegUser />
							</Link>

							<div
								onClick={() => setIsCartOpen(!isCartOpen)}
								className={styles.cart}
							>
								<CartIcon />
							</div>
						</div>
					</div>
				</div>
			</div>

			<Modal position='right' isOpen={isCartOpen} onClose={closeCart}>
				<Cart onClose={closeCart} />
			</Modal>

			<Modal position='left' isOpen={isModalOpen} onClose={closeModal}>
				<div className='container'>
					<Categories onClose={closeModal} />
				</div>
			</Modal>
		</>
	)
}

export default Header
