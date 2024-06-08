import Button from '../../Button/Button'
import Img from '@images/shared/desktop/image-zx9-speaker.png'
import ImgTablet from '@images/shared/tablet/image-zx9-speaker.png'
import ImgMobile from '@images/shared/mobile/image-zx9-speaker.png'
import styles from './SectionOne.module.scss'

const SectionOne = () => {
	return (
		<div className={styles['section-one']}>
			<picture className={styles['section-image']}>
				<source media='(max-width: 767px)' srcSet={ImgMobile} />
				<source media='(max-width: 1023px)' srcSet={ImgTablet} />
				<img src={Img} alt='Speaker' />
			</picture>
			<div className={styles['section-desc']}>
				<div className={styles['wrapper']}>
					<h1>ZX9 SPEAKER</h1>
					<p>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<Button isLink={true} to='/product/6' variant='dark'>
						See Product
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SectionOne
