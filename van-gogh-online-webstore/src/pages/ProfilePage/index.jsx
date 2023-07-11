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
    const [shouldUpdate, setShouldUpdate] = useState(0);
    
    const flipUpdate = () => {
        setShouldUpdate(!shouldUpdate);
    }

    const [profilePage, setProfilePage] = useState(0);
    const handleProfileChange = (index) => {
        setShowGallery(false);
        setProfilePage(index);
    }

    return (
        <>
            <Navbar bgColor='white' />
            <div className='profile'>
                <ProfileMenu handleProfileChange={handleProfileChange} shouldUpdate={shouldUpdate} />
                {showGallery
                    ? (<ProfilePictureGallery setShowGallery={setShowGallery} updatePic={flipUpdate} />)
                    : (profilePage === 0
                        ? <ProfileInformations setShowGallery={setShowGallery} updateInfo={flipUpdate} />
                        : (profilePage === 1
                            ? <ProfileOrders />
                            : <ProfileLogout />)
                    )
                }
            </div>
        </>
    );
}
