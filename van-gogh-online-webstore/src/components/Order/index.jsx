import React, { useState } from 'react';
import './style.css';


export default function Order({ order }) {

	return (
		<div className='Order'>
			{console.log(order)}
			<img id='productImage' src={order.productImage} />
			<div className='OrderInfo'>
				<h3>Order: {order.orderId}</h3>
				<p><strong>{order.productName}</strong></p>
				<p>$ {order.productPrice}</p>
				<p>Qty: {order.productAmount}</p>
			</div>
		</div>
	);
}
