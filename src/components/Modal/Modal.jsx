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
        <h2>Detalles del Estudiante</h2>

        {/* Información Personal */}
        <div>
          <h3>Información Personal:</h3>
          <div>
            <strong>Código de Estudiante: </strong> {data.codigo_estudiante || 'N/A'}
          </div>
          <div>
            <strong>Nombre: </strong> {data.nombre || 'N/A'}
          </div>
          <div>
            <strong>Apellido: </strong> {data.apellido || 'N/A'}
          </div>
          <div>
            <strong>Edad: </strong> {data.edad || 'N/A'}
          </div>
          <div>
            <strong>Sexo: </strong> {data.sexo || 'N/A'}
          </div>
        </div>

        {/* Contactos de Emergencia */}
        <div>
          <h3>Contactos de Emergencia:</h3>
          {data.contactos_de_emergencia && data.contactos_de_emergencia.length > 0 ? (
            <ul>
              {data.contactos_de_emergencia.map((contacto, index) => (
                <li key={index}>
                  {contacto.nombre} {contacto.apellido} ({contacto.parentesco}): {contacto.telefono}
                </li>
              ))}
            </ul>
          ) : 'N/A'}
        </div>

        {/* Cursos Actuales */}
        <div>
          <h3>Cursos Actuales:</h3>
          {data.cursos_actuales && data.cursos_actuales.length > 0 ? (
            <ul>
              {data.cursos_actuales.map((curso, index) => (
                <li key={index}>{curso}</li>
              ))}
            </ul>
          ) : 'N/A'}
        </div>

        {/* Cursos Aprobados */}
        <div>
          <h3>Cursos Aprobados:</h3>
          {data.cursos_aprobados && data.cursos_aprobados.length > 0 ? (
            <ul>
              {data.cursos_aprobados.map((curso, index) => (
                <li key={index}>{curso}</li>
              ))}
            </ul>
          ) : 'N/A'}
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
    codigo_estudiante: PropTypes.string,
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number,
    sexo: PropTypes.oneOf(["Masculino", "Femenino", "Otro"]),
    contactos_de_emergencia: PropTypes.arrayOf(PropTypes.shape({
      nombre: PropTypes.string,
      apellido: PropTypes.string,
      parentesco: PropTypes.string,
      telefono: PropTypes.string,
    })),
    cursos_actuales: PropTypes.arrayOf(PropTypes.string),
    cursos_aprobados: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default Modal