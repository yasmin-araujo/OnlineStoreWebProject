import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css';
import NumberTextField from '../NumberTextField';


export default function CartProduct({ product, handleProductDeletion, handleProductAmount }) {
    const [productAmount, setProductAmount] = useState(product.amount);

    const handleDeletionEvent = () => {
        handleProductDeletion(product.id);
    }

    useEffect(() => {
        if (productAmount === '') {
            handleProductAmount(product.id, 1);
            setProductAmount('1');
        }
        else {
            handleProductAmount(product.id, parseInt(productAmount));
        }
    }, [productAmount]);

    return (
        <div className='cart-product'>
            <div className='cart-product-info'>
                <img id='cart-product-image' src={product.image} alt={product.name} />
                <div>
                    <p><strong>{product.name}</strong></p>
                    <p>$ {product.price}</p>
                </div>
            </div>
            <NumberTextField label={'Qty'} value={productAmount} setValue={setProductAmount}
                style={{ width: '80px', minWidth: '55px' }} min={1} max={30} maxLenght={3} />
            <button className='cart-delete-button' onClick={handleDeletionEvent}><DeleteIcon /></button>
        </div>
    );
}
