import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button'
import { TextField, Typography } from '@mui/material';

import './style.css';

export default function PaymentInformations({ shipping, subtotalPrice }) {

	const navigate = useNavigate();

	let handleNavigation = (e) => {
		e.preventDefault();
		navigate('/');
	}

	const [cards, setCards] = useState([
		'https://purepng.com/public/uploads/large/purepng.com-mastercard-logologobrand-logoiconslogos-251519938372dnf77.png',
		'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
		'https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png',
		'https://selectra.net.br/sites/selectra.net.br/files/styles/article_hero/public/images/paypal-825.png?itok=Kglm1b9o'
	])

	return (
		<div className='payment-informations'>
			<Typography variant='cardDetails'>Card Details</Typography>
			<Typography variant='paymentInformationText'>Accepted cards</Typography>
			<div className='card-row'>
				{cards.map((card) => <img className='card-image' src={card} alt='available card' />)}
			</div>
			<TextField label={'Name on card'} variant='outlined' margin='normal' size='small' defaultValue={'Name'} />
			<TextField label={'Card number'} variant='outlined' margin='normal' size='small' defaultValue={'1111 2222 3333 4444'} />
			<div className='card-row'>
				<TextField label={'Expiration date'} type='date' variant='outlined' margin='normal' size='small' InputLabelProps={{ shrink: true }} />
				<TextField label={'CVV'} variant='outlined' margin='normal' size='small' defaultValue={'123'} inputProps={{ maxLength: 3 }} />
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
			<Button onClick={(e) => handleNavigation(e)} styles={{ backgroundColor: '#D7A324' }}>COMPLETE YOUR PURCHASE</Button>
		</div>
	);
}
