import React, { useState, useEffect } from 'react';
import './style.css';
import { Typography } from '@mui/material';
import Order from '../Order';


export default function ProfileOrders() {
	const [orders, setOrders] = useState([]);
	
	useEffect(() => {
		let session = localStorage.getItem('session')
		if (session) {
			fetch('http://localhost:5000/users/' + JSON.parse(session))
				.then(res => {
					return res.json();
				})
				.then(data => {
					setOrders(data.orders);
				})
		}
	}, [])
	

	return (
		<div className='order-section'>
			<Typography variant='profileSectionTitle'>Orders</Typography>
			<div className='orders'>
				{orders && orders.map((order) => <Order order={order} />)}
			</div>
		</div>
	);
}
