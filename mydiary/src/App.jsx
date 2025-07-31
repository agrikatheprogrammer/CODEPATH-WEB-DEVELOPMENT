import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Media from './components/Media'
import Diary from './components/Diary'
import MoodTracker from './components/MoodTracker'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard user="Aggy"/>}>
            <Route index element={<Diary date="30" month="7" year="2025"/>}></Route>
            <Route path='media' element={<Media/>}></Route>
            <Route path='moodtracker' element={<MoodTracker/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
