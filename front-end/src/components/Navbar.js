import './Navbar.css';
import {Link} from 'react-router-dom'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <h1>Cooking Ninja</h1>
            </Link>
            <Link>
                <h1>Create</h1>
            </Link>
        </nav>
    )
}
