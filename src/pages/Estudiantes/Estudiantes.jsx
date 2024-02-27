import { useState, useEffect } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './Estudiantes.module.css';
import Modal from "../../components/Modal/Modal";
import ApiService from "../../service/fetchData/ApiService";

const studentsColumns = [
  { key: 'codigo_estudiante', title: 'Código' },
  { key: 'nombre', title: 'Nombre' },
  { key: 'apellido', title: 'Apellido' },
];

const Estudiantes = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchEstudiantesData = async () => {
      try {
        const estudiantesData = await ApiService.getEstudiantes();
        setStudentsData(estudiantesData);
      } catch (error) {
        console.error("Error fetching estudiantes data:", error.message);
      }
    };

    fetchEstudiantesData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  return (
    <div className={styles.estudiantesContainer}>
      <InfoTable data={studentsData} columns={studentsColumns} title="Estudiantes" onDetailsClick={handleDetailsClick} showDetailsButton={true}/>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedStudent || {}} />
    </div>
  );
};

export default Estudiantes;