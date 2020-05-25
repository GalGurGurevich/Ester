import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import { useLanguage } from '../../Languages/context';
import HouseIcon from './svg-icons/homeicon'

export default function Navbar() {
    const { translate } = useLanguage();

    return (
        <nav className='navbar'>
            <input id='menu-toggle' type='checkbox' />
            <label htmlFor='menu-toggle'>
                <div className='nav-list'>
                    <div>
                        <NavLink className='nav-link-hidden' to='/' exact></NavLink>
                        <a id="homeLink" href='/'>
                            <HouseIcon></HouseIcon>
                            <span>{translate('navHome')}</span>
                        </a>
                        <NavLink className='nav-link-hidden' to='/about' exact></NavLink>
                        <a href='/about'>{translate('navInfo')}</a>
                        <NavLink className='nav-link-hidden' to='/gallery' exact></NavLink>
                        <a href='/gallery'>{translate('navGallery')}</a>
                        <a href='mailto:etigurevich@gmail.com'>{translate('navContact')}</a>
                    </div>
                    <LanguagePicker />
                </div>
                <span className='menu-toggle-ui'>
                    <i className='fa fa-times'></i>
                    <i className='fa fa-bars'></i>
                </span>
            </label>
        </nav>
    );
}
