import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import imagem from './profile-icons/vicent-self-portrait.jpg'
import './style.css';


export default function SalesMenu({ handleProfileChange, profilePages = ['Sales Overview', 'Logout'] }) {
	let name = 'Administrator'
	const [menuIndex, setMenuIndex] = useState(0);
	const handleTabChange = (e, tabIndex) => {
		setMenuIndex(tabIndex)
		handleProfileChange(tabIndex)
	}

	return (
		<div className='profile-menu'>
			<img id='profile-icon' src={imagem} />
			<Typography variant='profileName'>{name}</Typography>
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
