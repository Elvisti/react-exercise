import React from 'react';
import { Link } from 'react-router-dom'


import './style.css';

function Header() {
    return (
        <div className="container-header">
            <div className="structure">Logo</div>
            <nav className="nav">
                <a href="/#">{this.props.user}Users</a>
                <a href="/#">Contact</a>
                <a href="/#">Help</a>
            </nav>
        </div>
    )
}

export default Header;