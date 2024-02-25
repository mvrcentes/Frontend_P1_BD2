import './App.css'
import Estudiantes from './pages/Estudiantes/Estudiantes'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Personal from './pages/Personal/Personal'
import Profesores from './pages/Profesores/Profesores'
import Clases from './pages/Cursos/Cursos'
import Material from './pages/Material/Material'

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
          <Route path="/profesores" element={<Profesores />} />
        </Routes>
        <Routes>
          <Route path="/cursos" element={<Clases />} />
        </Routes>
        <Routes>
          <Route path="/material-cursos" element={<Material />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
