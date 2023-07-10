import React, { useEffect, useState } from 'react';
import Button from '../Button'
import { TextField, Typography } from '@mui/material';
import './style.css';
import { isNumber } from '../../utils/isNumber';

export default function ProfileInformations({ setShowGallery }) {

    const userId = JSON.parse(localStorage.getItem('session'));
    const [user, setUser] = useState({ name: "", email: "", address: "", telephone: "" });

    useEffect(() => {
        try {
            fetch('http://localhost:5000/users/' + userId, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(async res => {
                    if (!res.ok) {
                        alert("Error while fetching account.");
                        return false;
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data) {
                        return;
                    }
                    console.log(data);
                    setUser(data);
                })
                .catch(error => {
                    console.log(error);
                    alert("Error while logging in.");
                });
        }
        catch (e) {
            console.log(e);
        }
    }, []);


    const handleInputChange = (e) => {
        setUser(user => ({
            ...user,
            [e.target.name]: e.target.value
        }))
    }

    const handleNumberChange = (e) => {
        if (!isNumber(e)) {
            e.preventDefault()
        }
        handleInputChange(e);
    }

    const body = {
        'name': user.name,
        'email': user.email,
        'address': user.address,
        'telephone': user.telephone,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:5000/users/' + userId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => {
                    if (res.status === 200) {
                        alert("Personal information succesfully updated!");
                    }
                    else {
                        console.log(res);
                        alert("Error while updating account.");
                    }
                    return res.json();
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='informations'>
            <Typography variant='profileSectionTitle'>Informations</Typography>
            <form onSubmit={handleSubmit}>
                <div className='information-fields'>
                    <TextField onChange={handleInputChange} className='TextField' name='name' label='Name' variant='outlined' margin='normal' value={user.name} inputProps={{ maxLength: 30 }} required />
                    <TextField onChange={handleInputChange} className='TextField' name='email' label='Email' variant='outlined' margin='normal' value={user.email} type='email' required />
                    <TextField onChange={handleInputChange} className='TextField' name='address' label='Address' variant='outlined' margin='normal' value={user.address} required />
                    <TextField onKeyDown={handleNumberChange} onChange={handleInputChange} className='TextField' name='telephone' label='Telephone' variant='outlined' margin='normal' value={user.telephone} type='tel' inputProps={{ maxLength: 14 }} required />

                    <div className='buttons'>
                        <Button onClick={() => setShowGallery(true)} styles={{ backgroundColor: "#C4C4C4" }} >Update profile picture</Button>
                        <Button isSubmitForm={true} styles={{ backgroundColor: "black" }} name={'Save'} />
                    </div>
                </div>
            </form>
        </div>
    );
}
