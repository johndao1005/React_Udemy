import './Navbar.css';
import {Link} from 'react-router-dom'
import React from 'react'

export default function Navbar() {
    return (
       <div className="navbar">
           <nav>
               <Link className='brand' to="/">
               <h2>Cook Book</h2>
               </Link>
               <Link to="/create"> Create A Recipe</Link>
           </nav>
       </div>
    )
}
