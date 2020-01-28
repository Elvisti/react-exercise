import React from 'react';
import { Link } from 'react-router-dom'


import './style.css';

function Header() {
    return (
        <div className="container-header">
            <Link to="/" className="structure">Logo</Link>
            <nav className="nav">
                <Link to="/users">Users</Link>
                <a href="/#">Contact</a>
                <a href="/#">Help</a>
            </nav>
        </div>
    )
}

export default Header;