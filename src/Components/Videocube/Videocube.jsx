import React from 'react';
import VideoPlayer from 'react-simple-video-player';
import './Videocube.css';

export default function Videocube({ video }) {
    return (
        <div className='vidContainer'>
            <div className='video'>
                <VideoPlayer autosize url={video} type='video/mp4' />
            </div>
        </div>
    );
}
