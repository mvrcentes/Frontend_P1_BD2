// Personal.jsx
import { useState, useEffect } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Personal.module.css';
import ApiService from "../../service/fetchData/ApiService";

// const personalData = [
//     { codigo_personal: '1990200', nombre: 'John', apellido: 'Doe', edad: 30, sexo: 'Masculino', dpi: '123456789', tipo_de_trabajo: 'Conserje', salario: 2000 },
//     { codigo_personal: '1980101', nombre: 'Jane', apellido: 'Smith', edad: 35, sexo: 'Femenino', dpi: '987654321', tipo_de_trabajo: 'Chef', salario: 2500 },
//     // Add more personal data as needed
// ]

const personalColumna = [
    { key: 'codigo_personal', title: 'Código Personal' },
    { key: 'nombre', title: 'Nombre' },
    { key: 'apellido', title: 'Apellido' },
    { key: 'edad', title: 'Edad' },
    { key: 'sexo', title: 'Sexo' },
    { key: 'dpi', title: 'DPI' },
    { key: 'tipo_de_trabajo', title: 'Tipo de Trabajo' },
    { key: 'salario', title: 'Salario (Q)' },
]

const Personal = () => {
    const [personalData, setPersonalData] = useState([]);

    useEffect(() => {
        const fetchPersonalData = async () => {
          try {
            const personalData = await ApiService.getPersonal();
            setPersonalData(personalData);
          } catch (error) {
            console.error("Error fetching personal data:", error.message);
          }
        };
    
        fetchPersonalData();
      }, []);

    return (
        <div className={styles.personalContainer}>
            <InfoTable data={personalData} columns={personalColumna} title="Personal" />
        </div>
    )
}

export default Personal