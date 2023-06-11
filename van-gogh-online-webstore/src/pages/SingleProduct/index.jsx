import { React, useState } from 'react'
import './style.css'
import { Breadcrumbs, Typography, useMediaQuery, useTheme } from '@mui/material'
import { NavLink } from 'react-router-dom'
import imagem from "./img/asd.png"
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'


const SingleProduct = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    const [informations, setInformations] = useState({ name: "Mug Vincent's flowers", price: "$ 9.00", quantity: 0 })



    const handleButtonClick = (e) => {
        console.log(informations)
    }

    const handleQuantityChange = (value) => {
        setInformations(informations => ({
            ...informations,
            quantity: value
        }))
    }




    return <>

        <Navbar bgColor='#FFF' />

        <div className='links'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <NavLink underline="hover" style={{ color: "#D7A324" }} to="/">
                    Home
                </NavLink>
                <NavLink underline="hover" style={{ color: "#D7A324" }} to="/">
                    Products
                </NavLink>
                {isMobile ? ('') : (<Typography color="#D7A324">{informations.name}</Typography>)}
            </Breadcrumbs>
        </div>

        <div id='singleproductpage'>
            <img id='image-singleproduct' alt='' src={imagem} />
            <div id='productinformations'>
                <Typography variant='productYellowName'>{informations.name}</Typography><br />
                <Typography variant='editProductText'>{informations.price}</Typography>
                <div id='quantity'>
                    <Typography variant='editProductText'>Quantity: </Typography>
                    <div id='quantityinput'>
                        <NumberTextField value={informations.quantity} setValue={handleQuantityChange} label="Qty." />
                    </div>
                </div>
                <div id="button-productpage">
                    <Button onClick={handleButtonClick} styles={{ height: '30px', backgroundColor: '#D7A324', fontSize: '13px' }}>ADD TO CART</Button>
                </div>
            </div>
        </div>

    </>

}

export default SingleProduct