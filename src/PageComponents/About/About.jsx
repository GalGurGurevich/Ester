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
                    {translate('aboutMeSecondParagraph')}
                </p>
                <p>
                    finibus, orci eros gravida tellus, vel sollicitudin ipsum metus id dui. Vivamus ut facilisis diam. Nullam egestas mauris urna, eu
                    turpis iaculis congue vitae sit amet orci. Sed a mollis turpis, imperdiet convallis dui. Nullam ornare mattis lorem. In facilisis,
                    sodales, efficitur metus in, congue lacus. Aenean sit amet rutrum erat, facilisis volutpat lorem. Vestibulum cursus, urna nec
                    dignissim
                </p>
            </div>
                <Instaphoto image={images.etikidsedited} image2={images.etikidsspiral1} image3={images.etikidsspiral2}></Instaphoto>
            <br />
        </>
    );
}
