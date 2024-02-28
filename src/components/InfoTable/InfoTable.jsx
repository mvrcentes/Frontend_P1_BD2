import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './InfoTable.module.css'

const InfoTable = ({ data, columns, title, showDetailsButton, onDetailsClick }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredData = data.filter(row => {
        // Customize this logic based on how you want to filter the data
        return Object.values(row).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    })

    return (
        <div className={styles.tableContainer}>
            <h2 className={styles.tableTitle}>{title}</h2>
            <div className={styles.searchContainer}>
                <label htmlFor="search">Search:</label>
                <input
                    className={styles.searchInput}
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.title}</th>
                        ))}
                        {showDetailsButton && <th>Details</th>}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column.key]}</td>
                            ))}
                            {showDetailsButton && (
                                <td className={styles.buttonCell}>
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
    showDetailsButton: PropTypes.bool.isRequired, // Boolean to determine if the Details button should be displayed
    onDetailsClick: PropTypes.func.isRequired
}

export default InfoTable