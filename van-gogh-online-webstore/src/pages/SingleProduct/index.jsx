import { React, useState } from 'react'
import './style.css'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import imagem from "./img/asd.png"
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { TextField } from '@mui/material';

const SingleProduct = () => {

    const [Quantity, setQuantity] = useState(0);

    const handleButtonClick = (e) => {
        console.log(Quantity)
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const [name, setName] = useState("Mug Vincent's flowers");
    const [price, setPrice] = useState("$ 9.00")

    return <>

        <Navbar bgColor='#FFF' /><br /><br /><br />
        <div id='links'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <Link underline="hover" color="#D7A324" href="http://localhost:3000/">
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="#D7A324"
                    href="http://localhost:3000/"
                >
                    Products
                </Link>
                <Typography color="#D7A324">{name}</Typography>
            </Breadcrumbs>
        </div>
        <div id='links2'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <Link underline="hover" color="#D7A324" href="http://localhost:3000/">
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="#D7A324"
                    href="http://localhost:3000/"
                >
                    Products
                </Link>
            </Breadcrumbs>
        </div>
        <div id='singleproductpage'>
            <img id='image-singleproduct' src={imagem} />
            <div id='productinformations'>
                <div id='productname'>{name}</div>
                <div id='price'>{price}</div>
                <div id='quantity'>
                    <div id='quantitytext'>Quantity: </div>
                    <div id='quantityinput'>
                        <TextField size='small' variant='outlined' margin='normal' onChange={handleQuantityChange} placeholder="Qty." type="number" />
                    </div>
                </div>
                <div id="button-productpage">
                    <Button onClick={handleButtonClick} height='30px' backgroundcolor='#D7A324' size='13px'>ADD TO CART</Button>
                </div>
            </div>
        </div>

    </>

}

export default SingleProduct