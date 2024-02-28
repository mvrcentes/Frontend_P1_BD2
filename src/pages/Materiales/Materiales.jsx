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
];

const Materiales = () => {
    const [materialData, setMaterialesData] = useState([]);

    useEffect(() => {
        const fetchMaterialesData = async () => {
          try {
            const fetchedMaterialData = await ApiService.getMateriales();

            // Modify data to replace ObjectID with the actual codigo_curso
            const modifiedMaterialData = await Promise.all(fetchedMaterialData.map(async material => {
                const cursoData = await ApiService.getCurso(material.codigo_curso);
                return {
                    ...material,
                    codigo_curso: cursoData.codigo_curso,  // Assuming this is the field in your CursosSchema
                };
            }));

            setMaterialesData(modifiedMaterialData);
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

export default Materiales;