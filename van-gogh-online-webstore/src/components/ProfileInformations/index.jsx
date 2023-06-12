import React, { useState } from 'react';
import Button from '../Button'
import { TextField, Typography } from '@mui/material';
import './style.css';
import { isNumber } from '../../utils/isNumber';

export default function ProfileInformations({ setShowGallery }) {
	
	const getSession = JSON.parse(localStorage.getItem('session'));
	const getProfile = JSON.parse(localStorage.getItem(getSession));
	const [profileInformations, setProfileInformations] = useState({ name: getProfile.name, email: getProfile.email, adress: getProfile.adress, telephone: getProfile.telephone })

	const handleInputChange = (e) => {
		setProfileInformations(profileInformations => ({
			...profileInformations,
			[e.target.name]: e.target.value
		}))
	}

	const handleNumberChange = (e) => {
        if(!isNumber(e)){
            e.preventDefault()
        }
        setProfileInformations(profileInformations => ({
			...profileInformations,
			[e.target.name]: e.target.value
		}))
    }

    const handleSubmit = (e) => {
        localStorage.setItem(profileInformations.email, JSON.stringify({...profileInformations, password: getProfile.password, confirmpass: getProfile.confirmpass}))
		localStorage.setItem('session', JSON.stringify(profileInformations.email))
    }

	return (
		<div className='informations'>
			<Typography variant='profileSectionTitle'>Informations</Typography>
			<form onSubmit={handleSubmit}>
				<div className='information-fields'>
					<TextField onChange={handleInputChange} className='TextField' name='name' label='Name' variant='outlined' margin='normal' defaultValue={profileInformations.name} />
					<TextField onChange={handleInputChange} className='TextField' name='email' label='Email' variant='outlined' margin='normal' defaultValue={profileInformations.email} type='email' />
					<TextField onChange={handleInputChange} className='TextField' name='adress' label='Adress' variant='outlined' margin='normal' defaultValue={profileInformations.adress} />
					<TextField onKeyDown={handleNumberChange} onChange={handleInputChange} className='TextField' name='telephone' label='Telephone' variant='outlined' margin='normal' defaultValue={profileInformations.telephone} type='tel' inputProps={{ maxLength: 14 }} />

					<div className='buttons'>
						<Button onClick={() => setShowGallery(true)} styles={{ backgroundColor: "#C4C4C4" }} >Update profile picture</Button>
						<Button isSubmitForm={true} styles={{ backgroundColor: "black" }} name={'Save'}/>
					</div>
				</div>
			</form>
		</div>
	);
}
