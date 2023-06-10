import React, { useState, useEffect } from 'react';

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

	
	const [isEmpty, setIsEmpty] = useState(false)
	const [subtotalPrice, setSubtotalPrice] = useState(products.reduce( (sum, product) => {return sum + (product.price*product.amount)}, 0))
	const address = "Street 10, 430, Zundert - Netherlands"
	const shippingPrice = 4

	const handleProductDeletion = (productId) => {
		const newProducts = products.filter(product => product.productId !== productId)
		if(newProducts.length === 0){
			setIsEmpty(true)
		}
		setProducts(newProducts)
	}


	useEffect(
        () => {
            setSubtotalPrice(products.reduce( (sum, product) => {return sum + (product.price*product.amount)}, 0));
        },
        [products]
    );
	
	return (
		<>
			<Navbar bgColor='white'/>
			<div className='cart'>
				<div className='cart-content'>
					<Typography variant='yellowTitle'>Cart</Typography>
					{products.map((product) => <CartProduct product={product} handleProductDeletion={handleProductDeletion} />)}
					{isEmpty ? <Typography variant='mainSubtitle'>Your cart is empty</Typography> : undefined}
				</div>
				<PaymentInformations address={address} subtotalPrice={subtotalPrice} shippingPrice={shippingPrice}/>
			</div>
		</>
	);
}
