import { BiMessageError } from 'react-icons/bi'
import styles from './Empty.module.scss'

function Empty() {
	return (
		<div className='container'>
			<div className={styles.wrapper}>
				<BiMessageError size={32} className={styles.icon} />
				<h3>No Item Found</h3>
			</div>
		</div>
	)
}

export default Empty
