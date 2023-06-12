import { useState } from 'react';

import './style.css';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';

export default function HomePage() {
    const [bgColor, setBgColor] = useState('#D6A324');
    const [fontColor, setFontColor] = useState('black');
    const changeNavbarColor = () => {
        if (window.scrollY >= 600) {
            setBgColor('rgba(0, 0, 0, 0.60)');
            setFontColor('white');
        }
        else {
            setBgColor('#D6A324');
            setFontColor('black');
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (<div className='main-home'>
        <Navbar bgColor={bgColor} fontColor={fontColor} />

        <div className="first-section">
            <div className="fs-text">
                <Typography variant='mainTitle' className="fs-title">Get closer to the world of Vincent van Gogh</Typography>
                <Typography variant='mainSubtitle'>Welcome to the Van Gogh Store! Explore exclusive items inspired by Van
                    Gogh's masterpieces</Typography>
            </div>
            <div className="fs-image-box">
                <div className="fs-box-margins">
                    <div className="fs-box-margin bottom"></div>
                    <div className="fs-box-margin"></div>
                </div>
                <img src={require('../../images/paintings/sunflowers.png')} alt='Sunflowers painting' />
            </div>
        </div>

        <div className="explore-title">
            <Typography variant='mainSectionTitle'>Explore the products</Typography>
            <button className='arrow-button'>
                <img src="https://i.ibb.co/yXmgB62/Arrow-1.png" alt='Arrow' />
            </button>
        </div>

        <div className="explore-section first">
            <div className="explore-image-box">
                <div className="explore-image-margin left"></div>
                <img src={require('../../images/paintings/almond-blossom.png')} alt='Arrow' />
            </div>
            <div>
                <Typography variant='mainText'>Almond trees flowers early in the spring making them a symbol of newlife. <br />Check out
                    all the items inspired by this famous paiting.
                    <button className='arrow-button'>
                        <img src="https://i.ibb.co/yXmgB62/Arrow-1.png" alt='Arrow' />
                    </button>
                </Typography>
            </div>
        </div>

        <div className="explore-section row-reverse">
            <div className="explore-image-box">
                <div className="explore-image-margin right"></div>
                <img src={require('../../images/paintings/starry-night.png')} alt='Arrow' />
            </div>
            <div>
                <div>
                    <Typography variant='mainText'>Instantly recognizable and aniconic image in our culture, Vicent van Gogh's The
                        Starry Night is a touchstone of modern art and onebof the most beloved works.
                        <br />Check out all the inspired items.
                        <button className='arrow-button'>
                            <img src="https://i.ibb.co/yXmgB62/Arrow-1.png" alt='Arrow' />
                        </button>
                    </Typography>
                </div>
            </div>
        </div>
    </div >);
}
