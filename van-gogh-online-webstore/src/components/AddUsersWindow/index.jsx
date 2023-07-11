import { React, useState } from 'react'
import './style.css'
import { TextField, FormControlLabel, Checkbox } from '@mui/material'
import Button from '../Button'
import { isNumber } from '../../utils/isNumber';
import { v4 as uuidv4 } from 'uuid';

const AddUsers = ({ setUsers, users, setModoAdd, setFilteredUsers, setTextFilter }) => {

    const [info, setInfo] = useState({ name: '', email: '', address: '', telephone: '', password: '', confirmpass: '', isAdmin: false });

    const handleInputChange = (e) => {
        setInfo(info => ({
            ...info,
            [e.target.name]: e.target.value
        }));
    }

    const handleNumberChange = (e) => {
        if (!isNumber(e)) {
            e.preventDefault();
        }
        handleInputChange(e);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (info.password !== info.confirmpass) {
            alert("Passwords don't match.");
            return false;
        }

        if (users.find(user => user.email === info.email) !== undefined) {
            alert("This email already exists.");
            return false;
        }

        const body = {
            'id': uuidv4(),
            'name': info.name,
            'email': info.email,
            'address': info.address,
            'telephone': info.telephone,
            'password': info.password,
            'isAdmin': info.isAdmin,
            'profilePic': 0,
        };

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
                        const newUsers = [...users, body];
                        setUsers(newUsers);
                        setFilteredUsers(newUsers);
                        setTextFilter('');
                    }
                    else {
                        alert("Error while adding account.");
                    }
                    return res.json();
                });
        }
        catch (error) {
            console.log(error);
        }

        setModoAdd(false);
    }

    const checkboxStyle = {
        color: '#D6A324',
        '&.Mui-checked': {
            color: '#D6A324',
        },
    };

    return <>
        <form onSubmit={onSubmit}>
            <div className='AddUsers-input'>
                <div className='AddUsers-header'>
                    <span >Add User</span>
                </div>
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="name" label="Name" type="text" inputProps={{ maxLength: 30 }} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="email" label="Email" type={"email"} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="address" label="Address" type={"text"} />
                <TextField required variant='outlined' margin='normal' onKeyDown={handleNumberChange} onChange={handleInputChange} name="telephone" label="Telephone" type={"tel"} inputProps={{ maxLength: 14 }} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="password" label="Password" type={"password"} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="confirmpass" label="Confirm Password" type={"password"} />
                <FormControlLabel
                    value={info.isAdmin}
                    control={<Checkbox
                        checked={info.isAdmin}
                        onChange={() => setInfo({ ...info, 'isAdmin': !info.isAdmin })}
                        sx={checkboxStyle} />}
                    label='Is admin'
                    labelPlacement="end"
                />
                <div className='AddUsers-button'>
                    <Button isSubmitForm={true} styles={{ backgroundColor: '#D7A324' }} name={'Add User'}></Button>
                </div>
            </div><br />
        </form>
    </>;
}

export default AddUsers;