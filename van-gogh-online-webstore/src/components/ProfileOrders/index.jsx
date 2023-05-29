import React, {useState} from 'react';
import './style.css';
import { ListItem } from '@mui/material';
import image from './product-images/caneca-vangogh.png'
import Order from '../Order';


export default function ProfileOrders() {
	const [orders, setOrders] = useState([
		{
			orderId: "#3452",
			productImage: image,
			productName: "Mug Vicent's flowers",
			productPrice: 9.00,
			productAmount : 2
		},
		{
			orderId: "#3452",
			productImage: image,
			productName: "Mug Vicent's flowers",
			productPrice: 9.00,
			productAmount : 2
		},
		{
			orderId: "#3452",
			productImage: image,
			productName: "Mug Vicent's flowers",
			productPrice: 9.00,
			productAmount : 2
		},
		{
			orderId: "#3452",
			productImage: image,
			productName: "Mug Vicent's flowers",
			productPrice: 9.00,
			productAmount : 2
		},
		{
			orderId: "#3452",
			productImage: image,
			productName: "Mug Vicent's flowers",
			productPrice: 9.00,
			productAmount : 2
		},
		{
			orderId: "#3452",
			productImage: image,
			productName: "Mug Vicent's flowers",
			productPrice: 9.00,
			productAmount : 2
		},
	])
	return (
		<>
			<div className='OrderSection'>
				<h1>Orders</h1>
				<div className='Orders'>
					{orders.map( (order) => <Order order={order}/>)}
				</div>
			</div>
		</>
	);
}
