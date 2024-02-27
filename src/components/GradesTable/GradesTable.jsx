import PropTypes from 'prop-types'
import styles from './GradesTable.module.css'

const GradesTable = ({ grades, onEdit }) => {
    return (
        <table className={styles.table}>
            <colgroup>
                <col style={{ width: '40%' }} /> {/* Set width for the first column */}
                <col style={{ width: '40%' }} /> {/* Set width for the second column */}
                <col style={{ width: '10%' }} /> {/* Set width for the third column (button) */}
            </colgroup>
            <thead>
                <tr>
                    <th>Curso</th>
                    <th>Nota</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {grades.map((grade, index) => (
                    <tr key={index}>
                        <td>{grade.codigo_curso}</td>
                        <td>{grade.nota}</td>
                        <td>
                            <button className={styles.detailsButton} onClick={() => onEdit(index)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

GradesTable.propTypes = {
    grades: PropTypes.arrayOf(
        PropTypes.shape({
            codigo_nota: PropTypes.string.isRequired,
            codigo_estudiante: PropTypes.string.isRequired,
            codigo_curso: PropTypes.string.isRequired,
            nota: PropTypes.number.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default GradesTable
