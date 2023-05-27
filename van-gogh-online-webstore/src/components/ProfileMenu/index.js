import React from 'react';
import { Tab, Tabs } from '@mui/material';
import imagem from './profile-icons/vicent-self-portrait.jpg'
import './style.css';
import { Link } from 'react-router-dom';

export default function ProfileMenu() {
	let name = 'Van Gogh'
	let profilePages = ['Informations', 'Orders']
	return (
		<>
			<div className='profileDiv'>
				<img id='profileIcon' src={imagem}/>
				<h2 id='profileName'>{name}</h2>
				<Tabs variant="scrollable" orientation="vertical">
  					<Tab label="Informations" />
  					<Tab label="Orders" />
  					<Tab label="Logout" />
				</Tabs>
			</div>
		</>
	);
}
