import Button from '../../Button/Button'
import Img from '@images/shared/desktop/earphones-bg-desktop.png'
import styles from './SectionThree.module.scss'

const SectionThree = () => {
	return (
		<div className={styles['section-three']}>
			<div className={styles['section-image']}>
				<img src={Img} alt='Earphones' />
			</div>
			<div className={styles['section-desc']}>
				<h4>YX1 EARPHONES</h4>
				<div>
					<Button isLink to='/product/1' variant='secondary'>
						See Product
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SectionThree
