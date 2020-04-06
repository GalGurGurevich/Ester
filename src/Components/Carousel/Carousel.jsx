import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Carousel.css';

export default function MyCarousel({ images }) {
    const imageChildren = (images || []).map(img => (
        <div className='imgHolder'>
            <img className='caruselPic' src={img} />
        </div>
    ));

    return (
        <Carousel infinite rtl dots centered autoPlay={4500} animationSpeed={1500} className='caruselContainer'>
            {[...imageChildren]}
        </Carousel>
    );
}
