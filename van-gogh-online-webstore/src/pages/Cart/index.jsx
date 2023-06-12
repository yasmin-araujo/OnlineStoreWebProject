import React, { useState, useEffect } from 'react';

import './style.css';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';
import PaymentInformations from '../../components/PaymentInformations';
import CartProduct from '../../components/CartProduct';


export default function Cart() {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: require('../../images/products/mug-vincents-flowers.jpg'),
            name: "TESTE 1 ",
            price: 9.00,
            amount: 1
        },
        {
            id: 2,
            image: require('../../images/products/mug-vincents-flowers.jpg'),
            name: "TESTE 2",
            price: 9.00,
            amount: 2
        },
        {
            id: 3,
            image: require('../../images/products/mug-vincents-flowers.jpg'),
            name: "NOSSA EU N SEI",
            price: 9.00,
            amount: 3
        }
    ]);

    const [isEmpty, setIsEmpty] = useState(false);
    const [subtotalPrice, setSubtotalPrice] = useState(products.reduce((sum, product) => { return sum + (product.price * product.amount) }, 0));
    const [shipping, setShipping] = useState({
        address: "Street 10, 430, Zundert - Netherlands",
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

    useEffect(() => {
        setSubtotalPrice(products.reduce((sum, product) => { return sum + (product.price * product.amount) }, 0));
    }, [products]);

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
                <PaymentInformations shipping={shipping} subtotalPrice={subtotalPrice} />
            </div>
        </>
    );
}
