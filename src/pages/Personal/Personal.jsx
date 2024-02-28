// Personal.jsx
import { useState, useEffect } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Personal.module.css';
import ApiService from "../../service/fetchData/ApiService";

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