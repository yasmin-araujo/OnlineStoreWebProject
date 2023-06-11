import React from 'react';
import { Typography } from '@mui/material';
import Button from '../Button';
import './style.css';
import { profilePictures } from './profilePictures';

export default function ProfilePictureGallery({ setShowGallery }) {

    return (
        <div className='gallery'>
            <Typography variant='profileSectionTitle'>Profile Picture</Typography>
            <Typography variant='textSpaced'>Choose a profile picture among the available ones in the gallery.
                You unlock new options accordingly to the items you buy from each collection.</Typography>
            <div className='gallery-pictures'>
                {profilePictures.map((pic) => {
                    return (
                    );
                })}
            </div>
            <div className='gallery-buttons'>
                <Button onClick={() => setShowGallery(false)} styles={{ backgroundColor: "#C4C4C4" }} >Back</Button>
                <Button styles={{ backgroundColor: "black" }} >Save</Button>
            </div>
        </div>
    );
}