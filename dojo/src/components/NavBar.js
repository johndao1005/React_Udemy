import React from 'react';
import temple from '../assets/temple.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export default function NavBar() {
    const {logout,isPending} = useLogout();
    return <div className="navbar">
        <ul>
            <li className="logo">
                <Link to="/">
                <img src={temple} alt="logo" />
                <span> The Dojo</span>
                </Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
            <li>
               {!isPending && <button className="btn" onClick={logout}>Logout</button>}
               {isPending && <button disabled className="btn">Logging out</button>}
            </li>
        </ul>
    </div>;
}
