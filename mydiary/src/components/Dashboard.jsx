import { Outlet, Link } from 'react-router-dom'
import '../stylesheets/Dashboard.css'
function Dashboard({user}) {
    return (
        <>
        <div className="dashboard">
            <div className='logo'>Welcome, {user}!</div>
            <nav className='nav-links'>
                <Link to='/'>📔</Link>
                <Link to='/media'>📷</Link>
                <Link to='/moodtracker'>🎭</Link>
            </nav>
        </div>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    )
}

export default Dashboard