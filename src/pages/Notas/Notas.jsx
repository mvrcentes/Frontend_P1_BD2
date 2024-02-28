// Notas.jsx
import { useState } from 'react'
import GradesTable from '../../components/GradesTable/GradesTable'
import StudentCodeInput from '../../components/StudentCodeInput/StudentCodeInput'
import EditGradeRow from '../../components/EditGradeRow/EditGradeRow'
import styles from './Notas.module.css'
import ApiService from '../../service/fetchData/ApiService'

const Notas = () => {
  const [studentCode, setStudentCode] = useState('')
  const [grades, setGrades] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)

  const handleStudentCodeSubmit = async (code) => {
    console.log("button pressed")
    try {
      setStudentCode(code)
      const fetchedGrades = await ApiService.getNotasEstudiante(code)
      setGrades(fetchedGrades)
    } catch (error) {
      console.error("Error fetching grades:", error.message)
      return
    }
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
  }

  const handleEditSubmit = async (editedGrade) => {

    try {
      await ApiService.editNota(studentCode, grades[editingIndex].codigo_curso, grades[editingIndex].codigo_nota, editedGrade)

      const updatedGrades = await ApiService.getNotasEstudiante(studentCode)

      console.log(grades[editingIndex].codigo_nota, editedGrade)
      setGrades(updatedGrades)

      // Reset editingIndex
      setEditingIndex(null)
    } catch (error) {
      console.error("Error updating grade:", error.message)
      return
    }
  }

  return (
    <div className={styles.notasContainer}>
      <h1>Notas</h1>
      <StudentCodeInput onSubmit={handleStudentCodeSubmit} />
      {grades.length > 0 && (
        <>
          {editingIndex === null ? (
            <GradesTable grades={grades} onEdit={handleEdit} />
          ) : (
            <EditGradeRow grade={grades[editingIndex]} onSubmit={handleEditSubmit} />
          )}
        </>
      )}
    </div>
  )
}

export default Notas