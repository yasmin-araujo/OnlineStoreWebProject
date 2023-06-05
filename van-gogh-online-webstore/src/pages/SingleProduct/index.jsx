import { React, useState } from 'react'
import './style.css'
import image from './img/product.png'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import Input from '../../components/TextInput'

const SingleProduct = () => {

    const [Quantity, setQuantity] = useState(0);
    const [name, setName] = useState("Mug Vincent's flowers");
    const [price, setPrice] = useState("$ 9.00")

    return <>

        <Navbar /><br /><br /><br />
        <div id='links'>
            <a className='productpagelink' href="http://localhost:3000/">Home</a>/<a className='productpagelink' href="http://localhost:3000/">Products</a>/<a className='productpagelink' href="http://localhost:3000/">{name}</a>
        </div>
        <div id='singleproductpage'>
            <img id='image-singleproduct' src={image}></img>
            <div id='productinformations'>
                <div id='productname'>{name}</div>
                <div id='price'>{price}</div>
                <div id='quantity'>
                    <div id='quantitytext'>Quantity: </div>
                    <div id='quantityinput'>
                        <Input setInputData={setQuantity} placeholder={"Quantity"} type={"number"} />
                    </div>
                </div>
                <div id="button-productpage">
                    <Button backgroundcolor='#D7A324'>ADD TO CART</Button>
                </div>
            </div>
        </div>

    </>

}

export default SingleProduct