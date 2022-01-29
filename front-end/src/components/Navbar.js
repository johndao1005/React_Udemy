import './Navbar.css';
import { Link } from 'react-router-dom'
import React from 'react'
import SearchBar from './SearchBar';
import { useTheme } from '../hooks/useTheme';



export default function Navbar() {
    const { color  } = useTheme()
    return (
        <div className="navbar" style={{ backgroundColor: color }}>
            <nav >
                <Link className='brand' to="/">
                    <h2>Cook Book</h2>
                </Link>
                <SearchBar />
                <Link to="/create"> Create A Recipe</Link>
            </nav>
        </div>
    )
}
