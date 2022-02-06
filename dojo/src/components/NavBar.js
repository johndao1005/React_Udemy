import React from 'react';
import temple from '../assets/temple.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';


export default function NavBar() {
    const { user } = useAuthContext()
    const { logout, isPending } = useLogout();
    return <div className="navbar">
        <ul>
            <li className="logo">
                <Link to="/">
                    <img src={temple} alt="logo" />
                    <span> The Dojo</span>
                </Link>
            </li>
            {user ? <>
                {isPending ? <button disabled className="btn">Logging out</button> : <button className="btn" onClick={logout}>Logout</button>}
            </> : <>
                <li>
                    <Link to="/login">Login</Link>
                </li><li>
                    <Link to="/signup">Signup</Link>
                </li>
            </>}

        </ul>
    </div>;
}
