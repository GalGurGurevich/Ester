import React from 'react';
import './Instaphoto.css';

export default function Instaphoto({image, image2, image3}) {
    return (
        <div className='ImgContainer'>
            <div className='instgramPhoto'><img className="img" src={image} alt="first-fitness" /></div>
            <div className='instgramPhoto'><img className="img" src={image2} alt="second-fitness" /></div>
            <div className='instgramPhoto'><img className="img" src={image3} alt="third-fitness" /></div>
        </div>
    )
}
