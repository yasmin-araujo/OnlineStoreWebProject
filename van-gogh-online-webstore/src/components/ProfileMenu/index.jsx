import React, {useState} from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import imagem from './profile-icons/vicent-self-portrait.jpg'
import './style.css';


export default function ProfileMenu() {
	let name = 'Van Gogh'
	let profilePages = ['Informations', 'Orders', 'Logout']
	const [value, setValue] = useState(0);
	const handleChange = (e, tabIndex) => {
		console.log(tabIndex)
		setValue(tabIndex);	
	}
	
	return (
		<>
			<div className='profileMenu'>
				<img id='profileIcon' src={imagem}/>
				<h2 id='profileName'>{name}</h2>
				<Tabs 
					value={value} 
					orientation="vertical" 
					onChange={handleChange} 
					textColor='black'
					TabIndicatorProps= {{ style: {backgroundColor: "black"}}}>
  					{
						profilePages.map( (page) => <Tab className='Tab' label={page} />)
					}
				</Tabs>
			</div>
		</>
	);
}
