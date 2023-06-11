import React, { useState } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';
import ProfileInformations from '../../components/ProfileInformations';
import ProfileOrders from '../../components/ProfileOrders';
import ProfileLogout from '../../components/ProfileLogout';
import ProfilePictureGallery from '../../components/ProfilePictureGallery';

export default function ProfilePage() {
    const [showGallery, setShowGallery] = useState(false);
    const pages = [<ProfileInformations setShowGallery={setShowGallery} />,
    <ProfileOrders />, <ProfileLogout />];
    const [profilePage, setProfilePage] = useState(pages[0]);
    const handleProfileChange = (index) => {
        setShowGallery(false);
        setProfilePage(pages[index]);
    }

    return (
        <>
            <Navbar bgColor='white' />
            <div className='profile'>
                <ProfileMenu handleProfileChange={handleProfileChange} />
                {showGallery
                    ? <ProfilePictureGallery setShowGallery={setShowGallery} />
                    : profilePage}
            </div>
        </>
    );
}
