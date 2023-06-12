import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button'
import { TextField, Typography } from '@mui/material';

import './style.css';

export default function PaymentInformations({ shipping, subtotalPrice }) {

    const navigate = useNavigate();

    let handleNavigation = (e) => {
        e.preventDefault();
        navigate('/thanks');
    }

    const [cards, setCards] = useState([
        'https://purepng.com/public/uploads/large/purepng.com-mastercard-logologobrand-logoiconslogos-251519938372dnf77.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
        'https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png',
        'https://selectra.net.br/sites/selectra.net.br/files/styles/article_hero/public/images/paypal-825.png?itok=Kglm1b9o'
    ])

    const checkNumeric = (e) => {
        return !/^\d*$/.test(e.key) && e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39 ? true : false
    }

    const handleCvvChange = (e) => {
        if (checkNumeric(e)) {
            e.preventDefault();
        }
    }

    const handleExpireChange = (e) => {
        if (e.target.value.length == 2) {
            if (e.keyCode == 8) {
                return;
            }
            e.target.value = e.target.value + '/';
        }
        if (checkNumeric(e)) {
            e.preventDefault();
        }
    }

    const handleCardCodeChange = (e) => {
        let length = e.target.value.length;
        if (length == 4 || length == 9 || length == 14) {
            if (e.keyCode == 8) {
                return;
            }
            e.target.value = e.target.value + ' ';
        }
        if (checkNumeric(e)) {
            e.preventDefault();
        }
    }

    return (
        <div className='payment-informations'>
            <Typography variant='cardDetails'>Card Details</Typography>
            <Typography variant='paymentInformationText'>Accepted cards</Typography>
            <div className='card-row'>
                {cards.map((card, index) => <img key={'card-icon' + index} className='card-image' src={card} alt='available card' />)}
            </div>

            <TextField required label={'Name on card'} variant='outlined' margin='normal' size='small'
                placeholder={'Name'} inputProps={{ maxLength: 40 }} />

            <TextField required label={'Card number'} onKeyDown={handleCardCodeChange} variant='outlined'
                margin='normal' size='small' placeholder={'1111 2222 3333 4444'} inputProps={{ maxLength: 19 }} />

            <div className='card-row'>
                <TextField required label={'Expiration date'} onKeyDown={handleExpireChange} variant='outlined'
                    margin='normal' size='small' placeholder={'mm/yy'} inputProps={{ maxLength: 5 }} sx={{ width: '100%' }} />
                <TextField required label={'CVV'} onKeyDown={handleCvvChange} variant='outlined' margin='normal'
                    size='small' placeholder={'123'} inputProps={{ maxLength: 3 }} sx={{ width: '100%' }} />
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
