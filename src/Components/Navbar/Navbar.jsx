import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <input id='menu-toggle' type='checkbox' />
            <label htmlFor='menu-toggle'>
                <div className='nav-list'>
                    <NavLink className='nav-link-hidden' to='/' exact></NavLink>
                    <a href='/'>בית</a>
                    <NavLink className='nav-link-hidden' to='/about' exact></NavLink>
                    <a href='/about'>מידע</a>
                    <NavLink className='nav-link-hidden' to='/gallery' exact></NavLink>
                    <a href='/gallery'>גלריה</a>
                    <a href='mailto:etigurevich@gmail.com'>צור קשר</a>
                </div>
                <span className='menu-toggle-ui'>
                    <i className='fa fa-times'></i>
                    <i className='fa fa-bars'></i>
                </span>
            </label>
        </nav>
    );
}
