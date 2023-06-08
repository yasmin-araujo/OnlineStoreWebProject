import React from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { useMediaQuery, useTheme } from '@mui/material';

const Thanks = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    return <>
        <Navbar /><br /><br /><br />
        <div className='meio-thanks'>
            <div className='text-tks'>
                <div className='tks'>Thanks for shopping with us!</div>
                <div className='vangogh-tks'>VAN GOGH STORE</div>
            </div>
            {isMobile ? (<div className='button-thanks'>
                <Button styles={{ backgroundColor: '#D7A324', fontSize: '12px' }}>BACK TO THE STORE</Button>
            </div>) : (<div className='button-thanks'>
                <Button styles={{ backgroundColor: '#D7A324' }}>BACK TO THE STORE</Button>
            </div>)}

        </div>
    </>

}

export default Thanks