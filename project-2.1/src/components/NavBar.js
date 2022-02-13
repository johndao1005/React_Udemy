import React from 'react'
import { Link } from 'react-router-dom'
import 
'./NavBar.css'

function NavBar(props) {

  const handleLogout = () => {
    //TODO add log out function
  }
  return (
  <nav className="navbar">
    <ul>
      <li className="title"><Link to='/'>Transaction management</Link></li>
      <li><Link to='/signup'>Signup</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li>
        <button onClick={handleLogout}>Log out</button>
      </li>
    </ul>
  </nav>
  )
}

export default NavBar