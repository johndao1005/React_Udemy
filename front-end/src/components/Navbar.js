import './Navbar.css';
import {Link} from 'react-router-dom'
import React from 'react'

export default function Navbar() {
    return (
       <div className="navbar">
           <nav>
               <Link to="/">
               <h1>Home</h1>
               </Link>
           </nav>
       </div>
    )
}
