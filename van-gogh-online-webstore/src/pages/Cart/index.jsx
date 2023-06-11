import React, { useState, useEffect } from 'react';
import './style.css';
import image from './product-images/caneca-vangogh.png';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';
import PaymentInformations from '../../components/PaymentInformations';
import CartProduct from '../../components/CartProduct';


export default function Cart() {
	let getProducts = localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : []
	const [products, setProducts] = useState(getProducts);

	const getSession = JSON.parse(localStorage.getItem('session'));
	const getProfile = JSON.parse(localStorage.getItem(getSession));

	const [isEmpty, setIsEmpty] = useState(true);
	const [subtotalPrice, setSubtotalPrice] = useState(products.reduce((sum, product) => { return sum + (product.price * product.amount) }, 0));
	const [shipping, setShipping] = useState({
		address: getProfile.adress,
		price: 4
	});

	const handleProductAmount = (id, amount) => {
		let newProducts = products.map(product => product.id === id ? { ...product, amount: amount } : product)
		setProducts(newProducts)
	};

	const handleProductDeletion = (id) => {
		let newProducts = products.filter(product => product.id !== id)
		if (newProducts.length === 0) {
			setIsEmpty(true)
		}
		setProducts(newProducts)
	};

	useEffect(
		() => {
			setSubtotalPrice(products.reduce((sum, product) => { return sum + (product.price * product.amount) }, 0));
		},
		[products]
	);

	return (
		<>
			<Navbar bgColor='white' />
			<div className='cart'>
				<div className='cart-content'>
					<Typography variant='yellowTitle'>Cart</Typography>
					{products.map((product) => <CartProduct product={product} handleProductDeletion={handleProductDeletion} handleProductAmount={handleProductAmount} />)}
					{isEmpty ? <Typography variant='mainSubtitle'>Your cart is empty</Typography> : undefined}
				</div>
				<PaymentInformations shipping={shipping} subtotalPrice={subtotalPrice} />
			</div>
		</>
	);
}
