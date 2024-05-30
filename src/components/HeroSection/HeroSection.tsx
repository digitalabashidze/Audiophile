import Button from '../Button/Button'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
	return (
		<section className={styles['hero-section']}>
			<div className='container'>
				<div className={styles['section-wrapper']}>
					<div className={styles['desc']}>
						<span>NEW PRODUCT</span>
						<h1>XX99 Mark II Headphones</h1>
						<p>
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
					</div>
					<Button>See Product</Button>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
