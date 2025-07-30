// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CrewmateList from './components/CrewmateList'
import CrewmateForm from './components/CrewmateForm'
import CrewmateDetail from './components/CrewmateDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CrewmateList />} />
        <Route path="/create" element={<CrewmateForm />} />
        <Route path="/edit/:id" element={<CrewmateForm isEditing />} />
        <Route path="/detail/:id" element={<CrewmateDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
