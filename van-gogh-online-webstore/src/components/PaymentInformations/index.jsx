import React, { useState } from 'react';
import Button from '../Button'
import { TextField, Typography } from '@mui/material';

import './style.css';

export default function PaymentInformations({ adress }) {
	const [cards, setCards] = useState([
		'https://purepng.com/public/uploads/large/purepng.com-mastercard-logologobrand-logoiconslogos-251519938372dnf77.png',
		'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
		'https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png',
		'https://selectra.net.br/sites/selectra.net.br/files/styles/article_hero/public/images/paypal-825.png?itok=Kglm1b9o'
	])

	return (
		<div className='payment-informations'>
			<Typography variant='cardDetails'>Card Details </Typography>
			<p>Accepted cards</p>
			<div className='card-row'>
				{cards.map((card) => <img className='card-image' src={card}/>)}
			</div>
			<TextField label={'Name on card'} variant='outlined' margin='normal' size='small' defaultValue={'Name'} />
			<TextField label={'Card number'} variant='outlined' margin='normal' size='small' defaultValue={'1111 2222 3333 4444'} />
			<div className='card-row'>
				<TextField label={'Expiration date'} variant='outlined' margin='normal' size='small' defaultValue={'mm/yy'} />
				<TextField label={'CVV'} variant='outlined' margin='normal' size='small' defaultValue={'123'} />
			</div>
			<p>Shipping address</p>
			<div className='address'>
				<Typography variant='addressCart'>Street 10, 430, Zundert - Netherlands</Typography>
				
				<Typography variant='addressCart'>Shipping Price 4$</Typography>
			</div>
			<p>subtotal</p>
			<p>shipping</p>
			<p>total tax Incl</p>
			<Button styles={{backgroundColor: '#D7A324'}}> COMPLETE YOUR PURCHASE</Button>
		</div>
	);
}
