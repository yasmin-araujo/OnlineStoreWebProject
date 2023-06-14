import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import './style.css';


export default function ProfileMenu({ handleProfileChange, profilePages = ['Informations', 'Orders', 'Logout'] }) {
	const getSession = JSON.parse(localStorage.getItem('session'));
	const getProfile = JSON.parse(localStorage.getItem(getSession));

	const [menuIndex, setMenuIndex] = useState(0);
	const handleTabChange = (e, tabIndex) => {
		setMenuIndex(tabIndex);
		handleProfileChange(tabIndex);
	}

	return (
		<div className='profile-menu'>
			<img id='profile-icon' src={require('../../images/paintings/' + getProfile.profilePic)} alt='Profile Icon' />
			<Typography variant='profileName'>{getProfile.name}</Typography>
			<Tabs
				value={menuIndex}
				orientation="vertical"
				onChange={handleTabChange}
				textColor='black'
				TabIndicatorProps={{ style: { backgroundColor: "black" } }}>
				{
					profilePages.map((page) => <Tab className='Tab' label={page} />)
				}
			</Tabs>
		</div>
	);
}
