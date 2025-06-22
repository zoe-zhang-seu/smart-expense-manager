import './App.css'
import { Route, Routes } from 'react-router-dom'
import Expenses from './pages/Expenses'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
  </>
  )
}

export default App
