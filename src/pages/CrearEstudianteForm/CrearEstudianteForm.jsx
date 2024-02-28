import { useState } from 'react'
import ApiService from '../../service/fetchData/ApiService'
import styles from './CrearEstudianteForm.module.css'

const CrearEstudianteForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        codigo_estudiante: '',
        edad: '',
        sexo: '',
        contactos_de_emergencia: [{
            nombre: '',
            apellido: '',
            parentesco: '',
            telefono: '',
        }],
        cursos_actuales: [{
            nombre_curso: '',
            codigo_curso: '',
        }],
        cursos_aprobados: [],
    })
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleContactChange = (e, index) => {
        const { name, value } = e.target
        const updatedContacts = [...formData.contactos_de_emergencia]
        updatedContacts[index][name] = value

        setFormData({
            ...formData,
            contactos_de_emergencia: updatedContacts,
        })
    }

    const handleAddContact = () => {
        setFormData({
            ...formData,
            contactos_de_emergencia: [
                ...formData.contactos_de_emergencia,
                {
                    nombre: '',
                    apellido: '',
                    parentesco: '',
                    telefono: '',
                },
            ],
        })
    }


    const handleCursoChange = (e, index) => {
        const { name, value } = e.target
        const updatedCursos = [...formData.cursos_actuales]
        updatedCursos[index][name] = value

        setFormData({
            ...formData,
            cursos_actuales: updatedCursos,
        })
    }

    const handleAddCurso = () => {
        setFormData({
            ...formData,
            cursos_actuales: [
                ...formData.cursos_actuales,
                {
                    nombre_curso: '',
                    codigo_curso: '',
                },
            ],
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate form data before submission
        const isFormValid = Object.values(formData).every((value) => (
            value && (Array.isArray(value) ? value.every((item) => Object.values(item).every(Boolean)) : true)
        ))

        if (!isFormValid) {
            setError('Por favor, complete todos los campos obligatorios.')
            return
        }

        try {
            await ApiService.postEstudiante(formData)
            console.log('Student created successfully!')
            window.location.reload()
        } catch (error) {
            console.error('Error creating student:', error.message)
            setError(error.response?.data?.error || 'Error interno del servidor')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Información del Estudiante</h2>
            <label>
                Codigo de Estudiante:
                <input className={styles.estudianteFormInput} type="text" name="codigo_estudiante" value={formData.codigo_estudiante} onChange={handleChange} required />
            </label>
            <label>
                Nombres:
                <input className={styles.estudianteFormInput} type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </label>
            <label>
                Apellidos:
                <input className={styles.estudianteFormInput} type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
            </label>
            <label>
                Edad:
                <input className={styles.estudianteFormInput} type="text" name="edad" value={formData.edad} onChange={handleChange} required />
            </label>
            <label>
                Sexo:
                <input className={styles.estudianteFormInput} type="text" name="sexo" value={formData.sexo} onChange={handleChange} required />
            </label>

            {/* Contacts de Emergencia */}
            <h2>Contactos de Emergencia</h2>
            {formData.contactos_de_emergencia.map((contact, index) => (
                <div key={index} className={styles.contactContainer}>
                    <h3>Contacto {index + 1}</h3>
                    <label>
                        Nombres:
                        <input className={styles.estudianteFormInput} type="text" name="nombre" value={contact.nombre} onChange={(e) => handleContactChange(e, index)} />
                    </label>
                    <label>
                        Apellidos:
                        <input className={styles.estudianteFormInput} type="text" name="apellido" value={contact.apellido} onChange={(e) => handleContactChange(e, index)} />
                    </label>
                    <label>
                        Parentesco:
                        <input className={styles.estudianteFormInput} type="text" name="parentesco" value={contact.parentesco} onChange={(e) => handleContactChange(e, index)} />
                    </label>
                    <label>
                        Telefono:
                        <input className={styles.estudianteFormInput} type="text" name="telefono" value={contact.telefono} onChange={(e) => handleContactChange(e, index)} />
                    </label>
                </div>
            ))}
            <div className={styles.buttons}>
                <button className={styles.addContact} type="button" onClick={handleAddContact}>Agregar Contacto</button>
            </div>

            {/* Cursos Actuales */}
            <h2>Cursos Actuales</h2>
            {formData.cursos_actuales.map((curso, index) => (
                <div key={index} className={styles.cursoContainer}>
                    <h3>Curso Actual {index + 1}</h3>
                    <label>
                        Nombre del Curso:
                        <input className={styles.estudianteFormInput} type="text" name="nombre_curso" value={curso.nombre_curso} onChange={(e) => handleCursoChange(e, index)} />
                    </label>
                    <label>
                        Código del Curso:
                        <input className={styles.estudianteFormInput} type="text" name="codigo_curso" value={curso.codigo_curso} onChange={(e) => handleCursoChange(e, index)} />
                    </label>
                </div>
            ))}
            <div className={styles.buttons}>
                <button className={styles.addCurso} type="button" onClick={handleAddCurso}>Agregar Curso Actual</button>
            </div>

            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.buttons}>
                <button className={styles.crearEstudiante} type="submit">Crear Estudiante</button>
            </div>
        </form>
    )
}

export default CrearEstudianteForm