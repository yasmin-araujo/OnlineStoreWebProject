import React, {useState} from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import imagem from './profile-icons/vicent-self-portrait.jpg'
import './style.css';


export default function ProfileMenu({ handleProfileChange }) {
	let name = 'Van Gogh'
	let profilePages = ['Informations', 'Orders', 'Logout']
	const [menuIndex, setMenuIndex] = useState(0);
	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex)
		setMenuIndex(tabIndex)
		handleProfileChange(tabIndex)
	}
	
	return (
		<>
			<div className='profileMenu'>
				<img id='profileIcon' src={imagem}/>
				<h2 id='profileName'>{name}</h2>
				<Tabs 
					value={menuIndex} 
					orientation="vertical" 
					onChange={handleTabChange} 
					textColor='black'
					TabIndicatorProps= {{ style: {backgroundColor: "black"  }}}>
  					{
						profilePages.map( (page) => <Tab className='Tab' label={page} />)
					}
				</Tabs>
			</div>
		</>
	);
}
