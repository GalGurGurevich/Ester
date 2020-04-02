import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav class='navbar'>
            <input id='menu-toggle' type='checkbox' />
            <label for='menu-toggle'>
                <div className='nav-list'>
                    <a className='horizontalLink' href='/'>
                        בית
                    </a>
                    <a className='horizontalLink' href='/about'>
                        מידע
                    </a>
                    <a id="malito-A" className='horizontalLink' href="mailto:etigurevich@gmail.com">
                        צור קשר
                    </a>
                </div>
                <span className='menu-toggle-ui'>
                    <i className='fa fa-bars'></i>
                    <i className='fa fa-times'></i>
                </span>
            </label>
        </nav>
    );
}
