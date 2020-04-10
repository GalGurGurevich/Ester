import React from 'react';
import VideoPlayer from 'react-simple-video-player';
import './Home.css';
import Vid from '../Videos/Eti3smaller.mp4';
import images from '../Theme/images';
import { heb } from '../Theme/he';
import { en } from '../Theme/en';
import CubeRow from '../Components/Cuberow/Cuberow';
import Instaphoto from '../Components/Instaphoto/Instaphoto';

export default function Home() {
    return (
        <div className='container'>
            <div className='FirstContainer'>
                <div className='FirstMiddleContainer'>
                    <div className='sideContainer'>
                        <div className='bigText'>{heb.bigText}</div>
                        <div className='smallText'>{heb.smalltext}</div>
                    </div>
                </div>
                <div className='AboutMeContainer'>
                    <div className='title'>{heb.title}</div>
                    <div className='subTitle'>{heb.subtitle}</div>
                    <div className='content'>{heb.content}</div>
                </div>
            </div>
            <div className='SecondContainer'>
                <div className='secondContainerImage' />
                <div className='secondContainerTitleContainer'>
                    <div className='secondContainerTitleText'>{heb.whatIdo}</div>
                </div>
            </div>
            <div className='ThirdContainer'>
                <CubeRow image={images.first} title={heb.cubeTitle} subTitle={heb.cubeSubTitle} />
                <CubeRow image={images.fourth} title={heb.cubeTitle2} subTitle={heb.cubeSubTitle2} flip />
                <CubeRow image={images.third} title={heb.cubeTitle3} subTitle={heb.cubeSubTitle3} />
            </div>
            <div className='FourthContainer'>
                <div className='videoContainer'>
                    <div className='video'>
                        <VideoPlayer autosize url={Vid} type='video/mp4' />
                    </div>
                </div>
            </div>
            <div className='FifthContainer'>
                <Instaphoto image={images.sixth} image2={images.fifth} image3={images.seventh}></Instaphoto>
            </div>
            <div className='SixthContainer'>
                <div className='cubeContactContent'>
                    <div className='cubeContactText'>
                        <div className='cubeContactTitle'>{heb.contactMe}</div>
                        <div className='cubeContactSubTitle'>
                            <a className='tel-link' href='tel:+972503330622'>
                                {heb.phone}
                            </a>
                            <br />
                            <br />
                            {heb.mail}
                            <br />
                            <br />
                            <a href='https://www.facebook.com/eti.kaplan.5'>
                                <img id='fIcon' src={images.fb1}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SeventhContainer'>
                <div className='FooterContainer'>
                    <div className='lastContainerImage' />
                    <div className='footer'>{en.footer}</div>
                </div>
            </div>
        </div>
    );
}
