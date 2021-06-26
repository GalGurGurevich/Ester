import React from 'react'
import VideoPlayer from 'react-simple-video-player'
import './Home.css'
import Vid from '../Videos/Eti3smaller.mp4'
import images from '../Theme/images'
import CubeRow from '../Components/Cuberow/Cuberow'
import Instaphoto from '../Components/Instaphoto/Instaphoto'
import { useLanguage } from '../Languages/context'

export default function Home() {

    const { translate } = useLanguage();

    return (
        <div className='container'>
            <div className='FirstContainer'>
                <div className='FirstMiddleContainer'>
                    <div className='sideContainer'>
                        <div className='bigText'>{translate('bigText')}</div>
                        <div className='smallText'>{translate('smalltext')}</div>
                    </div>
                </div>
                <div className='AboutMeContainer'>
                    <div className='title'>{translate('title')}</div>
                    <div className='subTitle'>{translate('subtitle')}</div>
                    <div className='content'>{translate('content')}</div>
                </div>
            </div>
            <div className='SecondContainer'>
                <div className='secondContainerImage' />
                <div className='secondContainerTitleContainer'>
                    <div className='secondContainerTitleText'>{translate('whatIdo')}</div>
                </div>
            </div>
            <div className='ThirdContainer'>
                <CubeRow image={images.first} title={translate('cubeTitle')} subTitle={translate('cubeSubTitle')} />
                <CubeRow image={images.fourth} title={translate('cubeTitle2')} subTitle={translate('cubeSubTitle2')} flip />
                <CubeRow image={images.etikidscube} title={translate('cubeTitle3')} subTitle={translate('cubeSubTitle3')} />
            </div>
            <div className='FourthContainer'>
                <div className='videoContainer'>
                    <div className='video'>
                        <VideoPlayer autosize url={Vid} type='video/mp4' />
                    </div>
                </div>
            </div>
            <div className='FifthContainer'>
                <Instaphoto image={images.outdoor} image2={images.fifth} image3={images.seventh}></Instaphoto>
            </div>
            <div className='SixthContainer'>
                <div className='cubeContactContent'>
                    <div className='cubeContactText'>
                        <div className='cubeContactTitle'>{translate('contactMe')}</div>
                        <div className='cubeContactSubTitle'>
                            <a href='tel:+972503330622'>{translate('phone')}</a>
                            <br />
                            <br />
                            <a href='mailto:etigurevich@gmail.com'>{translate('mail')}</a>
                            <br />
                            <br />
                            <a href='https://www.facebook.com/eti.kaplan.5'>
                                <img id='fIcon' src={images.fb1} alt="facebookIcon"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SeventhContainer'>
                <div className='FooterContainer'>
                    <div className='lastContainerImage' />
                    <div className='footer'>{translate('footer')}</div>
                </div>
            </div>
        </div>
    );
}
