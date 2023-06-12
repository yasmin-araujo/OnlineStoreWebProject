import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Filters from '../../components/Filters';
import ProductsGrid from '../../components/ProductsGrid';
import './style.css';

export default function ProductsPage() {
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem('isAdmin');

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
    }, []);

    const handleNavigation = (e) => {
        e.preventDefault();
        navigate('/addproduct');
    }

    const [filter, setFilter] = useState({ price: { min: '', max: '' }, collections: [], showUnavailable: false });

    return (
        <>
            <Navbar bgColor='white' />
            <div className='products'>
                <Typography variant='yellowTitle'>Products</Typography>
                <div className='products-components'>
                    <div>
                        <Filters filter={filter} setFilter={setFilter} />
                        {isAdmin ?
                            <Button onClick={handleNavigation} styles={{ marginTop: '20px', backgroundColor: '#D6A324' }}>Add Product</Button>
                            : <></>
                        }
                    </div>
                    <ProductsGrid filter={filter} />
                </div>
            </div>
        </>
    );
}