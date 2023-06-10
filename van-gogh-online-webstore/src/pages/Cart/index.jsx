import React, { useState } from 'react';

import './style.css';
import image from './product-images/caneca-vangogh.png';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';
import PaymentInformations from '../../components/PaymentInformations';
import CartProduct from '../../components/CartProduct';


export default function Cart() {
	const [products, setProducts] = useState([
		{
			productId: 1,
			image: image,
			name: "Mug Vicent's flowers",
			price: 9.00,
			amount: 2
		},
		{
			productId: 2,
			image: image,
			name: "Mug Vicent's flowers",
			price: 9.00,
			amount: 2
		},
		{
			productId: 3,
			image: image,
			name: "Mug Vicent's flowers",
			price: 9.00,
			amount: 2
		}
	])

	const handleProductDeletion = (productId) => {
		const newProducts = products.filter(product => product.productId != productId)
		console.log(newProducts)
		setProducts(newProducts)
	}
	
	return (
		<>
			<Navbar bgColor='white'/>
			<div className='cart'>
				<div className='cart-content'>
					<Typography variant='yellowTitle'>Cart</Typography>
					{products.map((product) => <CartProduct product={product} handleProductDeletion={handleProductDeletion} />)}
				</div>
				<PaymentInformations/>
			</div>
		</>
	);
}
