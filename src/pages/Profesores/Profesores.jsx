import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Profesores.module.css';

const profesoresData = [
    // Sample data for students
    { code: '1990200', name: 'John', lastName: 'Doe', grade: '5to Bachillerato', position: 'Conserje'},
    { code: '1980101', name: 'Jane', lastName: 'Smith', grade: '5to Bachillerato', position: 'Chef'},
    // Add more student data as needed
]

const profesoresColumna = [
    { key: 'code', title: 'Código' },
    { key: 'name', title: 'Nombre' },
    { key: 'lastName', title: 'Apellido' },
    { key: 'position', title: 'Posicion' },
]

const Profesores = () => {
    return (
        <div className={styles.profesoresContainer}>
            <InfoTable data={profesoresData} columns={profesoresColumna} title="Profesores" />
        </div>
    )
}

export default Profesores