// src/components/CrewmateList.jsx
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'

export default function CrewmateList() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })
      setCrewmates(data)
    }
    loadData()
  }, [])

  return (
    <div>
      <h1>Crewmates</h1>
      <Link to="/create">+ Add Crewmate</Link>
      <ul>
        {crewmates.map(c => (
          <li key={c.id}>
            <Link to={`/detail/${c.id}`}>{c.name} ({c.role})</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
