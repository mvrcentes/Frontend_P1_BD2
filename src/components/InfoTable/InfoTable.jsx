import PropTypes from 'prop-types';
import styles from './InfoTable.module.css';

const InfoTable = ({ data, columns, title, onDetailsClick }) => {
    return (
        <div className={styles.tableContainer}>
            <h2 className={styles.tableTitle}>{title}</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column.key]}</td>
                            ))}
                            {row.details && (
                                <td>
                                    <button className={styles.detailsButton} onClick={() => onDetailsClick(row)}>Details</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

InfoTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
    onDetailsClick: PropTypes.func.isRequired
}

export default InfoTable;
