import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'dark' | 'icon'
	icon?: React.ReactNode
	onClick?: () => void
}

const Button = ({
	variant = 'primary',
	icon,
	children,
	onClick,
	...rest
}: ButtonProps) => {
	return (
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
