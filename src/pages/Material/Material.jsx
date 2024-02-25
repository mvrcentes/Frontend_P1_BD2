import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Material.module.css';

const materialData = [
    // Sample data for students
    { code: '1990200', name: 'John', lastName: 'Doe', grade: '5to Bachillerato', position: 'Conserje'},
    { code: '1980101', name: 'Jane', lastName: 'Smith', grade: '5to Bachillerato', position: 'Chef'},
    // Add more student data as needed
]

const materialColumna = [
    { key: 'code', title: 'Código' },
    { key: 'name', title: 'Nombre' },
    { key: 'lastName', title: 'Apellido' },
    { key: 'position', title: 'Posicion' },
]

const Material = () => {
    return (
        <div className={styles.materialContainer}>
            <InfoTable data={materialData} columns={materialColumna} title="Material" />
        </div>
    )
}

export default Material