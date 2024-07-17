import { Link } from 'react-router-dom'
import { ImFacebook2 } from 'react-icons/im'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import styles from './Social.module.scss'

const socialLinks = [
	{
		href: 'https://www.facebook.com',
		label: 'Facebook',
		icon: <ImFacebook2 className={styles.icon} size={24} />,
	},
	{
		href: 'https://x.com',
		label: 'Twitter',
		icon: <FaTwitter className={styles.icon} size={24} />,
	},
	{
		href: 'https://www.instagram.com/',
		label: 'Instagram',
		icon: <FaInstagram className={styles.icon} size={24} />,
	},
]

const Social = () => {
	return (
		<div className={styles.social}>
			{socialLinks.map(link => (
				<Link
					key={link.label}
					to={link.href}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={link.label}
				>
					{link.icon}
				</Link>
			))}
		</div>
	)
}

export default Social
