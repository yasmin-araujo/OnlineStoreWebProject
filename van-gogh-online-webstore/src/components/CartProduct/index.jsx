import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css';
import NumberTextField from '../NumberTextField';


export default function CartProduct({ product, handleProductDeletion, handleProductAmount }) {
	const [productAmount, setProductAmount] = useState(product.amount)

	const handleDeletionEvent = () => {
		handleProductDeletion(product.id)
	}

	useEffect(
		() => {
			handleProductAmount(product.id, parseInt(productAmount))
		},
		[productAmount]
	);

	return (
		<div className='cart-product'>
			<div className='cart-product-info'>
				<img id='cart-product-image' src={product.image} />
				<div>
					<p><strong>{product.name}</strong></p>
					<p>$ {product.price}</p>
				</div>
			</div>
			<NumberTextField label={'Qty'} value={product.amount} setValue={(value) => { setProductAmount(value) }} style={{ width: '80px', minWidth: '55px' }} min={1} max={30}/>
			<button className='cart-delete-button' onClick={handleDeletionEvent}><DeleteIcon /></button>
		</div>
	);
}
