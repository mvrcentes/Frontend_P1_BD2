/* eslint-disable no-unused-vars */
import axios from "axios"

// const server = "http://127.0.0.1:4000"
const server = "http://localhost:3000"
const apiURL = `${server}/api`

const ApiService = {
    getEstudiantes: async () => {
        try {
            const response = await axios.get(`${apiURL}/estudiantes/`);
            return response.data;
        } catch (error) {
            console.error("Error getting estudiantes:", error.message);
            throw error;
        }
    },

    postEstudiante: async (estudianteData) => {
        try {
            const response = await axios.post(`${apiURL}/estudiantes/`, estudianteData);
            return response.data;
        } catch (error) {
            console.error("Error posting estudiantes:", error.message);
            throw error;
        }
    },

    getAsistencias: async () => {
        try {
            const response = await axios.get(`${apiURL}/asistencias/`);
            return response.data;
        } catch (error) {
            console.error("Error getting asistencias:", error.message);
            throw error;
        }
    },

    postAsistencias: async (asistenciaData) => {
        try {
            const response = await axios.post(`${server}/api/asistencias/`, asistenciaData);
            return response.data;
        } catch (error) {
            console.error("Error posting asistencias:", error.message);
            throw error;
        }
    },

    getCursos: async () => {
        try {
            const response = await axios.get(`${server}/api/cursos`);
            return response.data;
        } catch (error) {
            console.error("Error getting cursos:", error.message);
            throw error;
        }
    },

    postCursos: async (cursoData) => {
        try {
            const response = await axios.post(`${server}/api/cursos`, cursoData);
            return response.data;
        } catch (error) {
            console.error("Error posting cursos:", error.message);
            throw error;
        }
    },

    getPersonal: async () => {
        try {
            const response = await axios.get(`${server}/api/personal`);
            return response.data;
        } catch (error) {
            console.error("Error getting personal:", error.message);
            throw error;
        }
    },

    postPersonal: async (personalData) => {
        try {
            const response = await axios.post(`${server}/api/personal`, personalData);
            return response.data;
        } catch (error) {
            console.error("Error posting personal:", error.message);
            throw error;
        }
    },

    getNotasEstudiante: async (codigo_estudiante) => {
        try {
            const response = await axios.get(`${server}/api/notas/${codigo_estudiante}`);
            return response.data;
        } catch (error) {
            console.error("Error getting notas estudiante:", error.message);
            throw error;
        }
    },

    editNota: async (codigo_estudiante, codigo_curso, codigo_nota, nota) => {
        try {
            const response = await axios.put(`${server}/api/notas/${codigo_estudiante}`, { codigo_curso, codigo_nota, nota });
            return response.data;
        } catch (error) {
            console.error("Error posting nota:", error.message);
            throw error;
        }
    },

    getWorkerInfo: async (codigo) => {
        try {
            const response = await axios.get(`${server}/api/personal/${codigo}`);
            return response.data;
        } catch (error) {
            console.error("Error getting worker info:", error.message);
            throw error;
        }
    },

    deletePersonal: async (codigo) => {
        try {
            const response = await axios.delete(`${server}/api/personal/${codigo}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting worker:", error.message);
            throw error;
        }
    },
};

export default ApiService;