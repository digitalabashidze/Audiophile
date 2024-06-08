import React, { InputHTMLAttributes } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
	placeholder: string
	type?: string
	rules?: {
		required?: string | boolean
		pattern?: {
			value: RegExp
			message: string
		}
		minLength?: {
			value: number
			message: string
		}
		maxLength?: {
			value: number
			message: string
		}
	}
}

const Input: React.FC<InputProps> = ({
	name,
	label,
	type = 'text',
	rules,
	placeholder,
	...rest
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()

	const errorMessage = errors[name]?.message as string

	return (
		<div
			className={`${styles.input} ${errorMessage ? styles['has-error'] : ''}`}
		>
			<label htmlFor={name}>{label}</label>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field }) => (
					<input
						type={type}
						id={name}
						placeholder={placeholder}
						{...field}
						{...rest}
					/>
				)}
			/>
			{errorMessage && <span className={styles.error}>{errorMessage}</span>}
		</div>
	)
}

export default Input
