import { React, useState } from 'react'
import './style.css'

import { NavLink } from 'react-router-dom'
import { Breadcrumbs, Typography, TextField, useMediaQuery, useTheme, MenuItem } from '@mui/material'
import imagem from "./img/product.png"
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'


const EditProduct = () => {

    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    const [informations, setInformations] = useState({ name: "Mug Vincent's flowers", price: "9.00", quantity: 0, collection: "" })

    const handleInformationsChange = (e) => {
        setInformations(informations => ({
            ...informations,
            [e.target.name]: e.target.value
        }))
    }

    const handleButtonClick = (e) => {
        console.log(informations);
    }

    return <>

        <Navbar bgColor='#FFF' />
        <div className='links'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <NavLink underline="hover" style={{ color: "#D7A324" }} to="http://localhost:3000/">
                    Home
                </NavLink>
                <NavLink underline="hover" style={{ color: "#D7A324" }} to="http://localhost:3000/">
                    Products
                </NavLink>
                {isMobile ? ('') : (<Typography color="#D7A324">{informations.name}</Typography>)}
            </Breadcrumbs>
        </div>
        <div id='singleproductpage'>
            <img id='image-singleproduct' src={imagem} />
            <div id='productinformations'>
                <Typography variant='productYellowName'>{informations.name}</Typography>
                <div id='productinfo'>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Price($):</Typography></div>
                        <div className='price-field'>
                            <NumberTextField value={informations.price} onChange={handleInformationsChange} name='price' label="Price" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Quantity in stock: </Typography></div>
                        <div className='price-field'>
                            <NumberTextField value={informations.quantity} onChange={handleInformationsChange} name='quantity' label="Quantity" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Collection: </Typography></div>
                        <div className='price-field'>
                            <TextField
                                name='collection'
                                size='small'
                                select
                                label="Selecione uma opção"
                                value={informations.collection}
                                onChange={handleInformationsChange}
                                sx={{ width: '160px' }}
                            >
                                <MenuItem value="">Selecione...</MenuItem>
                                <MenuItem value="opcao1">Opção 1</MenuItem>
                                <MenuItem value="opcao2">Opção 2</MenuItem>
                                <MenuItem value="opcao3">Opção 3</MenuItem>
                            </TextField>
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