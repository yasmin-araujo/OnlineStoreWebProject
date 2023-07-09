import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { isNumber } from '../../utils/isNumber';
import { v4 as uuidv4 } from 'uuid';

const SignUp = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#A1C1AA'
    }, [])

    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({ name: '', email: '', address: '', telephone: '', password: '', confirmpass: '' })

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
        handleInputChange(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signUp.password !== signUp.confirmpass) {
            alert("Passwords don't match");
            return false;
        }

        const body = {
            'id': uuidv4(),
            'name': signUp.name,
            'email': signUp.email,
            'address': signUp.address,
            'telephone': signUp.telephone,
            'password': signUp.password,
            'profilePic': 0,
        };

        console.log(body);
        try {
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => {
                    if (res.status === 200) {
                        localStorage.setItem('session', JSON.stringify(body.id));
                        navigate('/');
                    }
                    else {
                        alert("Error while creating account.");
                    }
                    return res.json();
                });
        }
        catch (error) {
            console.log(error);
        }
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
                        <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="address" label="Address" type={"text"} />
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
