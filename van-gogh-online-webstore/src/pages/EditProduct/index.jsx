import { React, useState } from 'react'
import './style.css'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import imagem from "./img/asd.png"
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { TextField } from '@mui/material';

const EditProduct = () => {

    const [name, setName] = useState("Mug Vincent's flowers");
    const [price, setPrice] = useState("9.00")
    const [Quantity, setQuantity] = useState('0');
    const [Collection, setCollection] = useState('None')

    const handleButtonClick = (e) => {
        console.log(Quantity)
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }


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
                <Typography color="#D7A324">Edit {name}</Typography>
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
                <div id='productinfo'>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Price($):</Typography></div>
                        <div className='price-field'>
                            <TextField size='small' variant='outlined' placeholder={price} type="text" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Quantity in stock: </Typography></div>
                        <div className='price-field'>
                            <TextField size='small' variant='outlined' onChange={handleQuantityChange} placeholder={Quantity} type="number" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Colletion: </Typography></div>
                        <div className='price-field'>
                            <TextField size='small' variant='outlined' onChange={handleQuantityChange} placeholder={Collection} />
                        </div>
                    </div>
                </div>
                <div id="button-productpage">
                    <Button onClick={handleButtonClick} styles={{ height: '30px', backgroundColor: '#D7A324', fontSize: '13px' }}>SAVE</Button>
                </div>
            </div>
        </div>

    </>

}

export default EditProduct