import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';
import PaymentInformations from '../../components/PaymentInformations';
import CartProduct from '../../components/CartProduct';


export default function Cart() {
	useEffect(() => {
		document.body.style.backgroundColor = 'white';
	}, []);

	let getProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
	const [products, setProducts] = useState(getProducts);

	const loggedIn = localStorage.getItem('session') ? true : false;
	let getSession, getProfile, adress, price;

	if (loggedIn) {
		getSession = JSON.parse(localStorage.getItem('session'));
		getProfile = JSON.parse(localStorage.getItem(getSession));
		adress = getProfile.adress;
		price = 0;
	} else {
		adress = "Log in to set your adress"
		price = 0
	}

	const [isEmpty, setIsEmpty] = useState(getProducts.length > 0 ? false : true);
	const [subtotalPrice, setSubtotalPrice] = useState(products.reduce((sum, product) => { return sum + (product.price * product.quantity) }, 0));
	const [shipping, setShipping] = useState({
		address: adress,
		price: price
	});

	const handleProductAmount = (id, quantity) => {
		let newProducts = products.map(product => product.id === id ? { ...product, quantity: quantity } : product)
		localStorage.setItem('cart', JSON.stringify(newProducts))
		setProducts(newProducts)
	};

	const handleProductDeletion = (id) => {
		let newProducts = products.filter(product => product.id !== id)
		if (newProducts.length === 0) {
			setIsEmpty(true)
		}
		localStorage.setItem('cart', JSON.stringify(newProducts))
		setProducts(newProducts)
	};

	const handleCompleteOrder = () => {
		let randId = Math.floor(Math.random() * 10000)
		products.map(product => {getProfile.orders.push({...product, orderId: randId})})
		localStorage.setItem(getSession, JSON.stringify(getProfile))
	}

	useEffect(
		() => {
			setSubtotalPrice(products.reduce((sum, product) => { return sum + (product.price * product.quantity) }, 0));
		},
		[products]
	);

	return (
		<>
			<Navbar bgColor='white' />
			<div className='cart'>
				<div className='cart-content'>
					<Typography variant='yellowTitle'>Cart</Typography>
					{products.map((product, index) => <CartProduct key={'cart-item-' + index} product={product}
						handleProductDeletion={handleProductDeletion} handleProductAmount={handleProductAmount} />)}
					{isEmpty ? <Typography variant='mainSubtitle'>Your cart is empty</Typography> : undefined}
				</div>
				<PaymentInformations cartProducts={products} shipping={shipping} subtotalPrice={subtotalPrice} handleCompleteOrder={handleCompleteOrder} />
			</div>
		</>
	);
}
