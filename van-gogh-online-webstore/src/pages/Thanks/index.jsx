import React from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'

const Thanks = () => {

    return <>
        <Navbar /><br /><br /><br />
        <div className='meio-thanks'>
            <div className='text-tks'>
                <div className='tks'>Thanks for shopping with us!</div>
                <div className='vangogh-tks'>VAN GOGH STORE</div>
            </div>

            <div className='button-thanks'>
                <Button backgroundcolor='#D7A324'>BACK TO THE STORE</Button>
            </div>
            <div className='button-thanks2'>
                <Button size='12px' backgroundcolor='#D7A324'>BACK TO THE STORE</Button>
            </div>
        </div>
    </>

}

export default Thanks