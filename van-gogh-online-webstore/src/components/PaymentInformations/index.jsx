import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button'
import { TextField, Typography } from '@mui/material';

import './style.css';
import { isNumber } from '../../utils/isNumber';

export default function PaymentInformations({ shipping, subtotalPrice, handleCompleteOrder, cartProducts }) {
	const navigate = useNavigate();
	const loggedIn = localStorage.getItem('session') ? true : false;

	const [cards, setCards] = useState([
		'https://purepng.com/public/uploads/large/purepng.com-mastercard-logologobrand-logoiconslogos-251519938372dnf77.png',
		'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
		'https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png',
		'https://selectra.net.br/sites/selectra.net.br/files/styles/article_hero/public/images/paypal-825.png?itok=Kglm1b9o'
	])

	const [paymentInformations, setPaymentInfomations] = useState({ name: '', cardNumber: '', expireDate: '', cvv: '' })

	const handleInputChange = (e) => {
		setPaymentInfomations(paymentInformations => ({
			...paymentInformations,
			[e.target.name]: e.target.value
		}))
	}

	const handleNumberChange = (e) => {
		if (!isNumber(e)) {
			e.preventDefault();
		}
	}

	const handleExpireChange = (e) => {
		if (!isNumber(e)) {
			if (e.keyCode == 8) {
				return;
			}
			e.target.value = e.target.value + '/';
		}
		if (!isNumber(e)) {
			e.preventDefault();
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!loggedIn) {
			alert('Sign in to complete your purchase')
			navigate('/signin');
			return false;
		}
		if (subtotalPrice == 0) {
			alert('Your cart is empty')
			return false;
		}
		const completed = await handleCompleteOrder();
		if(!completed){
			console.log('oiii');
			return false;
		}
		localStorage.removeItem('cart');
		navigate('/thanks');
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='payment-informations'>
				<Typography variant='cardDetails'>Card Details</Typography>
				<Typography variant='paymentInformationText'>Accepted cards</Typography>
				<div className='card-row'>
					{cards.map((card) => <img className='card-image' src={card} alt='available card' />)}
				</div>
				<TextField required label={'Name on card'} name='name' onChange={handleInputChange} variant='outlined' margin='normal' size='small' placeholder={'Name'} inputProps={{ maxLength: 40 }} />
				<TextField required label={'Card number'} name='cardNumber' onChange={handleInputChange} onKeyDown={handleNumberChange} variant='outlined' margin='normal' size='small' placeholder={'1111 2222 3333 4444'} inputProps={{ maxLength: 16 }} />
				<div className='card-row'>
					<TextField required label={'Expiration date'} name='expireDate' onChange={handleInputChange} onKeyDown={handleExpireChange} variant='outlined' margin='normal' size='small' placeholder={'mm/yy'} inputProps={{ maxLength: 5 }} sx={{ width: '100%' }} type='month' InputLabelProps={{ shrink: true }} />
					<TextField required label={'CVV'} name='cvv' onChange={handleInputChange} onKeyDown={handleNumberChange} variant='outlined' margin='normal' size='small' placeholder={123} inputProps={{ maxLength: 3 }} sx={{ width: '100%' }} />
				</div>
				<Typography variant='paymentInformationText'>Shipping address</Typography>
				<div className='address'>
					<Typography variant='addressCart'>{shipping.address}</Typography><br />
				</div>
				<div className='price'>
					<Typography variant='paymentInformationText'>Subtotal</Typography>
					<Typography variant='paymentInformationText'>${subtotalPrice}</Typography>
				</div>
				<div className='price'>
					<Typography variant='paymentInformationText'>Shipping</Typography>
					<Typography variant='paymentInformationText'>${shipping.price}</Typography>
				</div>
				<div className='price'>
					<Typography variant='paymentInformationText'>Total (tax Incl)</Typography>
					<Typography variant='paymentInformationText'>${subtotalPrice + shipping.price}</Typography>
				</div>
				<Button isSubmitForm={true} styles={{ backgroundColor: '#D7A324', marginTop: '10px' }} name={'COMPLETE YOUR PURCHASE'} ></Button>
			</div>
		</form>
	);
}
