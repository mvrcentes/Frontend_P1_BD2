import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Personal.module.css';

const personalData = [
    // Sample data for students
    { code: '1990200', name: 'John', lastName: 'Doe', grade: '5to Bachillerato', position: 'Conserje'},
    { code: '1980101', name: 'Jane', lastName: 'Smith', grade: '5to Bachillerato', position: 'Chef'},
    // Add more student data as needed
]

const personalColumna = [
    { key: 'code', title: 'Código' },
    { key: 'name', title: 'Nombre' },
    { key: 'lastName', title: 'Apellido' },
    { key: 'position', title: 'Posicion' },
]

const Personal = () => {
    return (
        <div className={styles.personalContainer}>
            <InfoTable data={personalData} columns={personalColumna} title="Personal" />
        </div>
    )
}

export default Personal