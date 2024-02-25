import { useState } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Estudiantes.module.css';
import Modal from "../../components/Modal/Modal";

const studentsData = [
  // Sample data for students
  { codigo_estudiante: '20070101', nombre: 'John', apellido: 'Doe', grado: '5to Bachillerato', averageGrade: 85, details: true },
  { codigo_estudiante: '20070038', nombre: 'Jane', apellido: 'Smith', grado: '5to Bachillerato', averageGrade: 92, details: true },
  // Add more student data as needed
]

const studentsColumns = [
  { key: 'codigo_estudiante', title: 'Código' },
  { key: 'nombre', title: 'Nombre' },
  { key: 'apellido', title: 'Apellido' },
  { key: 'grado', title: 'Grado' },
  { key: 'averageGrade', title: 'Promedio' },
]

const Estudiantes = () => {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDetailsClick = (student) => {
    setSelectedStudent(student)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.estudiantesContainer}>
      <InfoTable data={studentsData} columns={studentsColumns} title="Estudiantes" onDetailsClick={handleDetailsClick} />
      <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedStudent || {}} />
    </div>
  )
}

export default Estudiantes