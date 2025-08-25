import { useRoutes } from 'react-router-dom'
import './App.css'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'

function App() {
  let routes=useRoutes([
    {path:'/',element:<ShowCreators/>},
    {path:'/creator/:id',element:<ViewCreator/>},
    {path:'/creator/:id/edit',element:<EditCreator/>},
    {path:'/new',element:<AddCreator/>}
  ])
  return routes
}

export default App
