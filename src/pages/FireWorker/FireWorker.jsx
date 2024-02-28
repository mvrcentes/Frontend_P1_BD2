// FireWorker.jsx
import { useState } from 'react'
import ApiService from '../../service/fetchData/ApiService'
import WorkerInfo from '../../components/WorkerInfo/WorkerInfo'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'

const FireWorker = () => {
  const [worker, setWorker] = useState(null)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleCodeSubmit = async (code) => {
    try {
      const workerData = await ApiService.getWorkerInfo(code)
      setWorker(workerData)
    } catch (error) {
      console.error('Error fetching worker information:', error.message)
      // Handle the error (e.g., show an error message)
    }
  }

  const handleFireClick = () => {
    setIsConfirmModalOpen(true)
  }

  const handleConfirmFire = async () => {
    try {
      await ApiService.deletePersonal(worker.codigo_personal)
      console.log('Worker fired successfully!')
      setWorker(null) // Clear worker data after firing
    } catch (error) {
      console.error('Error firing worker:', error.message)
    } finally {
      setIsConfirmModalOpen(false)
    }
  }

  const handleCancelFire = () => {
    setIsConfirmModalOpen(false)
  }

  return (
    <div>
      <h1>Worker Page</h1>
      <input
        type="text"
        placeholder="Enter worker code"
        onChange={(e) => handleCodeSubmit(e.target.value)}
      />
      {worker && (
        <WorkerInfo worker={worker} onFireClick={handleFireClick} />
      )}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onCancel={handleCancelFire}
        onConfirm={handleConfirmFire}
      />
    </div>
  )
}

export default FireWorker