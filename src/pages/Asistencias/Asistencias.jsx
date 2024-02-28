import { useState, useEffect } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Asistencias.module.css';
import ApiService from "../../service/fetchData/ApiService";

// const asistenciasData = [
//     { codigo_asistencias: '1990200', nombre: 'John', apellido: 'Doe', edad: 30, sexo: 'Masculino', dpi: '123456789', tipo_de_trabajo: 'Conserje', salario: 2000 },
//     { codigo_asistencias: '1980101', nombre: 'Jane', apellido: 'Smith', edad: 35, sexo: 'Femenino', dpi: '987654321', tipo_de_trabajo: 'Chef', salario: 2500 },
//     // Add more asistencias data as needed
// ]

const asistenciasColumna = [
    { key: 'codigo_asistencia', title: 'Código Asistencia' },
    { key: 'codigo_estudiante', title: 'Código Estudiante' },
    { key: 'codigo_curso', title: 'Código Curso' },
    { key: 'fecha', title: 'Fecha' },
]

const Asistencias = () => {
    const [asistenciasData, setAsistenciasData] = useState([]);

    useEffect(() => {
        const fetchAsistenciasData = async () => {
          try {
            const asistenciasData = await ApiService.getAsistencias();
            setAsistenciasData(asistenciasData);
          } catch (error) {
            console.error("Error fetching asistencias data:", error.message);
          }
        };
    
        fetchAsistenciasData();
      }, []);

    return (
        <div className={styles.asistenciasContainer}>
            <InfoTable data={asistenciasData} columns={asistenciasColumna} title="Asistencias" />
        </div>
    )
}

export default Asistencias