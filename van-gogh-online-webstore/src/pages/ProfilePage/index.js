import React from 'react';

import './style.css';
import Navbar from '../../components/Navbar';
import { TextField } from '@mui/material';
import ProfileMenu from '../../components/ProfileMenu';

export default function ProfilePage() {
	let name = 'Van Gogh'
	let profilePages = ['Informations', 'Orders']
	return(
		<>
			<Navbar/><br/><br/><br/><br/>
			<ProfileMenu/>
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
