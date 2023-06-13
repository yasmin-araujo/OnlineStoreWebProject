import { React, useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumbs, Typography, useMediaQuery, useTheme, MenuItem, InputLabel, FormControl, Select, TextField } from '@mui/material'
import { collectionsEnum } from '../../utils/collectionsEnum';
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'
import './style.css'
import { products } from '../../utils/products'

const EditProduct = () => {

    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const { productId } = useParams();
    const [informations, setInformations] = useState(products.find((p) => p.id == productId))
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
    }, []);

    const handleInformationsChange = (e) => {
        setInformations(informations => ({
            ...informations,
            [e.target.name]: e.target.value
        }))
    }

    const handleButtonClick = (e) => {
        console.log(informations);
        e.preventDefault();
        navigate('/products');
    }

    const handleDeleteButtonClick = (e) => {
        if(window.confirm('Do you really want to delete this product?')) {
            e.preventDefault();
            navigate('/products');
        }
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

    const [img, setImg] = useState(require('../../images/products/add-product.png'));
    useEffect(() => {
        try {
            setImg(require('../../images/products/' + informations.img));
        } catch {
            setImg(require('../../images/products/add-product.png'))
        }
    }, [informations.img])


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
            <img id='image-editproduct' alt={informations.name} src={img} />
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
                            <NumberTextField style={{ width: '160px' }} value={informations.qtd} onChange={handleInformationsChange} name='quantity' label="Quantity" maxLenght={3} />
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
                                    {Object.values(collectionsEnum).map((elemento, index) => {
                                        return <MenuItem key={'collection-selector-edit-' + index} value={elemento.id}>{elemento.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='price-editproduct'>
                        <div><Typography variant='editProductText'>Image name:</Typography></div>
                        <div className='price-field-addproduct'>
                            <TextField size='small' style={{ width: '160px' }} onChange={handleInformationsChange} value={informations.img} name='img' label="Image name" />
                        </div>
                    </div>
                </div>
                <div id="button-productpage-editproduct">
                    <Button onClick={handleDeleteButtonClick} styles={{ height: '30px', backgroundColor: '#C4C4C4' }}>Delete Item</Button>
                    <Button onClick={handleButtonClick} styles={{ height: '30px', backgroundColor: '#D7A324' }}>Save Changes</Button>
                </div>
            </div>
        </div>

    </>

}

export default EditProduct