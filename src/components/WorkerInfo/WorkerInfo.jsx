// WorkerInfo.jsx
import PropTypes from 'prop-types';
import styles from './WorkerInfo.module.css';

const WorkerInfo = ({ worker, onFireClick }) => {
  return (
    <div className={styles.workerInfoContainer}>
      <h2>Worker Information</h2>
      <p>Código: {worker.codigo_personal}</p>
      <p>Nombre Completo: {`${worker.nombre} ${worker.apellido}`}</p>
      <p>Edad: {worker.edad}</p>
      <p>Sexo: {worker.sexo}</p>
      <p>DPI: {worker.dpi}</p>
      <p>Tipo de Trabajo: {worker.tipo_de_trabajo}</p>
      <p>Salario: Q{worker.salario}</p>
      <button onClick={onFireClick}>Despedir</button>
    </div>
  );
};

WorkerInfo.propTypes = {
  worker: PropTypes.object.isRequired,
  onFireClick: PropTypes.func.isRequired,
};

export default WorkerInfo;
