import Profile from '../Profile/Profile'
import StatList from '../Stats/StatList'
import './layout.css'

const Layout = ({stats}) => {
  return (
    <main className='layout'>
      <Profile />
      <StatList stats={stats}/> 
    </main>
  )
}

export default Layout