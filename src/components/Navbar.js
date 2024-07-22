import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="div-navbar">
                <ul className="ul-navbar">
                    <li>    
                        <Link className="navbar-brand" to="/"><img src={require('../images/2-removebg-preview 1.png')}></img></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
