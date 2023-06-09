import { React, useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumbs, Typography, useMediaQuery, useTheme, MenuItem, InputLabel, FormControl, Select, TextField } from '@mui/material'
import { collectionsEnum } from '../../utils/collectionsEnum';
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'
import './style.css'

const EditProduct = () => {
    const params = useParams()
    const navigate = useNavigate();
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    const [product, setProduct] = useState([])
    const [collectionId, setCollectionId] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/products/' + params.productId)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProduct(data);
                setCollectionId(data.collectionId)
                console.log(data)
            })
            .catch(e => {
            })
    }, [])

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
    }, []);

    const handleProductChange = (e) => {
        if(e.target.name == 'collectionId'){
            setCollectionId(e.target.value)
        }
        setProduct(product => ({
            ...product,
            [e.target.name]: e.target.value
        }))
    }

    const handleDeleteButtonClick = (e) => {
        if (window.confirm('Do you really want to delete this product?')) {
            fetch('http://localhost:5000/products/' + params.productId, {
                method: 'DELETE',
            }).then(() => {
                e.preventDefault();
                navigate('/products');
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (img === require('../../images/products/add-product.png')) {
            alert('Essa imagem não é válida')
            return false
        }
        fetch('http://localhost:5000/products/' + params.productId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        }).then(() => {
            e.preventDefault();
            navigate('/products');
        })
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
        if (product.name === 'Product Name') {
            setProduct(product => ({
                ...product,
                name: ''
            }))
        }
        if (product.name === '') {
            setProduct(product => ({
                ...product,
                name: 'Product Name'
            }))
        }

    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            setModoEdicao(false);
            if (product.name === '') {
                setProduct(product => ({
                    ...product,
                    name: 'Product Name'
                }))
            }
        }
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
        <div className='links-editproduct'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <Link underline="hover" style={{ color: "#D7A324" }} to="/">
                    Home
                </Link>
                <Link underline="hover" style={{ color: "#D7A324" }} to="/products">
                    Products
                </Link>
                {isMobile ? ('') : (<Typography color="#D7A324">{product.name}</Typography>)}
            </Breadcrumbs>
        </div>
        <form onSubmit={handleSubmit}>
            <div id='editproductpage'>
                <img id='image-editproduct' alt={product.name} src={img} />
                <div id='productinformations-editproduct'>
                    <div className='editproductname'>
                        {modoEdicao
                            ? (<div className='yellowname-editproducts'>
                                <input ref={inputRef} type='text' value={product.name} name='name'
                                    onChange={handleProductChange} onKeyDown={handleEnterKey} /> </div>)
                            : (<div className='yellowname-editproducts'>
                                <Typography variant='productYellowName'>{product.name}</Typography>
                            </div>)}
                        <img id='addvector' alt='Editar Produto' src={require('../../images/icons/pencil.png')} onClick={handleVectorClick} />
                    </div>
                    <div id='productinfo-editproduct'>
                        <div className='price-editproduct'>
                            <div><Typography variant='editProductText'>Price($):</Typography></div>
                            <div className='price-field-editproduct'>
                                <NumberTextField required={true} style={{ width: '160px' }} value={parseInt(product.price)} onChange={handleProductChange} name='price' label="Price" />
                            </div>
                        </div>
                        <div className='price-editproduct'>
                            <div><Typography variant='editProductText'>Quantity in stock: </Typography></div>
                            <div className='price-field-editproduct'>
                                <NumberTextField required={true} style={{ width: '160px' }} value={parseInt(product.qty)} onChange={handleProductChange} name='qty' label="Quantity" maxLenght={3} />
                            </div>
                        </div>
                        <div className='price-editproduct'>
                            <div><Typography variant='editProductText'>Collection: </Typography></div>
                            <div className='price-field-editproduct'>
                                <FormControl sx={{ width: '160px' }} size='small'>
                                    <InputLabel required id="collection-selector-label">Selecione uma opção</InputLabel>
                                    <Select
                                        labelId='collection-selector-label'
                                        id="collection-selector"
                                        name='collectionId'
                                        label="Selecione uma opção"
                                        value={collectionId}
                                        onChange={handleProductChange}
                                    >
                                        {Object.values(collectionsEnum).map((elemento, index) => {
                                            console.log(elemento.name + ' ' + index)
                                            return <MenuItem key={'collection-selector-edit-' + index} value={elemento.id}>{elemento.name}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='price-editproduct'>
                            <div><Typography variant='editProductText'>Image name:</Typography></div>
                            <div className='price-field-addproduct'>
                                <TextField size='small' style={{ width: '160px' }} onChange={handleProductChange} value={product.img} name='img' label="Image name" InputLabelProps={{ shrink: true }}/>
                            </div>
                        </div>
                    </div>
                    <div id="button-productpage-editproduct">
                        <Button className='edit-button' onClick={handleDeleteButtonClick} styles={{ height: '30px', backgroundColor: '#C4C4C4' }}>Delete Item</Button>
                        <Button className='edit-button' isSubmitForm={true} styles={{ height: '30px', backgroundColor: '#D7A324' }} name={'Save'} ></Button>
                    </div>
                </div >
            </div >
        </form >

    </>

}

export default EditProduct