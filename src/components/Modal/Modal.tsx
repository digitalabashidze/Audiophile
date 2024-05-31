import { ReactNode, CSSProperties } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
	style?: CSSProperties
}

const Modal = ({ children, isOpen, onClose, style }: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div
				className={styles.modal}
				style={style}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
