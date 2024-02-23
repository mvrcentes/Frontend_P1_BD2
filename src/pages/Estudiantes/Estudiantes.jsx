import { useState } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Estudiantes.module.css';
import Modal from "../../components/Modal/Modal";

const studentsData = [
  // Sample data for students
  { code: '20070101', name: 'John', lastName: 'Doe', grade: '5to Bachillerato', averageGrade: 85, details: true },
  { code: '20070038', name: 'Jane', lastName: 'Smith', grade: '5to Bachillerato', averageGrade: 92, details: true },
  // Add more student data as needed
]

const studentsColumns = [
  { key: 'code', title: 'Código' },
  { key: 'name', title: 'Nombre' },
  { key: 'lastName', title: 'Apellido' },
  { key: 'grade', title: 'Grado' },
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