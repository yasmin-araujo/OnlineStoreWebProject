import React from 'react';
import './style.css';


export default function Order({ order }) {

    return (
        <div className='order'>
            <img id='product-image' src={require('../../images/products/' + order.img)} alt={order.name + ' picture'} />
            <div className='order-info'>
                <h3>Order: #{order.id}</h3>
                <p><strong>{order.name}</strong></p>
                <p>$ {order.price}</p>
                <p>Qty: {order.qty}</p>
            </div>
        </div>
    );
}
