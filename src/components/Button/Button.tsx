import React, { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'dark' | 'icon' | 'link'
	icon?: React.ReactNode
	onClick?: () => void
	isLink?: boolean
	to?: string
}

const Button = ({
	variant = 'primary',
	icon,
	children,
	onClick,
	isLink = false,
	to = './',
	...rest
}: ButtonProps) => {
	return isLink ? (
		<Link
			to={to}
			onClick={onClick}
			className={`${styles.btn} ${styles[variant]}`}
		>
			<span>{children}</span>
			{icon && <span className={styles['btn-icon']}>{icon}</span>}
		</Link>
	) : (
		<button
			onClick={onClick}
			className={`${styles.btn} ${styles[variant]}`}
			{...rest}
		>
			<span>{children}</span>
			{icon && <span className={styles['btn-icon']}>{icon}</span>}
		</button>
	)
}

export default Button
