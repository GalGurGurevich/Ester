import React, { useState } from 'react'
import './Cuberow.css'
import { Text } from '../../Languagecontext/language'

export default function Cuberow({ image, title, subTitle, flip }) {

    //const [titleText, setTitleText] = useState();

    return (
        <div className={`cubeRow${!flip ? ' flipped' : ''}`}>
            <div className='cubeContent'>
                <div className='cubeText'>
                    <div className='cubeTitle'><Text tid="title"></Text></div>
                    <div className='cubeSubTitle'>{subTitle}</div>
                </div>
            </div>
            <div className='cubeImage'>
                <img src={image} alt="a sports workout" />
            </div>
        </div>
    );
};
