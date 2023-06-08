import React, { useState } from 'react';
import './style.css';


export default function Order({ order }) {

	return (
		<div className='order'>
			<img id='product-image' src={order.productImage} />
			<div className='order-info'>
				<h3>Order: {order.orderId}</h3>
				<p><strong>{order.productName}</strong></p>
				<p>$ {order.productPrice}</p>
				<p>Qty: {order.productAmount}</p>
			</div>
		</div>
	);
}
