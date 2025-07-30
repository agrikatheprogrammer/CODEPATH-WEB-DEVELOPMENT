// src/components/CrewmateDetail.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'

export default function CrewmateDetail() {
  const [crewmate, setCrewmate] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single()
      setCrewmate(data)
    }
    load()
  }, [id])

  if (!crewmate) return <div>Loading...</div>

  return (
    <div>
      <h1>{crewmate.name}</h1>
      <p>Role: {crewmate.role}</p>
      <p>Power Level: {crewmate.power_level}</p>
      <Link to={`/edit/${crewmate.id}`}>Edit</Link>
    </div>
  )
}
