import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, data }) => {
  const modalOverlayRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalOverlayRef.current && !modalOverlayRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} ref={modalOverlayRef}>
      <div className={styles.modalContent}>
        <h2>Student Details</h2>
        <div>
          <strong>Guide:</strong> {data.guide}
        </div>
        <div>
          <strong>Address:</strong> {data.address}
        </div>
        <div>
          <strong>Emergency Phone:</strong> {data.emergencyPhone}
        </div>
        <div>
          <strong>Parent Email:</strong> {data.parentEmail}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    guide: PropTypes.string,
    address: PropTypes.string,
    emergencyPhone: PropTypes.string,
    parentEmail: PropTypes.string,
  }).isRequired,
}

export default Modal
