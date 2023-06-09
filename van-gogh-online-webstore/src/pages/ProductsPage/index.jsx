import { useState } from 'react';

import './style.css';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';
import Filters from '../../components/Filters';

export default function ProductsPage() {
	return (
        <>
            <Navbar bgColor='white'/>
            <div className='products'>
                <Typography variant='yellowTitle'>Products</Typography>
                <div className='products-components'>
                <Filters />

                </div>
            </div>
        </>
    );
}
