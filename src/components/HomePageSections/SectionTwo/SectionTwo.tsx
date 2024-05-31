import Button from '../../Button/Button'
import styles from './SectionTwo.module.scss'

const SectionTwo = () => {
	return (
		<div className={styles['section-two']}>
			<div className={styles['section-desc']}>
				<h4>ZX7 SPEAKER</h4>
				<Button variant='secondary'>See Product</Button>
			</div>
		</div>
	)
}

export default SectionTwo
