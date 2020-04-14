import React from 'react'
import './About.css'
import Instaphoto from '../../Components/Instaphoto/Instaphoto'
import images from '../../Theme/images'
import AnimatedText from '../../Components/AnimatedText'
import { useLanguage } from '../../Languages/context'

export default function About() {

    const { translate } = useLanguage();

    return (
        <>
            <h2>
                <AnimatedText text={translate('aboutMeHeader')} />
            </h2>
            <div className='about-page-container'>
                <p>{translate('aboutMeFirstParagraph')}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales nunc ac elit varius rhoncus. Curabitur vitae dictum ante.
                    Vivamus maximus auctor felis pellentesque laoreet. Vestibulum efficitur dolor at massa congue dictum. Etiam eros diam, fringilla
                    in magna porttitor, tincidunt eleifend libero. In vel ex arcu. In venenatis pellentesque dolor quis auctor. Curabitur ac arcu
                    sodales, efficitur metus in, congue lacus. Aenean sit amet rutrum erat, facilisis volutpat lorem. Vestibulum cursus, urna nec
                    dignissim
                </p>
                <p>
                    finibus, orci eros gravida tellus, vel sollicitudin ipsum metus id dui. Vivamus ut facilisis diam. Nullam egestas mauris urna, eu
                    turpis iaculis congue vitae sit amet orci. Sed a mollis turpis, imperdiet convallis dui. Nullam ornare mattis lorem. In facilisis,
                    sodales, efficitur metus in, congue lacus. Aenean sit amet rutrum erat, facilisis volutpat lorem. Vestibulum cursus, urna nec
                    dignissim
                </p>
            </div>
                <Instaphoto image={images.seventh} image2={images.fifth} image3={images.sixth}></Instaphoto>
            <br />
        </>
    );
}
