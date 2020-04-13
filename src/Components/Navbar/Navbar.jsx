import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import LanguageSelector from '../LanguageSelector/LanguageSelector.js'
import { Text } from '../../Languagecontext/language'

export default function Navbar() {

    return (
        <nav className='navbar'>
            <input id='menu-toggle' type='checkbox' />
            <label htmlFor='menu-toggle'>
                <div className='nav-list'>
                    <NavLink className='nav-link-hidden' to='/' exact></NavLink>
                    <a href='/'><Text tid="navHome"/></a>
                    <NavLink className='nav-link-hidden' to='/about' exact></NavLink>
                    <a href='/about'><Text tid="navInfo"/></a>
                    <NavLink className='nav-link-hidden' to='/gallery' exact></NavLink>
                    <a href='/gallery'><Text tid="navGallery"/></a>
                    <a href='mailto:etigurevich@gmail.com'><Text tid="navContact"/></a>
                    <LanguageSelector />
                </div>
                <span className='menu-toggle-ui'>
                    <i className='fa fa-times'></i>
                    <i className='fa fa-bars'></i>
                </span>
            </label>
        </nav>
    );
}
