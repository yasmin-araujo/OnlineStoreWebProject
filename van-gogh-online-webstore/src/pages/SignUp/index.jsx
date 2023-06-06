import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import { TextField } from '@mui/material';
import Button from '../../components/Button'



const SignUp = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#A1C1AA'
    }, [])

    const [SignUp, setSignUp] = useState({ name: '', email: '', adress: '', telephone: '', password: '', confirmpass: '' })

    const handleInputChange = (e) => {
        setSignUp(SignUp => ({
            ...SignUp,
            [e.target.name]: e.target.value
        }))
    }

    const onClick = () => {

        console.log(SignUp.name);
        console.log(SignUp.email);
        console.log(SignUp.adress);
        console.log(SignUp.telephone);
        console.log(SignUp.password);
        console.log(SignUp.confirmpass);

    }

    return <>
        <Navbar /><br /><br /><br />

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

                <Button onClick={onClick} backgroundcolor="#A1C1AA">SIGN UP</Button>


            </div>
        </div>


    </>
}

export default SignUp
