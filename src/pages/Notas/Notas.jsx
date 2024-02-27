// Notas.jsx
import { useState } from 'react';
import GradesTable from '../../components/GradesTable/GradesTable';
import StudentCodeInput from '../../components/StudentCodeInput/StudentCodeInput';
import EditGradeRow from '../../components/EditGradeRow/EditGradeRow';
import styles from './Notas.module.css';
// import ApiService from 'path-to-your-api-service'; // Commented out for testing

// Mocked data for testing
const mockedGrades = [
  { codigo_nota: "1010", codigo_curso: 'MM1020', codigo_estudiante: "20070101", nota: 90 },
  { codigo_nota: "1020", codigo_curso: 'SS1020', codigo_estudiante: "20070101", nota: 85 },
  { codigo_nota: "1030", codigo_curso: 'HH1020', codigo_estudiante: "20070101", nota: 92 },
  { codigo_nota: "1040", codigo_curso: 'MM1020', codigo_estudiante: "20070102", nota: 88 },
  { codigo_nota: "1050", codigo_curso: 'SS1020', codigo_estudiante: "20070102", nota: 95 },
];

const Notas = () => {
  const [studentCode, setStudentCode] = useState('');
  const [grades, setGrades] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleStudentCodeSubmit = (code) => {
    // Filter grades based on the input student code
    const filteredGrades = mockedGrades.filter(grade => grade.codigo_estudiante === code);

    setStudentCode(code);

    if (filteredGrades.length > 0) {
      setGrades(filteredGrades);
    } else {
      setGrades([]);
    }
  };

  // const handleStudentCodeSubmit = (code) => {
  //   setStudentCode(code);
  //   // const fetchedGrades = ApiService.getNotasEstudiante(code); // Replace with actual API call
  //   // setGrades(fetchedGrades);
  //   setGrades(mockedGrades); // Use mocked data for testing
  // };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleEditSubmit = (editedGrade) => {
    // await ApiService.postNota(studentCode, grades[editingIndex].curso, editedGrade);

    // const updatedGrades = await ApiService.getNotasEstudiante(studentCode);

    // Update grades state
    const updatedGrades = [...grades];
    updatedGrades[editingIndex].nota = editedGrade;
    setGrades(updatedGrades);

    // Reset editingIndex
    setEditingIndex(null);
  };

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
  );
};

export default Notas;