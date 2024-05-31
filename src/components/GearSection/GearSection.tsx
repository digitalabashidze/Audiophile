import Img from '@images/shared/desktop/image-best-gear.jpg'
import ImgTablet from '@images/shared/tablet/image-best-gear.jpg'
import ImgMobile from '@images/shared/mobile/image-best-gear.jpg'
import styles from './GearSection.module.scss'

const GearSection = () => {
	return (
		<div className={styles['gear-section']}>
			<div className='container'>
				<div className={styles['wrapper']}>
					<div className={styles['section-desc']}>
						<h2>
							Bringing you the <span>best</span> audio gear
						</h2>
						<p>
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
					<picture className={styles['section-image']}>
						<source media='(max-width: 560px)' srcSet={ImgMobile} />
						<source media='(max-width: 985px)' srcSet={ImgTablet} />
						<img src={Img} alt='Gear' />
					</picture>
				</div>
			</div>
		</div>
	)
}

export default GearSection
