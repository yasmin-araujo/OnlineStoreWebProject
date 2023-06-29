import { React, useState } from 'react'
import './style.css'
import { TextField, FormControl, RadioGroup, FormControlLabel, FormLabel, Radio } from '@mui/material'
import Button from '../Button'
import { isNumber } from '../../utils/isNumber';

const AddUsers = ({ setUsers, users, setModoAdd }) => {

    const [info, setInfo] = useState({ type: 'admin', name: '', email: '', adress: '', telephone: '', password: '', confirmpass: '', orders: [], profilePic: 0 })

    const handleInputChange = (e) => {
        setInfo(info => ({
            ...info,
            [e.target.name]: e.target.value
        }))
    }

    const handleNumberChange = (e) => {
        if (!isNumber(e)) {
            e.preventDefault()
        }
        setInfo(info => ({
            ...info,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (info.password !== info.confirmpass) {
            alert("Passwords don't match")
            return false;
        }
        if (users.find(x => x.name === info.name) !== undefined) {
            alert("This username already exists")
            return false
        }
        //Adicionar usuario sem o campo ''confirmpass''
        setUsers(users => ([
            ...users,
            {
                name: info.name,
                email: info.email,
                type: info.type,
                adress: info.adress,
                telephone: info.telephone,
                password: info.password,
                orders: [],
                profilePic: 0
            }
        ]))
        setModoAdd(false);
    }


    return <>


        <form onSubmit={onSubmit}>
            <div className='AddUsers-input'>
                <div className='AddUsers-header'>
                    <span >Add User</span>
                </div>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="type"
                        value={info.type}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                    </RadioGroup>
                </FormControl>
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="name" label="Name" type="text" inputProps={{ maxLength: 30 }} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="email" label="Email" type={"email"} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="adress" label="Adress" type={"text"} />
                <TextField required variant='outlined' margin='normal' onKeyDown={handleNumberChange} onChange={handleInputChange} name="telephone" label="Telephone" type={"tel"} inputProps={{ maxLength: 14 }} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="password" label="Password" type={"password"} />
                <TextField required variant='outlined' margin='normal' onChange={handleInputChange} name="confirmpass" label="Confirm Password" type={"password"} />
                <div className='AddUsers-button'>
                    <Button isSubmitForm={true} styles={{ backgroundColor: '#D7A324' }} name={'Add User'}></Button>
                </div>
            </div><br />
        </form>

    </>
}

export default AddUsers