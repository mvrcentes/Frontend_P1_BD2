import PropTypes from 'prop-types'

const GradesTable = ({ grades, onEdit }) => {
    return (
        <table>
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
                            <button onClick={() => onEdit(index)}>Edit</button>
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
