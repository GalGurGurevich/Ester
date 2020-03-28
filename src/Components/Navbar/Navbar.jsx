import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='topnav'>
            <Link to='/'>בית</Link>
            <Link to='/about'>מידע</Link>
            <Link to='/contact-us'>צור קשר</Link>
        </div>
    );
}
