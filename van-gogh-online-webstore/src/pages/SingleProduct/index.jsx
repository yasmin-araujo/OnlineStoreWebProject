import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './style.css'
import { Breadcrumbs, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'
import { useNavigate } from 'react-router';


const SingleProduct = () => {

    // let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    let params = useParams()
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [productQty, setProductQty] = useState(1);

    useEffect(() => {
        console.log('to entrando aqui??')
        fetch('http://localhost:5000/products/' + params.productId)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProduct(data);
            })
            .catch(e => {
                console.log('eeerrrooo')
            })
    }, [])

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
    }, []);

    const handleQtyChange = (value) => {
        setProductQty(parseInt(value))
    }

    let haveStock = true;
    const setHaveStock = () => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        let cartQty = cart.find(element => element.id === product.id) !== undefined ? cart.find(element => element.id === product.id).qty : 0;
        haveStock = true;
        if (product.qty < productQty + cartQty) {
            haveStock = false;
        }

    }

    const handleSubmit = (e) => {
        setHaveStock();
        if (!haveStock) {
            alert("Your cart will exceed the stock limit")
            e.preventDefault();
            return false;
        }
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        if (cart.find(element => element.id === product.id) !== undefined) {
            cart.find(element => element.id === product.id).qty += productQty;
        }
        else
            cart.push({...product, qty: productQty});
        localStorage.setItem('cart', JSON.stringify(cart));
        e.preventDefault();
        navigate('/products');
    }

    console.log(product)
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
                {isMobile ? ('') : (<Typography color="#D7A324">{product && product.name}</Typography>)}
            </Breadcrumbs>
        </div>

        <form onSubmit={handleSubmit}>
            <div id='singleproductpage'>
                {product && <img id='image-singleproduct' src={require('../../images/products/' + product.img)} alt={product.name + ' picture'} />}
                <div id='singleproductinformations'>
                    {product && <Typography variant='productYellowName'>{product.name}</Typography>} <br />
                    {product && <Typography variant='editProductText'>${product.price}.00</Typography>}
                    {product && <Typography variant='editProductText'>In stock: {product.qty}</Typography>}
                    <div id='quantity-singleproduct'>
                        <Typography variant='editProductText'>Quantity: </Typography>
                        <div id='quantityinput-singleproduct'>
                            <NumberTextField value={parseInt(productQty)} setValue={handleQtyChange} label="Qty." min={1} maxLenght={3} style={{ width: '70px', marginLeft: '5px' }} />
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