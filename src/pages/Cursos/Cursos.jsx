import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Cursos.module.css';

const cursosData = [
    // Sample data for students
    { code: '1990200', name: 'John', lastName: 'Doe', grade: '5to Bachillerato', position: 'Conserje'},
    { code: '1980101', name: 'Jane', lastName: 'Smith', grade: '5to Bachillerato', position: 'Chef'},
    // Add more student data as needed
]

const cursosColumna = [
    { key: 'code', title: 'Código' },
    { key: 'name', title: 'Nombre' },
    { key: 'lastName', title: 'Apellido' },
    { key: 'position', title: 'Posicion' },
]

const Cursos = () => {
    return (
        <div className={styles.cursosContainer}>
            <InfoTable data={cursosData} columns={cursosColumna} title="Cursos" />
        </div>
    )
}

export default Cursos