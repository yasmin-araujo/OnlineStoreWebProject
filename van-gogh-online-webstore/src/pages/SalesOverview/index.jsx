import React, { useState, useEffect } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';
import TabelaSales from '../../components/TabelaSales';
import ProfileLogout from '../../components/ProfileLogout';
import EditUsers from '../../components/EditUsers';


export default function SalesOverview() {
    useEffect(() => {
        document.body.style.backgroundColor = '#FFF'
    }, [])
    const pages = [<TabelaSales />, <EditUsers />, <ProfileLogout />]
    const [profilePage, setProfilePage] = useState(pages[0])
    const handleProfileChange = (index) => {
        setProfilePage(pages[index])
    }

    return (
        <>
            <Navbar bgColor='white' />
            <div className='profile-so'>
                <ProfileMenu profilePages={['Sales Overview', 'Manage users', 'Logout']} handleProfileChange={handleProfileChange} />
                {profilePage}
            </div>
        </>
    );
}
