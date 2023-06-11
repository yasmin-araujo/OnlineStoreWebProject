import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import Button from '../Button';
import './style.css';


export default function ProfileLogout() {

    const navigate = useNavigate();

	const handleNavigation = (e) => {
		localStorage.removeItem('session');
		localStorage.setItem('cart', []);
		e.preventDefault();
		navigate('/');
	}

	return (
		<div className='logout'>
			<Typography variant='profileSectionTitle'>Logout</Typography>
			<Typography variant='mainSubtitle'>Are you sure you want to logout?</Typography>
			<Button onClick={handleNavigation} styles={{ backgroundColor: 'black' }}>Logout</Button>
		</div>
	);
}
