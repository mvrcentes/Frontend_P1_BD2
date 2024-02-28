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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const handleDetailsClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchEstudiantesData = async (page) => {
    try {
      const skip = (page - 1) * itemsPerPage;
      const estudiantesData = await ApiService.getEstudiantes({ skip, take: itemsPerPage });
      setStudentsData(estudiantesData);
    } catch (error) {
      console.error("Error fetching estudiantes data:", error.message);
    }
  };

  useEffect(() => {
    fetchEstudiantesData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.estudiantesContainer}>
      <InfoTable data={studentsData} columns={studentsColumns} title="Estudiantes" onDetailsClick={handleDetailsClick} showDetailsButton={true} />
      <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedStudent || {}} />

      {/* Pagination controls */}
      <div className={styles.pagination}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={studentsData.length < itemsPerPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Estudiantes;