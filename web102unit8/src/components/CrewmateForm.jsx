// src/components/CrewmateForm.jsx
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../supabase'

export default function CrewmateForm({ isEditing = false }) {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [power, setPower] = useState(0)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (isEditing) {
      async function fetchData() {
        const { data } = await supabase.from('crewmates').select().eq('id', id).single()
        setName(data.name)
        setRole(data.role)
        setPower(data.power_level)
      }
      fetchData()
    }
  }, [isEditing, id])

  async function handleSubmit(e) {
    e.preventDefault()
    const payload = { name, role, power_level: power }

    if (isEditing) {
      await supabase.from('crewmates').update(payload).eq('id', id)
    } else {
      await supabase.from('crewmates').insert([payload])
    }

    navigate('/')
  }

  async function handleDelete() {
    await supabase.from('crewmates').delete().eq('id', id)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit Crewmate' : 'New Crewmate'}</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option>Engineer</option>
        <option>Captain</option>
        <option>Medic</option>
      </select>
      <input type="number" value={power} onChange={e => setPower(e.target.value)} />
      <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
      {isEditing && <button type="button" onClick={handleDelete}>Delete</button>}
    </form>
  )
}
