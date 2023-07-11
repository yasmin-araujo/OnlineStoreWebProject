import React, { useState, useEffect } from 'react';
import './style.css';
import { Typography } from '@mui/material';
import Order from '../Order';


export default function ProfileOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let userId = localStorage.getItem('session')
        if (userId) {
            fetch('http://localhost:5000/users/' + JSON.parse(userId))
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setOrders(data.orders);
                })
        }
    }, [])


    return (
        <div className='order-section'>
            <Typography variant='profileSectionTitle'>Orders</Typography>
            <div className='orders'>
                {Object.keys(orders).length > 0
                    ? orders.map((order) => <Order order={order} />)
                    : <Typography variant='smallTitle'>No orders</Typography>
                }
            </div>
        </div>
    );
}
