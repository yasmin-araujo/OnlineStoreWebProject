import React, { useState } from 'react';
import './style.css';
import { ListItem, Typography } from '@mui/material';
import Order from '../Order';


export default function ProfileOrders() {
	const getSession = JSON.parse(localStorage.getItem('session'));
	const getProfile = JSON.parse(localStorage.getItem(getSession));
	const [orders, setOrders] = useState(getProfile.orders);

	return (
		<div className='order-section'>
			<Typography variant='profileSectionTitle'>Orders</Typography>
			<div className='orders'>
				{orders.map((order) => <Order order={order} />)}
			</div>
		</div>
	);
}
