import React, { useEffect, useState } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';
import ProfileInformations from '../../components/ProfileInformations';
import ProfileOrders from '../../components/ProfileOrders';
import ProfileLogout from '../../components/ProfileLogout';
import ProfilePictureGallery from '../../components/ProfilePictureGallery';

export default function ProfilePage() {
    useEffect(() => {
        document.body.style.backgroundColor = 'white';
    }, []);

    const [showGallery, setShowGallery] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const flipUpdate = () => {
        setShouldUpdate(!shouldUpdate);
        console.log(shouldUpdate);
    }

    const pages = [<ProfileInformations setShowGallery={setShowGallery} updateInfo={flipUpdate} />,
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
                <ProfileMenu handleProfileChange={handleProfileChange} shouldUpdate={shouldUpdate} />
                {showGallery
                    ? <ProfilePictureGallery setShowGallery={setShowGallery} updatePic={flipUpdate} />
                    : profilePage}
            </div>
        </>
    );
}
