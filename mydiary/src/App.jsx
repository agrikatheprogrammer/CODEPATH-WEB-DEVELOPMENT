import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Media from './components/Media'
import Diary from './components/Diary'
import MoodTracker from './components/MoodTracker'
import { useState, useEffect } from 'react'
function App() {
  const [currentDate,setCurrentDate]=useState(new Date())
  let date=currentDate.getDate()
  let year=currentDate.getFullYear()
  let month=currentDate.getMonth()+1
    useEffect(() => {
    // Update date every second
    const interval = setInterval(() => {
      setCurrentDate(new Date());
      
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard user="Aggy"/>}>
            <Route index element={<Diary date={date} month={month} year={year}/>}></Route>
            <Route path='media' element={<Media/>}></Route>
            <Route path='moodtracker' element={<MoodTracker/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
