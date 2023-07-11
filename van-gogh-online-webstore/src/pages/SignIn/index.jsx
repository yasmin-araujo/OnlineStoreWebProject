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
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            fetch('http://localhost:5000/users/byEmail/' + signIn.email, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(async res => {
                    if (res.status === 404) {
                        alert("Incorrect email or password.");
                        return false;
                    }
                    else if (!res.ok) {
                        alert("Error while fetching account.");
                        return false;
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data) {
                        return;
                    }

                    if (data.password !== signIn.password) {
                        alert("Incorrect email or password.");
                        return;
                    }
                    else {
                        localStorage.setItem('session', JSON.stringify(data.id));
                        if (data.isAdmin) {
                            localStorage.setItem('isAdmin', true);
                        }
                        navigate('/');
                    }
                }).catch(error => {
                    console.log(error);
                    alert("Error while logging in.");
                });
        }
        catch (e) {
            console.log(e);
        }
    }

    return <>
        <Navbar fontColor='white' />

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

                    <Button isSubmitForm={true} styles={{ backgroundColor: '#44627C' }} name={'SIGN IN'} />
                </form>
            </div>
        </div>
    </>
}

export default SignIn
