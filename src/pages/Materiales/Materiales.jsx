// Materiales.jsx
import { useState, useEffect } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Materiales.module.css';
import ApiService from "../../service/fetchData/ApiService";

const materialColumna = [
    { key: 'codigo_material', title: 'Código de Materiales' },
    { key: 'codigo_curso', title: 'Curso' },
    { key: 'nombre_material', title: 'Materiales' },
    { key: 'archivo', title: 'Archivo' },
    { key: 'tipo_material', title: 'Tipo de Materiales' },
]

const Materiales = () => {
    const [materialData, setMaterialesData] = useState([]);

    useEffect(() => {
        const fetchMaterialesData = async () => {
          try {
            const materialData = await ApiService.getMateriales();
            setMaterialesData(materialData);
          } catch (error) {
            console.error("Error fetching material data:", error.message);
          }
        };
    
        fetchMaterialesData();
      }, []);

    return (
        <div className={styles.materialContainer}>
            <InfoTable data={materialData} columns={materialColumna} title="Materiales" />
        </div>
    )
}

export default Materiales