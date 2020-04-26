import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import { useLanguage } from '../../Languages/context';

export default function Navbar() {
    const { translate, language } = useLanguage();

    let flag = false;
    if (language !== 'he') flag = true;

    // const handleClick = () => {
    //     let size = parseFloat(window.getComputedStyle(document.documentElement).fontSize * 1.2 + 'px');
    //     document.documentElement.style.fontSize = size;
    // };

    return (
        <nav className='navbar'>
            <input id='menu-toggle' type='checkbox' />
            <label htmlFor='menu-toggle'>
                <div className='nav-list'>
                    <NavLink className='nav-link-hidden' to='/' exact></NavLink>
                    <a href='/'>{translate('navHome')}</a>
                    <NavLink className='nav-link-hidden' to='/about' exact></NavLink>
                    <a href='/about'>{translate('navInfo')}</a>
                    <NavLink className='nav-link-hidden' to='/gallery' exact></NavLink>
                    <a href='/gallery'>{translate('navGallery')}</a>
                    <a href='mailto:etigurevich@gmail.com'>{translate('navContact')}</a>
                    <a className={`picker${!flag ? '' : ' en'}`}>
                        <LanguagePicker />
                    </a>
                    {/* <a>
                        <button onClick={handleClick}>+/-</button>
                    </a> */}
                </div>
                <span className='menu-toggle-ui'>
                    <i className='fa fa-times'></i>
                    <i className='fa fa-bars'></i>
                </span>
            </label>
        </nav>
    );
}
