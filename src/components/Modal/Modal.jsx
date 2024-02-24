import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, data }) => {
  const modalOverlayRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalOverlayRef.current && !modalOverlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);


  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} ref={modalOverlayRef}>
      <div className={styles.modalContent}>
        <h2>Detalles de Emergencia del Estudiante</h2>
        <div>
          <strong>Padre o Tutor:</strong> {data.guide || 'N/A'}
        </div>
        <div>
          <strong>Dirección:</strong> {data.address || 'N/A'}
        </div>
        <div>
          <strong>Teléfono de Emergencia:</strong> {data.emergencyPhone || 'N/A'}
        </div>
        <div>
          <strong>Correo del Padre o Tutor:</strong> {data.parentEmail || 'N/A'}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.closeModalButton} onClick={onClose}>Close</button>
        </div>
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
