import React from 'react';
import './Gallery.css';
import Vid from '../../Videos/Eti2Full-Small.mp4';
import Vid2 from '../../Videos/Eti3smaller.mp4';
import Vid3 from '../../Videos/Eti-Video-3 4.7.20Extended.mp4';
import Carousel from '../../Components/Carousel/Carousel';
import VidCarousel from '../../Components/Carousel/CarouselVideo';

import image1 from '../../Images/leftinsta.jpg';
import image2 from '../../Images/etikidsspiral2.jpg';
import image3 from '../../Images/etikidsspiral1.jpg';
import image4 from '../../Images/etikidsspiral3.jpg';

const images = [image1, image2, image3, image4];

export default function Gallery() {
    return (
        <div className='container'>
            <VidCarousel videos={[Vid, Vid2, Vid3]}></VidCarousel>
            <br />
            <Carousel images={images} />
            <br />
        </div>
    );
}
