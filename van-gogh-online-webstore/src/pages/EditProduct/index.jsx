import { React, useState } from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import { Breadcrumbs, Typography, TextField, useMediaQuery, useTheme, MenuItem } from '@mui/material'
import imagem from "./img/product.png"
import vetor from "./img/vector.png"
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

    const [modoEdicao, setModoEdicao] = useState(false);

    const handleVectorClick = (e) => {
        setModoEdicao(!modoEdicao);
        if (informations.name === 'Product Name') {
            setInformations(informations => ({
                ...informations,
                name: ''
            }))
        }
        if (informations.name === '') {
            setInformations(informations => ({
                ...informations,
                name: 'Product Name'
            }))
        }
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            setModoEdicao(false);
            if (informations.name === '') {
                setInformations(informations => ({
                    ...informations,
                    name: 'Product Name'
                }))
            }
        }
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
                {isMobile ? ('') : (<Typography color="#D7A324">{informations.name}</Typography>)}
            </Breadcrumbs>
        </div>
        <div id='singleproductpage'>
            <img id='image-singleproduct' alt='' src={imagem} />
            <div id='productinformations'>
                <div className='editproductname'>
                    {modoEdicao ? (<div className='yellowname-editproducts'><input type='text' style={{
                        fontFamily: 'Plus Jakarta Sans',
                        color: '#D7A324',
                        fontSize: '32px',
                        fontWeight: '500',
                        lineHeight: '80px',
                        letterSpacing: '0px',
                        textAlign: 'left',
                    }} value={informations.name} name='name' onChange={handleInformationsChange} onKeyDown={handleEnterKey} /></div>)
                        : (<div className='yellowname-editproducts'><Typography variant='productYellowName'>{informations.name}</Typography></div>)}
                    <img id='addvector' alt='' src={vetor} onClick={handleVectorClick} />
                </div>
                <div id='productinfo'>
                    <div className='price'>
                        <div><Typography variant='editProductText'>Price($):</Typography></div>
                        <div className='price-field'>
                            <NumberTextField style={{ width: '160px' }} value={informations.price} onChange={handleInformationsChange} name='price' label="Price" />
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

export default EditProduct