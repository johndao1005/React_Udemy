import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/userHooks'
import {useLogout} from '../hooks/userHooks'
import 
'./NavBar.css'

function NavBar() {
  const { user } = useAuthContext()
  const { logout, error, loading } = useLogout()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }
  return (
  <nav className="navbar">
    <ul>
      <li className="title"><Link to='/'>Transaction management</Link></li>
      {user?
        <>
        {loading && <li>Loading</li>}
        {error && <li>{error.message}</li>}
        <li>
          <button onClick={handleLogout}>Log out</button>
        </li>
      
        </>
        :
        <>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </>
      }
    </ul>
  </nav>
  )
}

export default NavBar