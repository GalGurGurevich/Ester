import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
            <div className='nav-list'>
                <Link className="horizontalLink" to='/'>בית</Link>
                <Link className="horizontalLink" to='/about'>מידע</Link>
                <Link className="horizontalLink" to='/contact-us'>צור קשר</Link>
                <li class="dropdown">
                   <a class="dropbtn">תפריט</a>
                   <div class="dropdown-content">
                        {/* <br/> */}
                        <Link className="a" to='/'>בית</Link>
                        <Link className="a" to='/about'>מידע</Link>
                        <Link className="a" to='/contact-us'>צור קשר</Link>
                   </div>
                 </li>
            </div>
    );
}
