import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';

const SignIn = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = '#44627C'
    }, [])

    const [signIn, setSignIn] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        setSignIn(signIn => ({
            ...signIn,
            [e.target.type]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        let checkProfile = localStorage.getItem(signIn.email)
        if(checkProfile === null){
            alert('Incorrect email or password')
            e.preventDefault();
            return false
        }
        checkProfile = JSON.parse(checkProfile);
        if(checkProfile.password !== signIn.password){
            alert('Incorrect email or password')
            e.preventDefault();
            return false
        }

        localStorage.setItem('session', JSON.stringify(signIn.email))
        e.preventDefault();
        navigate('/');
    }


    return <>
        <Navbar />

        <div>
            <div className='meio-signin'>

                <div className='signin'>
                    <span >Sign In</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='inputs-signin'>
                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} label="Email" type="email" />
                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} label="Password" type="password" />
                    </div><br />

                    <Button isSubmitForm={true} styles={{ backgroundColor: '#44627C' }} name={'SIGN IN'}/>
                </form>
            </div>
        </div>
    </>
}

export default SignIn
