import React from 'react';
import temple from '../assets/temple.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return <div className="navbar">
        <ul>
            <li className="logo">
                <img src={temple} alt="logo" />
                <span> The Dojo</span>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
            <li>
                <button className="btn">Logout</button>
            </li>
        </ul>
    </div>;
}
