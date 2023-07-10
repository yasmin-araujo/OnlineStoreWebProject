import React, { useState, useEffect, useId } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { isNumber } from '../../utils/isNumber';

const SignUp = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = '#A1C1AA'
    }, [])

    const [signUp, setSignUp] = useState({ name: '', email: '', adress: '', telephone: '', password: '', confirmpass: '', orders: [], profilePic: 0 })

    const handleInputChange = (e) => {
        setSignUp(signUp => ({
            ...signUp,
            [e.target.name]: e.target.value
        }))
    }

    const handleNumberChange = (e) => {
        if (!isNumber(e)) {
            e.preventDefault()
        }
        setSignUp(signUp => ({
            ...signUp,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        if (signUp.password !== signUp.confirmpass) {
            alert("Passwords don't match")
            e.preventDefault();
            return false;
        }
        if (localStorage.getItem(signUp.email) !== null) {
            alert("This email is already being used")
            e.preventDefault();
            return false;
        }
        localStorage.setItem('session', JSON.stringify(signUp.email))
        localStorage.setItem(signUp.email, JSON.stringify(signUp))
        navigate('/');
    }

    return <>
        <Navbar bgColor='#A1C1AA' />

        <div>
            <div className='meio'>
                <div className='signup'>
                    <span >Sign Up</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='inputs-signup'>

                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="name" label="Name" type="text" inputProps={{ maxLength: 30 }} />
                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="email" label="Email" type={"email"} />
                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="adress" label="Adress" type={"text"} />
                        <TextField required variant='outlined' margin='normal' onKeyDown={handleNumberChange} onChange={handleInputChange} name="telephone" label="Telephone" type={"tel"} inputProps={{ maxLength: 14 }} />
                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="password" label="Password" type={"password"} />
                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="confirmpass" label="Confirm Password" type={"password"} />

                    </div><br />

                    <Button isSubmitForm={true} styles={{ backgroundColor: '#A1C1AA' }} name={'SIGNUP'}></Button>
                </form>
            </div>
        </div>


    </>
}

export default SignUp
