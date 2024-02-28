import { useState } from 'react';
import ApiService from '../../service/fetchData/ApiService';
import styles from './CrearMaterialesForm.module.css';

const CrearMaterialesForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    materiales: [
      {
        codigo_material: '',
        codigo_curso: '',
        nombre_material: '',
        archivo: '',
        tipo_material: '',
      },
    ],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMateriales = [...formData.materiales];
    updatedMateriales[index][name] = value;

    setFormData({
      ...formData,
      materiales: updatedMateriales,
    });
  };

  const handleAddMaterial = () => {
    setFormData({
      ...formData,
      materiales: [
        ...formData.materiales,
        {
          codigo_material: '',
          codigo_curso: '',
          nombre_material: '',
          archivo: '',
          tipo_material: '',
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before submission
    const isFormValid = formData.materiales.every(material => (
      material.codigo_material && material.codigo_curso && material.nombre_material && material.tipo_material
    ));

    if (!isFormValid) {
      setErrorMessage('Por favor, complete todos los campos obligatorios.');
      return;
    }

    try {
      await ApiService.postMaterialCurso(formData.materiales);
      console.log('Materials created successfully!');
      setErrorMessage(null); // Clear any previous error messages
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error === 'Material with the same code already exists') {
        setErrorMessage('Ese código de material ya existe');
      } else {
        console.error('Error creating materials:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Información de Materiales</h2>
      {formData.materiales.map((material, index) => (
        <div key={index} className={styles.materialContainer}>
          <h3>Material {index + 1}</h3>
          <label>
            Codigo de Material:
            <input
              className={styles.materialFormInput}
              type="text"
              name="codigo_material"
              value={material.codigo_material}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Codigo de Curso:
            <input
              className={styles.materialFormInput}
              type="text"
              name="codigo_curso"
              value={material.codigo_curso}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Nombre del Material:
            <input
              className={styles.materialFormInput}
              type="text"
              name="nombre_material"
              value={material.nombre_material}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Archivo:
            <input
              className={styles.materialFormInput}
              type="text"
              name="archivo"
              value={material.archivo}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Tipo de Material:
            <input
              className={styles.materialFormInput}
              type="text"
              name="tipo_material"
              value={material.tipo_material}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
        </div>
      ))}
      <div className={styles.buttons}>
        <button className={styles.addMaterial} type="button" onClick={handleAddMaterial}>
          Agregar Material
        </button>
      </div>
      <div className={styles.buttons}>
        <button className={styles.crearMateriales} type="submit">
          Crear Materiales
        </button>
      </div>
      {errorMessage && <div className={styles.warning}>{errorMessage}</div>}
    </form>
  );
};

export default CrearMaterialesForm;