import React from 'react';

import imagem from './profile-icons/vicent-self-portrait.jpg';
import './style.css';
import Navbar from '../../components/Navbar';
import { TextField } from '@mui/material';

export default function ProfilePage() {
	let name = 'Van Gogh'
	let profilePages = ['Informations', 'Orders']
	return(
		<>
			<Navbar/><br/><br/><br/><br/>
			<div className='profileDiv'>
				<img id='profileIcon' src={imagem}/>
				<h2 id='profileName'>{name}</h2>
			</div>
			<div className='profileOptions'>
				<button type="button" clas>Informations</button><br/>
				<button type="button">Orders</button><br/> 
				<button type="button">Logout</button><br/>
			</div>
			<div className='informations'>
				<h1>Informations</h1>
				<TextField className="TextField" label="Nome" variant="outlined" margin='normal' defaultValue={name}/><br/>
				<TextField className="TextField" label="Email" variant="outlined" margin='normal'/><br/>
				<TextField className="TextField" label="Endereço" variant="outlined" margin='normal'/><br/>
				<TextField className="TextField" label="Telefone" variant="outlined" margin='normal'/><br/>
			</div>
			<button type='button' id='changePicture'>Update profile picture</button>
			<button type='button' id='save'>Save</button>
		</>
	);
}
