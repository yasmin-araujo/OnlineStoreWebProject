import React, { useState,useEffect } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';
import TabelaSales from '../../components/TabelaSales';
import ProfileLogout from '../../components/ProfileLogout';


export default function SalesOverview() {
    useEffect(() => {
        document.body.style.backgroundColor = '#FFF'
    }, [])
    const pages = [<TabelaSales />, <ProfileLogout />]
    const [profilePage, setProfilePage] = useState(pages[0])
    const handleProfileChange = (index) => {
        setProfilePage(pages[index])
    }

    return (
        <>
            <Navbar bgColor='white' />
            <div className='profile'>
                <ProfileMenu profilePages={['Sales Overview','Logout']}  handleProfileChange={handleProfileChange} />
                {profilePage}
            </div>
        </>
    );
}
