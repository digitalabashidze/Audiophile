import { TbMoodSadDizzy } from 'react-icons/tb'
import Button from '../../components/Button/Button'
import styles from './404.module.scss'

const ErrorPage = () => {
	return (
		<div className={styles['error-page']}>
			<div className='container'>
				<div className={styles['error-wrapper']}>
					<div className={styles['code']}>
						<TbMoodSadDizzy size={100} className={styles['code']} />
						<h1>404</h1>
					</div>
					<h2 className={styles['message']}>Oops! Page not found</h2>
					<p className={styles['desc']}>
						The page you're looking for doesn't exist or has been moved.
					</p>
					<Button isLink to='/' variant='secondary'>
						Go Back Home
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ErrorPage
