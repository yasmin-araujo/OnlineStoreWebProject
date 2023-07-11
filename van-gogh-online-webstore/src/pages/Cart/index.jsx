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

	let getProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
	const [products, setProducts] = useState(getProducts);
	const [shipping, setShipping] = useState({
		address: 'Log in to set your address',
		price: 0
	});

	useEffect(() => {
		let session = localStorage.getItem('session')
		if (session) {
			fetch('http://localhost:5000/users/' + JSON.parse(session))
				.then(res => {
					return res.json();
				})
				.then(data => {
					setShipping({ address: data.address, price: 0 })
				})
		}
	}, [])

	const [isEmpty, setIsEmpty] = useState(getProducts.length > 0 ? false : true);
	const [subtotalPrice, setSubtotalPrice] = useState(products.reduce((sum, product) => { return sum + (product.price * product.qty) }, 0));

	const handleProductAmount = (id, qty) => {
		const newProducts = products.map(product => product.id === id ? { ...product, qty: qty } : product)
		localStorage.setItem('cart', JSON.stringify(newProducts))
		setProducts(newProducts)
	};

	const handleProductDeletion = (id) => {
		const newProducts = products.filter(product => product.id !== id)
		if (newProducts.length === 0) {
			setIsEmpty(true)
		}
		localStorage.setItem('cart', JSON.stringify(newProducts))
		setProducts(newProducts)
	};

	const handleCompleteOrder = async () => {
		let session = localStorage.getItem('session');
		let randId = Math.floor(Math.random() * 10000);
		for (let product of products) {
			const response = await fetch('http://localhost:5000/products/' + product.id)
			const data = await response.json();
			if (data.qty - product.qty < 0) {
				alert('The product ' + product.name + ' will exceed the stock limit. Please remove this item and try again');
				return false;
			}
		};
		products.map(product => {
			fetch('http://localhost:5000/users/addOrder/' + JSON.parse(session), {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id: randId, name: product.name, qty: product.qty, price: product.price, img: product.img })
			}).then(() => {
				fetch('http://localhost:5000/products/updateStock/' + product.id, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ qty: product.qty })
				})
			})
		})
		return true;
	}

	useEffect(
		() => {
			setSubtotalPrice(products.reduce((sum, product) => { return sum + (product.price * product.qty) }, 0));
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
				{shipping == 'Log in to set your address' ? <></> : <PaymentInformations cartProducts={products} shipping={shipping} subtotalPrice={subtotalPrice} handleCompleteOrder={handleCompleteOrder} />}
			</div>
		</>
	);
}
