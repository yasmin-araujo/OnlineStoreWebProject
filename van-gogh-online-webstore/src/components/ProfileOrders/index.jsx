import React, { useState } from 'react';
import './style.css';
import { ListItem, Typography } from '@mui/material';
import image from './product-images/caneca-vangogh.png'
import Order from '../Order';


export default function ProfileOrders() {
	let getOrders = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : []
	const [orders, setOrders] = useState(getOrders);

	return (
		<div className='order-section'>
			<Typography variant='profileSectionTitle'>Orders</Typography>
			<div className='orders'>
				{orders.map((order) => <Order order={order} />)}
			</div>
		</div>
	);
}
