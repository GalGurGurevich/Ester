import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class='navbar'>
            <input id='menu-toggle' type='checkbox' />
            <div className='nav-list'>
                <Link className='horizontalLink' to='/'>
                    בית
                </Link>
                <Link className='horizontalLink' to='/about'>
                    מידע
                </Link>
                <Link className='horizontalLink' to='/contact-us'>
                    צור קשר
                </Link>
            </div>
            <label className="menu-toggle-ui" for='menu-toggle'>
                <i className='fa fa-bars'></i>
                <i className='fa fa-times'></i>
            </label>
        </nav>
    );
}
