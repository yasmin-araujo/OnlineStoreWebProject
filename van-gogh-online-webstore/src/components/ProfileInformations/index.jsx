import React, { useState } from 'react';
import Button from '../Button'
import { TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import './style.css';

export default function ProfileInformations() {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
	const [profileInformations, setProfileInformation] = useState([
		{
			field: "Name",
			value: "VanGogh"
		},
		{
			field: "Email",
			value: "vangogh@gmail.com"
		},
		{
			field: "Adress",
			value: "Street 10, 430, Zundert - Netherlands"
		},
		{
			field: "Telephone",
			value: "+31 (0)76 597 85 90"
		}
	])
	return (
		<div className='informations'>
			<Typography variant='profileSectionTitle'>Informations</Typography>
			<div className='information-fields'>
				{profileInformations.map(
					(info) => <TextField className='TextField' label={info.field} variant='outlined' margin='normal' defaultValue={info.value} />
				)}
				<div className='buttons'>
					<Button backgroundcolor="#C4C4C4" >Update profile picture</Button>
					<Button backgroundcolor="black" >Save</Button>
				</div>
			</div>
		</div>
	);
}
