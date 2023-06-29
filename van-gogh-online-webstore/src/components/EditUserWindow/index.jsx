import { React, useState } from 'react'
import './style.css'
import { TextField, FormControl, RadioGroup, FormControlLabel, FormLabel, Radio } from '@mui/material'
import Button from '../Button'
import { isNumber } from '../../utils/isNumber';

const EditUser = ({ user, users, setUsers, setModoEdicao }) => {

    const [info, setInfo] = useState(user)

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

    const changeUsers = () => {
        let newUsers = []
        users.map((x, index) => {
            if (x.name === user.name) {
                newUsers.push(info)
            }
            else
                newUsers.push(x)
        })
        setUsers(newUsers);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (users.find(x => x.name === info.name) !== undefined) {
            if (users.find(x => x.name === info.name).name !== user.name) {
                alert("This username already exists")
                return false
            }
        }
        changeUsers();
        setModoEdicao(false);
    }


    return <>


        <form onSubmit={onSubmit}>
            <div className='EditUser-input'>
                <div className='EditUser-header'>
                    <span >Edit User</span>
                </div>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="type"
                        value={info.type}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                    </RadioGroup>
                </FormControl>
                <TextField value={info.name} required variant='outlined' margin='normal' onChange={handleInputChange} name="name" label="Name" type="text" inputProps={{ maxLength: 30 }} />
                <TextField value={info.email} required variant='outlined' margin='normal' onChange={handleInputChange} name="email" label="Email" type={"email"} />
                <TextField value={info.adress} required variant='outlined' margin='normal' onChange={handleInputChange} name="adress" label="Adress" type={"text"} />
                <TextField value={info.telephone} required variant='outlined' margin='normal' onKeyDown={handleNumberChange} onChange={handleInputChange} name="telephone" label="Telephone" type={"tel"} inputProps={{ maxLength: 14 }} />
                <TextField value={info.password} required variant='outlined' margin='normal' onChange={handleInputChange} name="password" label="Password" type="text" />
                <div className='EditUser-button'>
                    <Button isSubmitForm={true} styles={{ backgroundColor: '#D7A324' }} name={'Save Changes'}></Button>
                </div>
            </div><br />
        </form>

    </>
}

export default EditUser