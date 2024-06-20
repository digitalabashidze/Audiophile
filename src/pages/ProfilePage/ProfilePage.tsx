import Profile from '../../components/Profile/Profile'
import styles from './ProfilePage.module.scss'

const ProfilePage = () => {
	return (
		<div className={styles['profile-page']}>
			<div className='container'>
				<Profile />
			</div>
		</div>
	)
}

export default ProfilePage
