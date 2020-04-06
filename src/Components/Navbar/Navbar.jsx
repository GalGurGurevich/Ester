import React from 'react';
import './Navbar.css';
// import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <input id='menu-toggle' type='checkbox' />
            <label htmlFor='menu-toggle'>
                <div className='nav-list'>
                    {/* <NavLink className="links" activeClassName="links-a" to="/"></NavLink> */}
                    <a className='horizontalLink' href='/'>
                        בית
                    </a>
                    {/* <NavLink className="links" activeClassName="links-a" to="/about"></NavLink> */}
                    <a className='horizontalLink' href='/about'>
                        מידע
                    </a>
                    <a className='horizontalLink' href='/gallery'>
                        גלריה
                    </a>
                    <a className='horizontalLink' href='mailto:etigurevich@gmail.com'>
                        צור קשר
                    </a>
                </div>
                <span className='menu-toggle-ui'>
                    <i className='fa fa-times'></i>
                    <i className='fa fa-bars'></i>
                </span>
            </label>
        </nav>
    );
}
