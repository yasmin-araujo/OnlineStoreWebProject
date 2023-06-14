import { React, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { useNavigate } from 'react-router';
import { useMediaQuery, useTheme } from '@mui/material';

const Thanks = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#FFF'
    }, [])


    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const size = isMobile ? '12px' : '14px';

    const navigate = useNavigate();

    let handleNavigation = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return <>
        <Navbar />
        <div className='meio-thanks'>
            <div className='text-tks'>
                <div className='tks'>Thanks for shopping with us!</div>
                <div className='vangogh-tks'>VAN GOGH STORE</div>
            </div>
            <div className='button-thanks'>
                <Button onClick={handleNavigation} styles={{ backgroundColor: '#D7A324', fontSize: size }}>BACK TO THE STORE</Button>
            </div>
        </div>
    </>

}

export default Thanks