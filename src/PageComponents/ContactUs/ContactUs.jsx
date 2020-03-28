import React from 'react';
import './ContactUs.css';
import { heb } from '../../Theme/he.js';

export default function ContactUs() {
    return (
        <div className='div-form-container'>
            <form className='form-container'>
                <label className='labels'>
                    {heb.contactmeName} <input required className='inputs' type='text' name='name' />
                </label>
                <label className='labels'>
                    {heb.contactmePhone} <input required className='inputs' type='text' name='phone' />
                </label>
                <label className='labels'>
                    {heb.contactmeMail} <input required className='inputs' type='text' name='mail' />
                </label>
                <label className='labels'>
                    {heb.contactmeContent} <input className='inputs' type='text' name='msg' />
                </label>
                <label required className='labels'>
                    <input className='inputs' id='subBtn' type='submit' value='שלח' />
                </label>
            </form>
        </div>
    );
}
