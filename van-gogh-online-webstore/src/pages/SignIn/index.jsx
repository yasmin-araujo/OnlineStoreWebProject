import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { TextField } from '@mui/material';

const SignIn = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#44627C'
    }, [])

    const [SignIn, setSignIn] = useState({ email: '', password: '' });


    const onClick = () => {

        console.log(SignIn.email);
        console.log(SignIn.password);

    }

    const handleInputChange = (e) => {
        setSignIn(SignIn => ({
            ...SignIn,
            [e.target.type]: e.target.value
        }))
    }

    return <>
        <Navbar /><br /><br /><br />

        <div>
            <div className='meio-signin'>

                <div className='signin'>
                    <span >Sign In</span>
                </div>

                <div className='inputs-signin'>
                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} label="Email" type="email" />
                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} label="Password" type="password" />
                </div><br />

                <Button onClick={onClick} styles={{ backgroundColor: '#44627C' }}>SIGN IN</Button>

            </div>
        </div>
    </>
}

export default SignIn
