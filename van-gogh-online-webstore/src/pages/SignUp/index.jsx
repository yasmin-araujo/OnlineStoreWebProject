import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';



const SignUp = () => {

    const navigate = useNavigate();

    let handleNavigation = (e) => {
        e.preventDefault();
        navigate('/');
        console.log(signUp)
    }

    useEffect(() => {
        document.body.style.backgroundColor = '#A1C1AA'
    }, [])

    const [signUp, setSignUp] = useState({ name: '', email: '', adress: '', telephone: '', password: '', confirmpass: '' })

    const handleInputChange = (e) => {
        setSignUp(signUp => ({
            ...signUp,
            [e.target.name]: e.target.value
        }))
    }

    return <>
        <Navbar bgColor='#A1C1AA' />

        <div>
            <div className='meio'>
                <div className='signup'>
                    <span >Sign Up</span>
                </div>
                <div className='inputs-signup'>

                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} name="name" label="Name" type="text" />
                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} name="email" label="Email" type={"email"} />
                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} name="adress" label="Adress" type={"text"} />
                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} name="telephone" label="Telephone" type={"tel"} />
                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} name="password" label="Password" type={"password"} />
                    <TextField variant='outlined' margin='normal' onChange={handleInputChange} name="confirmpass" label="Confirm Password" type={"password"} />

                </div><br />

                <Button onClick={handleNavigation} styles={{ backgroundColor: '#A1C1AA' }}>SIGN UP</Button>

            </div>
        </div>


    </>
}

export default SignUp
