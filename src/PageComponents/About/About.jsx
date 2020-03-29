import React from 'react';
import './About.css';
import Instaphoto from '../../Components/Instaphoto/Instaphoto';
import images from '../../Theme/images';

export default function About() {
    return (
        <>
            <h2>Headline</h2>
            <div className='about-page-container'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales nunc ac elit varius rhoncus. Curabitur vitae dictum ante. Vivamus
                maximus auctor felis pellentesque laoreet. Vestibulum efficitur dolor at massa congue dictum. Etiam eros diam, fringilla in magna
                porttitor, tincidunt eleifend libero. In vel ex arcu. In venenatis pellentesque dolor quis auctor. Curabitur ac arcu sodales,
                efficitur metus in, congue lacus. Aenean sit amet rutrum erat, facilisis volutpat lorem. Vestibulum cursus, urna nec dignissim
                finibus, orci eros gravida tellus, vel sollicitudin ipsum metus id dui. Vivamus ut facilisis diam. Nullam egestas mauris urna, eu
                malesuada augue suscipit eget. Aenean a laoreet sapien, eu iaculis nisi. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Proin in erat sapien. Nullam a ex vitae augue auctor ullamcorper eget ac erat. Nulla vitae lectus at
                turpis iaculis congue vitae sit amet orci. Sed a mollis turpis, imperdiet convallis dui. Nullam ornare mattis lorem. In facilisis,
                enim ut commodo mattis, lorem ligula laoreet metus, quis maximus mi augue non dolor. Proin elementum fringilla nibh in sollicitudin.
                Integer et augue sagittis, convallis mi bibendum, viverra ligula. Phasellus tortor massa, finibus vitae sagittis imperdiet, vehicula
                eu dui. Ut maximus sapien at purus dapibus dignissim. Donec feugiat, nibh aliquam facilisis ornare, mi ipsum sodales lorem, non tempus
                magna eros id dui. Maecenas faucibus urna ut nibh auctor fermentum nec in nulla. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Aenean faucibus rhoncus mauris, eget aliquam mauris luctus quis. Donec vehicula, odio
                hendrerit eleifend consectetur, odio nunc pretium magna, vel accumsan ex risus eu odio. Maecenas velit urna, dapibus sit amet
                sollicitudin ut, lacinia sit amet velit. Sed auctor sem in tortor bibendum venenatis at at augue. Donec imperdiet bibendum orci
                laoreet rutrum. Nam sit amet porta nulla. Aenean laoreet quis sapien vitae elementum.
            </div>
            <Instaphoto image={images.seventh} image2={images.fifth} image3={images.sixth}></Instaphoto>
            <br/>
        </>
    );
}
