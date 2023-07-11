import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Button from '../Button';
import { profilePictures } from './profilePictures';
import './style.css';

export default function ProfilePictureGallery({ setShowGallery, updatePic }) {
    const userId = JSON.parse(localStorage.getItem('session'));
    const [user, setUser] = useState({ profilePic: 0 });

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
                    alert("Error while fetching account.");
                });
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    const handleImgClick = (e) => {
        setUser(user => ({
            ...user,
            profilePic: parseInt(e.target.name)
        }));
    };

    const handleImgChange = (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:5000/users/' + userId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ profilePic: profilePictures[user.profilePic].id })
            })
                .then(res => {
                    if (res.status === 200) {
                        updatePic();
                        alert("Profile picture succesfully updated!");
                    }
                    else {
                        console.log(res);
                        alert("Error while updating profile picture.");
                    }
                    return res.json();
                });
        }
        catch (error) {
            console.log(error);
        }
        setShowGallery(false)
    }

    return (
        <div className='gallery'>
            <Typography variant='profileSectionTitle'>Profile Picture</Typography>
            <Typography variant='textSpaced'>Choose a profile picture among the available ones in the gallery.
                You unlock new options accordingly to the items you buy from each collection.</Typography>
            <div className='gallery-pictures'>
                {profilePictures.map((pic, index) => {
                    return (
                        <div className='profile-pic' key={'profile-icon-' + index}>
                            <img name={index} onClick={handleImgClick} className={'profile-pic-img'}
                                style={{ borderColor: user.profilePic === index ? '#D6A324' : 'transparent' }}
                                src={require('../../images/paintings/' + pic.href)} alt='Profile Icon' />
                            {pic.active ? <></> : <div className='blocked-pic' />}
                        </div>
                    );
                })}
            </div>
            <div className='gallery-buttons'>
                <Button onClick={() => setShowGallery(false)} styles={{ backgroundColor: "#C4C4C4" }} >Back</Button>
                <Button onClick={handleImgChange} styles={{ backgroundColor: "black" }} >Save</Button>
            </div>
        </div>
    );
}