import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom'

interface NavItem {
	label: string
	path: string
}

const navItems: NavItem[] = [
	{ label: 'HOME', path: '/' },
	{ label: 'HEADPHONES', path: '/headphones' },
	{ label: 'SPEAKERS', path: '/speakers' },
	{ label: 'EARPHONES', path: '/earphones' },
]

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map(item => (
					<li key={item.path}>
						<NavLink
							to={item.path}
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
