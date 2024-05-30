import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Social from '../Social/Social'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles['footer-wrapper']}>
					<div className={styles['footer-top']}>
						<div className={styles['logo']}>
							<Logo />
						</div>
						<div className='nav'>
							<Nav />
						</div>
					</div>
					<div className={styles['footer-body']}>
						<p>
							Audiophile is an all in one stop to fulfill your audio needs.
							We're a small team of music lovers and sound specialists who are
							devoted to helping you get the most out of personal audio. Come
							and visit our demo facility - we’re open 7 days a week.
						</p>
					</div>
					<div className={styles['footer-bottom']}>
						<p>Copyright 2021. All Rights Reserved</p>
						<div className={styles.social}>
							<Social />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
