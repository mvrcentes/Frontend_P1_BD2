import './App.css'
import Estudiantes from './pages/Estudiantes/Estudiantes'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Personal from './pages/Personal/Personal'
import Clases from './pages/Cursos/Cursos'
import Asistencias from './pages/Asistencias/Asistencias'
import Notas from './pages/Notas/Notas'
import CrearEstudianteForm from './pages/CrearEstudianteForm/CrearEstudianteForm'
import FireWorker from './pages/FireWorker/FireWorker'
import TopEstudiantes from './pages/TopEstudiantes/TopEstudiantes'
import Material from './pages/Materiales/Materiales'
import CrearMaterialesForm from './pages/CrearMaterialesForm/CrearMaterialesForm'
import ChartPage from './pages/ChartPage/ChartPage'

function App() {
  return (
    <div className="appContainer">
      <Sidebar />
      <div className="pageContainer">
        <Routes>
          <Route path="/estudiantes" element={<Estudiantes />} />
        </Routes>
        <Routes>
          <Route path="/personal" element={<Personal />} />
        </Routes>
        <Routes>
          <Route path="/cursos" element={<Clases />} />
        </Routes>
        <Routes>
          <Route path="/asistencias" element={<Asistencias />} />
        </Routes>
        <Routes>
          <Route path="/top-estudiantes" element={<TopEstudiantes />} />
        </Routes>
        <Routes>
          <Route path="/materiales" element={<Material />} />
        </Routes>
        <Routes>
          <Route path="/agregar-materiales" element={<CrearMaterialesForm />} />
        </Routes>
        <Routes>
          <Route path="/notas" element={<Notas />} />
        </Routes>
        <Routes>
          <Route path="/agregar-estudiante" element={<CrearEstudianteForm />} />
        </Routes>
        <Routes>
          <Route path="/despedir-personal" element={<FireWorker />} />
        </Routes>
        <Routes>
          <Route path="/charts" element={<ChartPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
