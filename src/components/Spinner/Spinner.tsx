import { ScaleLoader } from 'react-spinners'
import styles from './Spinner.module.scss'

const Spinner = () => {
	return (
		<div className={styles.spinner}>
			<ScaleLoader color={'var(--color-accent)'} />
		</div>
	)
}

export default Spinner
