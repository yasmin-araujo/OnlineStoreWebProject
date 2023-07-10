import { React, useEffect, useState } from 'react'
import './style.css'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumbs, Typography, useMediaQuery, useTheme, MenuItem, InputLabel, FormControl, Select, TextField } from '@mui/material'
import { collectionsEnum } from '../../utils/collectionsEnum';

import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'


const AddProduct = () => {
     useEffect(() => {
        document.body.style.backgroundColor = 'white';
    }, []);

    const params = useParams();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const [product, setProduct] = useState({name: undefined, price: 0, qty: 0, collectionId: 0, img: undefined });

    const handleProductChange = (e) => {
        setProduct(product => ({
            ...product,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (img === require('../../images/products/add-product.png')) {
            alert('Essa imagem não é válida');
            return false
        }

        fetch('http://localhost:5000/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        }).then(() => {
            navigate('/products');
        })
    }

    const [img, setImg] = useState(require('../../images/products/add-product.png'));
    useEffect(() => {
        try {
            setImg(require('../../images/products/' + product.img));
        } catch {
            setImg(require('../../images/products/add-product.png'))
        }
    }, [product.img])


    return <>
        <Navbar bgColor='#FFF' />
        <div className='links-addproduct'>
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
        <form onSubmit={handleSubmit}>
            <div id='addproductpage'>
                <img id='image-addproduct' alt='Imagem do Produto' src={img} />
                <div id='productinformations-addproduct'>
                    <Typography variant='productYellowName'>Add Product</Typography>
                    <div id='productinfo-addproduct'>
                        <div className='price-addproduct'>
                            <div><Typography variant='editProductText'>Name:</Typography></div>
                            <div className='price-field-addproduct'>
                                <TextField required autoComplete='off' size='small' style={{ width: '160px' }} onChange={handleProductChange} value={product.name} name='name' label="Name" />
                            </div>
                        </div>
                        <div className='price-addproduct'>
                            <div><Typography variant='editProductText'>Price($):</Typography></div>
                            <div className='price-field-addproduct'>
                                <NumberTextField required={true} style={{ width: '160px' }} onChange={handleProductChange} value={product.price} name='price' label="Price" />
                            </div>
                        </div>
                        <div className='price-addproduct'>
                            <div><Typography variant='editProductText'>Quantity in stock: </Typography></div>
                            <div className='price-field-addproduct'>
                                <NumberTextField required={true} style={{ width: '160px' }} value={product.qty} onChange={handleProductChange} name='qty' label="Quantity" maxLenght={3} />
                            </div>
                        </div>
                        <div className='price-addproduct'>
                            <div><Typography variant='editProductText'>Collection: </Typography></div>
                            <div className='price-field-addproduct'>
                                <FormControl sx={{ width: '160px' }} size='small'>
                                    <InputLabel required id="collection-selector-label">Selecione uma opção</InputLabel>
                                    <Select
                                        required
                                        labelId='collection-selector-label'
                                        id="collection-selector"
                                        name='collectionId'
                                        label="Selecione uma opção"
                                        value={product.collectionId}
                                        onChange={handleProductChange}
                                    >
                                        {Object.values(collectionsEnum).map((elemento, index) => {
                                            return <MenuItem key={'collection-selector-add-' + index} value={elemento.id}>{elemento.name}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='price-addproduct'>
                            <div><Typography variant='editProductText'>Image name:</Typography></div>
                            <div className='price-field-addproduct'>
                                <TextField required size='small' style={{ width: '160px' }} onChange={handleProductChange} value={product.img} name='img' label="Image name" />
                            </div>
                        </div>
                    </div>
                    <div id="button-productpage-addproduct">
                        <Button isSubmitForm={true} styles={{ height: '30px', backgroundColor: '#D7A324', marginTop: '10px' }} name={'Save'} ></Button>
                    </div>
                </div>
            </div >
        </form >

    </>

}

export default AddProduct