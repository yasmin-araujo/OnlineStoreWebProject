import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import './style.css';
import { profilePictures } from '../ProfilePictureGallery/profilePictures';


export default function ProfileMenu({ handleProfileChange, shouldUpdate, profilePages = ['Informations', 'Orders', 'Logout'] }) {
    const userId = JSON.parse(localStorage.getItem('session'));
    const [user, setUser] = useState({ name: 'User', profilePic: 0 });

    useEffect(() => {
        try {
            fetch('http://localhost:5000/users/' + userId, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(async res => {
                    if (!res.ok) {
                        alert("Error while fetching account.");
                        return false;
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data) {
                        return;
                    }
                    setUser(data);
                })
                .catch(error => {
                    console.log(error);
                    alert("Error while logging in.");
                });
        }
        catch (e) {
            console.log(e);
        }
    }, [shouldUpdate]);

    const [menuIndex, setMenuIndex] = useState(0);
    const handleTabChange = (e, tabIndex) => {
        setMenuIndex(tabIndex);
        handleProfileChange(tabIndex);
    }

    const profilePic = profilePictures.find((pic) => pic.id === user.profilePic);

    return (
        <div className='profile-menu'>
            <img id='profile-icon' src={require('../../images/paintings/' + profilePic.href)} alt='Profile Icon' />
            <Typography variant='profileName'>{user.name}</Typography>
            <Tabs
                value={menuIndex}
                orientation="vertical"
                onChange={handleTabChange}
                textColor='black'
                TabIndicatorProps={{ style: { backgroundColor: "black" } }}>
                {
                    profilePages.map((page, index) => <Tab key={"tab-" + index} className='Tab' label={page} />)
                }
            </Tabs>
        </div>
    );
}
