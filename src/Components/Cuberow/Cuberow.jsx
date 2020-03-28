import React from 'react';
import './Cuberow.css';

export default function Cuberow({ image, title, subTitle, flip }) {
    return (
        <div className={`cubeRow${!flip ? ' flipped' : ''}`}>
            <div className='cubeContent'>
                <div className='cubeText'>
                    <div className='cubeTitle'>{title}</div>
                    <div className='cubeSubTitle'>{subTitle}</div>
                </div>
            </div>
            <div className='cubeImage'>
                <img src={image} />
            </div>
        </div>
    );
};
