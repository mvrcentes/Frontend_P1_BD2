import { useState, useEffect } from "react";
import InfoTable from "../../components/InfoTable/InfoTable";
import styles from './TopEstudiantes.module.css';
import Modal from "../../components/Modal/Modal";
import ApiService from "../../service/fetchData/ApiService";

const topEstudiantesColumns = [
    { key: 'codigo_curso', title: 'Código de Curso' },
    { key: 'codigo_estudiante', title: 'Código de Estudiante' },
    { key: 'nota', title: 'Nota' },
];

const TopEstudiantes = () => {
    const [topEstudiantesData, setStudentsData] = useState([]);
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
        const fetchTopEstudiantesData = async () => {
            try {
                const estudiantesData = await ApiService.getTopEstudiantesPorCurso();
                setStudentsData(estudiantesData);
            } catch (error) {
                console.error("Error fetching estudiantes data:", error.message);
            }
        };

        fetchTopEstudiantesData();
    }, []); // Empty dependency array means this effect will run once when the component mounts

    return (
        <div className={styles.topEstudiantesContainer}>
            <InfoTable data={topEstudiantesData} columns={topEstudiantesColumns} title="TopEstudiantes" onDetailsClick={handleDetailsClick} />
            <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedStudent || {}} />
        </div>
    );
};

export default TopEstudiantes;