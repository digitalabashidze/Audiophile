import { ImFacebook2 } from 'react-icons/im'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import styles from './Social.module.scss'

const Social = () => {
	return (
		<div className={styles.social}>
			<ImFacebook2 className={styles.icon} size={24} />
			<FaTwitter className={styles.icon} size={25} />
			<FaInstagram className={styles.icon} size={26} />
		</div>
	)
}

export default Social
