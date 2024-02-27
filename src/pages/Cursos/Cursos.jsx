import { useState, useEffect } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Cursos.module.css';
import ApiService from "../../service/fetchData/ApiService";

// const cursosData = [
//     { codigo_curso: 'CC2034', nombre: 'Computación', decripcion: 'Clase de computación', 
//     fecha_inicio: '10-01-2024', fecha_fin: '31-05-2024', horario: '7:00-8:00', profesor: 'John Doe', grado: '5to Bachillerato'},
//     { codigo_curso: 'CC2034', nombre: 'Computación', decripcion: 'Clase de computación', 
//     fecha_inicio: '10-01-2024', fecha_fin: '31-05-2024', horario: '7:00-8:00', profesor: 'John Doe', grado: '5to Bachillerato'},
// ]

const cursosColumna = [
    { key: 'codigo_curso', title: 'Código' },
    { key: 'nombre_del_curso', title: 'Nombre' },
    { key: 'descripcion', title: 'Descripción' },
    { key: 'fecha_de_inicio', title: 'Fecha de Inicio' },
    { key: 'fecha_de_finalizacion', title: 'Fecha de Finalización' },
    { key: 'horario', title: 'Horario' },
    { key: 'profesor', title: 'Profesor' },
    { key: 'grado', title: 'Grado' },
]

const Cursos = () => {
    const [coursesData, setCoursesData] = useState([]);

    useEffect(() => {
        const fetchEstudiantesData = async () => {
          try {
            const cursosData = await ApiService.getCursos();
            setCoursesData(cursosData);
          } catch (error) {
            console.error("Error fetching estudiantes data:", error.message);
          }
        };
    
        fetchEstudiantesData();
      }, []);

    return (
        <div className={styles.cursosContainer}>
            <InfoTable data={coursesData} columns={cursosColumna} title="Cursos" />
        </div>
    )
}

export default Cursos