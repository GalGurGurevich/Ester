import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import Videocube from '../../Components/Videocube/Videocube';
import '@brainhubeu/react-carousel/lib/style.css';
import './Carousel.css';

export default function MyVideoCarousel({ videos }) {
    const videoChildren = (videos || []).map(vid => <Videocube video={vid}></Videocube>);

    return (
        <Carousel rtl dots centered className='caruselContainer'>
            {[...videoChildren]}
        </Carousel>
    );
}
