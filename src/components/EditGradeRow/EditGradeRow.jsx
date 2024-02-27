import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './EditGradeRow.module.css';

const EditGradeRow = ({ grade, onSubmit }) => {
    const [editedGrade, setEditedGrade] = useState(grade.nota);

    const handleEditSubmit = () => {
        onSubmit(editedGrade);
    };

    return (
        <div className={styles.editGradeRow}>
            <tr className={styles.gradeRow}>
                <td>{grade.codigo_curso}</td>
                <td>
                    <input type="text" value={editedGrade} onChange={(e) => setEditedGrade(e.target.value)} />
                </td>
                <td>
                    <button onClick={handleEditSubmit}>Submit</button>
                </td>
            </tr>
        </div>
    );
};

EditGradeRow.propTypes = {
    grade: PropTypes.shape({
        codigo_nota: PropTypes.string.isRequired,
        codigo_estudiante: PropTypes.string.isRequired,
        codigo_curso: PropTypes.string.isRequired,
        nota: PropTypes.number.isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default EditGradeRow;
