// Notas.jsx
import { useState } from 'react';
import GradesTable from '../../components/GradesTable/GradesTable';
import StudentCodeInput from '../../components/StudentCodeInput/StudentCodeInput';
import EditGradeRow from '../../components/EditGradeRow/EditGradeRow';
import ApiService from '../../service/fetchData/ApiService';

const Notas = () => {
  const [studentCode, setStudentCode] = useState('');
  const [grades, setGrades] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleStudentCodeSubmit = (code) => {
    setStudentCode(code);
    const fetchedGrades = ApiService.getNotasEstudiante(code);
    setGrades(fetchedGrades);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleEditSubmit = (editedGrade) => {
    ApiService.postNota(studentCode, grades[editingIndex].curso, editedGrade);
    const updatedGrades = [...grades];
    updatedGrades[editingIndex].nota = editedGrade;
    setGrades(updatedGrades);
    setEditingIndex(null);
  };

  return (
    <div>
      <h1>Notas Page</h1>
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