import { useEffect, useState } from 'react';

import './style.css';
import Navbar from '../../components/Navbar';

export default function HomePage() {
    const [color, setColor] = useState('#D6A324');

    return (<div className='main-home'>
        <Navbar color={color} />
        <div className="first-section">
            <div className="fs-text">
                <span className="fs-title">Get closer to the world of Vincent van Gogh</span>
                <span>Welcome to the Van Gogh Store! Explore exclusive items inspired by Van
                    Gogh's masterpieces</span>
            </div>
            <div className="fs-image-box">
                <div className="fs-box-margins">
                    <div className="fs-box-margin-bottom"></div>
                    <div className="fs-box-margin-top"></div>
                </div>
                <img src="https://i.ibb.co/CWsTwy1/vaso.png" alt='Sunflowers painting' />
            </div>
        </div>
    </div>);
}
