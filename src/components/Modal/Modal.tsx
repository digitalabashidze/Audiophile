import { ReactNode } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
	position?: 'left' | 'right' | 'center'
}

const Modal = ({
	children,
	isOpen,
	onClose,
	position = 'center',
}: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className={`${styles.overlay} ${styles[position]}`} onClick={onClose}>
			<div
				className={`${styles.modal} ${styles[position]}`}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
