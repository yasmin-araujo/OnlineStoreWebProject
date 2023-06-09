import { Typography } from '@mui/material';
import Navbar from '../../components/Navbar';
import Filters from '../../components/Filters';
import ProductsGrid from '../../components/ProductsGrid';
import './style.css';

export default function ProductsPage() {
    return (
        <>
            <Navbar bgColor='white' />
            <div className='products'>
                <Typography variant='yellowTitle'>Products</Typography>
                <div className='products-components'>
                    <Filters />
                    <ProductsGrid />
                </div>
            </div>
        </>
    );
}
