import { React, useState } from 'react'
import { useParams } from 'react-router';
import './style.css'
import { Breadcrumbs, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'
import { products } from "../../utils/products";
import { useNavigate } from 'react-router';


const SingleProduct = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    let params = useParams()
    const navigate = useNavigate();

    let getProduct = products.filter(product => product.id == params.productId)
    const [product, setproduct] = useState({id: getProduct[0].id, name: getProduct[0].name, price: getProduct[0].price, quantity: 1, collection: getProduct[0].collection, img: getProduct[0].img, stock: getProduct[0].qtd})

    const handleQuantityChange = (value) => {
        setproduct(product => ({
            ...product,
            quantity: value
        }))
    }

    const handleSubmit = (e) => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        e.preventDefault();
        navigate('/products');
    }

    return <>

        <Navbar bgColor='#FFF' />

        <div className='links-singleproduct'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <Link underline="hover" style={{ color: "#D7A324" }} to="/">
                    Home
                </Link>
                <Link underline="hover" style={{ color: "#D7A324" }} to="/products">
                    Products
                </Link>
                {isMobile ? ('') : (<Typography color="#D7A324">{product.name}</Typography>)}
            </Breadcrumbs>
        </div>

        <form onSubmit={handleSubmit}>
            <div id='singleproductpage'>
                <img id='image-singleproduct' src={require('../../pages/ProductsPage/products-images/' + product.img)} alt={product.name + ' picture'} />
                <div id='singleproductinformations'>
                    <Typography variant='productYellowName'>{product.name}</Typography><br />
                    <Typography variant='editProductText'>${product.price}.00</Typography>
                    <Typography variant='editProductText'>In stock: {product.stock}</Typography>
                    <div id='quantity-singleproduct'>
                        <Typography variant='editProductText'>Quantity: </Typography>
                        <div id='quantityinput-singleproduct'>
                            <NumberTextField value={product.quantity} setValue={handleQuantityChange} label="Qty." min={1} maxLenght={3} style={{width: '70px', marginLeft: '5px'}}/>
                        </div>
                    </div>
                    <div id="button-singleproductpage">
                        <Button isSubmitForm={true} styles={{ height: '30px', backgroundColor: '#D7A324', fontSize: '13px' }} name={'ADD TO CART'} />
                    </div>
                </div>
            </div>
        </form>

    </>

}

export default SingleProduct