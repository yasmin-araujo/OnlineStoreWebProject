import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Button from '../Button';
import { profilePictures } from './profilePictures';
import './style.css';

export default function ProfilePictureGallery({ setShowGallery }) {
    const [selected, setSelected] = useState(0);
    const getSession = JSON.parse(localStorage.getItem('session'));
	const getProfile = JSON.parse(localStorage.getItem(getSession));

    const handleImgClick = (e) => {
        setSelected(parseInt(e.target.name));
    };

    const handleImgChange = () => {
        let updatedProfile = {...getProfile, profilePic: profilePictures[selected].href}
        localStorage.setItem(getSession, JSON.stringify(updatedProfile))
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
                                style={{ borderColor: selected === index ? '#D6A324' : 'transparent' }}
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