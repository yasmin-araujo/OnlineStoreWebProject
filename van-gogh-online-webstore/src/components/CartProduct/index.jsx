import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css';
import NumberTextField from '../NumberTextField';


export default function CartProduct({ product, handleProductDeletion }) {

	const [priceFilter, setPriceFilter] = React.useState({ min: undefined, max: undefined });

	const handleEvent = () => {
		handleProductDeletion(product.productId)
	}

	return (
		<div className='product'>
			<img id='product-image' src={product.image} />
			<div className='product-info'>
				<p><strong>{product.name}</strong></p>
				<p>$ {product.price}</p>
			</div>
			<NumberTextField label={'Qty'} value={'1'} style={{ width: '80px' }} />
			<button onClick={handleEvent}><DeleteIcon/></button>
		</div>
	);
}
