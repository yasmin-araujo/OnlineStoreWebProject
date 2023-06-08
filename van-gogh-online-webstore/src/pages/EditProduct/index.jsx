import { React, useState } from 'react'
import './style.css'
import { Breadcrumbs, Link, Typography, TextField, useMediaQuery, useTheme } from '@mui/material'
import imagem from "./img/asd.png"
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'


const EditProduct = () => {

    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    const [informations, setInformations] = useState({ name: "Mug Vincent's flowers", price: "9.00", quantity: 0, collection: "None" })

    const handlePriceChange = (value) => {
        setInformations(informations => ({
            ...informations,
            price: value
        }))
    }

    const handleQuantityChange = (value) => {
        setInformations(informations => ({
            ...informations,
            quantity: value
        }))
    }
    const handleCollectionChange = (value) => {
        setInformations(informations => ({
            ...informations,
            collection: value
        }))
    }
    const handleButtonClick = (e) => {
        console.log(informations);
    }

    return <>

        <Navbar bgColor='#FFF' /><br /><br /><br />
        {isMobile ? (<div className='links'>
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
        </div>) : (<div className='links'>
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
                <Typography color="#D7A324">{informations.name}</Typography>
            </Breadcrumbs>
        </div>)}
        <div id='singleproductpage'>
            <img id='image-singleproduct' src={imagem} />
            <div id='productinformations'>
                <div id='productname'>{informations.name}</div>
                <div id='productinfo'>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Price($):</Typography></div>
                        <div className='price-field'>
                            <NumberTextField value={informations.price} setValue={handlePriceChange} label="price" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Quantity in stock: </Typography></div>
                        <div className='price-field'>
                            <NumberTextField value={informations.quantity} setValue={handleQuantityChange} label="quantity" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Collection: </Typography></div>
                        <div className='price-field'>
                            <TextField onChange={(e) => handleCollectionChange(e.target.value)} size='small' label="collection" />
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