import { React, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs, Typography, useMediaQuery, useTheme, MenuItem, InputLabel, FormControl, Select } from '@mui/material'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'
import './style.css'

const EditProduct = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#FFF'
    }, [])

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
    const inputRef = useRef(null);

    useEffect(() => {
        if (modoEdicao) {
            inputRef.current.focus();
        }
    }, [modoEdicao])

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
        <div className='links-editproduct'>
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
        <div id='editproductpage'>
            <img id='image-editproduct' alt={informations.name} src={require('../../images/products/mug-vincents-flowers.jpg')} />
            <div id='productinformations-editproduct'>
                <div className='editproductname'>
                    {modoEdicao
                        ? (<div className='yellowname-editproducts'>
                            <input ref={inputRef} type='text' value={informations.name} name='name'
                                onChange={handleInformationsChange} onKeyDown={handleEnterKey} /> </div>)
                        : (<div className='yellowname-editproducts'>
                            <Typography variant='productYellowName'>{informations.name}</Typography>
                        </div>)}
                    <img id='addvector' alt='Editar Produto' src={require('../../images/icons/pencil.png')} onClick={handleVectorClick} />
                </div>
                <div id='productinfo-editproduct'>
                    <div className='price-editproduct'>
                        <div><Typography variant='editProductText'>Price($):</Typography></div>
                        <div className='price-field-editproduct'>
                            <NumberTextField style={{ width: '160px' }} value={informations.price} onChange={handleInformationsChange} name='price' label="Price" />
                        </div>
                    </div>
                    <div className='price-editproduct'>
                        <div><Typography variant='editProductText'>Quantity in stock: </Typography></div>
                        <div className='price-field-editproduct'>
                            <NumberTextField style={{ width: '160px' }} value={informations.quantity} onChange={handleInformationsChange} name='quantity' label="Quantity" maxLenght={3} />
                        </div>
                    </div>
                    <div className='price-editproduct'>
                        <div><Typography variant='editProductText'>Collection: </Typography></div>
                        <div className='price-field-editproduct'>
                            <FormControl sx={{ width: '160px' }} size='small'>
                                <InputLabel id="collection-selector-label">Selecione uma opção</InputLabel>
                                <Select
                                    labelId='collection-selector-label'
                                    id="collection-selector"
                                    name='collection'
                                    label="Selecione uma opção"
                                    value={informations.collection}
                                    onChange={handleInformationsChange}
                                >
                                    <MenuItem value="">Selecione...</MenuItem>
                                    <MenuItem value="opcao1">Opção 1</MenuItem>
                                    <MenuItem value="opcao2">Opção 2</MenuItem>
                                    <MenuItem value="opcao3">Opção 3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div id="button-productpage-editproduct">
                    <Button onClick={handleButtonClick} styles={{ height: '30px', backgroundColor: '#D7A324', fontSize: '13px' }}>SAVE</Button>
                </div>
            </div>
        </div>

    </>

}

export default EditProduct