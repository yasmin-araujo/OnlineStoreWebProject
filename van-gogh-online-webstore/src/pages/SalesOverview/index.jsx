import React, { useState } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import SalesMenu from '../../components/SalesMenu';
import TabelaSales from '../../components/TabelaSales';
import ProfileLogout from '../../components/ProfileLogout';


export default function SalesOverview() {
    const pages = [<TabelaSales />, <ProfileLogout />]
    const [profilePage, setProfilePage] = useState(pages[0])
    const handleProfileChange = (index) => {
        setProfilePage(pages[index])
    }

    return (
        <>
            <Navbar bgColor='white' />
            <div className='profile'>
                <SalesMenu handleProfileChange={handleProfileChange} />
                {profilePage}
            </div>
        </>
    );
}
