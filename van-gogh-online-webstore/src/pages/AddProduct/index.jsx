import { React, useState } from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import { Breadcrumbs, Typography, TextField, useMediaQuery, useTheme, MenuItem } from '@mui/material'
import imagem from "./img/add.png"
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'


const AddProduct = () => {

    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    const [informations, setInformations] = useState({ name: "", price: "", quantity: '', collection: '' })

    const handleInformationsChange = (e) => {
        setInformations(informations => ({
            ...informations,
            [e.target.name]: e.target.value
        }))
    }

    const handleButtonClick = (e) => {
        console.log(informations)
    }

    


    return <>

        <Navbar bgColor='#FFF' />
        <div className='links'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <Link underline="hover" style={{ color: "#D7A324" }} to="/">
                    Home
                </Link>
                <Link underline="hover" style={{ color: "#D7A324" }} to="/products">
                    Products
                </Link>
                {isMobile ? ('') : (<Typography color="#D7A324">Add Product</Typography>)}
            </Breadcrumbs>
        </div>
        <div id='singleproductpage'>
            <img id='image-singleproduct' alt='' src={imagem} />
            <div id='productinformations'>
            <Typography variant='productYellowName'>Add Product</Typography>
                <div id='productinfo-addproduct'>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Name:</Typography></div>
                        <div className='price-field'>
                            <TextField size='small' style={{ width: '160px' }} onChange={handleInformationsChange} value={informations.name} name='name' label="Name" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Price($):</Typography></div>
                        <div className='price-field'>
                            <NumberTextField style={{ width: '160px' }} onChange={handleInformationsChange} value={informations.price} name='price' label="Price" />
                        </div>
                    </div>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Quantity in stock: </Typography></div>
                        <div className='price-field'>
                            <NumberTextField style={{ width: '160px' }} value={informations.quantity} onChange={handleInformationsChange} name='quantity' label="Quantity" />
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

export default AddProduct