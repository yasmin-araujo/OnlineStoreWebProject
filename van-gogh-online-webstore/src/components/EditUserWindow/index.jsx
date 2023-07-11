import { React, useState } from 'react'
import './style.css'
import { TextField, FormControlLabel, Checkbox } from '@mui/material'
import Button from '../Button'
import { isNumber } from '../../utils/isNumber';

const EditUser = ({ userToEdit, users, setUsers, setModoEdicao, setFilteredUsers, textFilter }) => {

    const [info, setInfo] = useState(userToEdit);

    const handleInputChange = (e) => {
        setInfo(info => ({
            ...info,
            [e.target.name]: e.target.value
        }));
    };

    const handleNumberChange = (e) => {
        if (!isNumber(e)) {
            e.preventDefault();
        }
        handleInputChange(e);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const existingEmailUser = users.find(user => user.email === info.email);
        if (existingEmailUser !== undefined && existingEmailUser.email !== userToEdit.email) {
            alert("This email is already being used.");
            return false;
        }

        const body = {
            'name': info.name,
            'email': info.email,
            'address': info.address,
            'telephone': info.telephone,
            'isAdmin': info.isAdmin,
        };

        try {
            fetch('http://localhost:5000/users/' + userToEdit.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => {
                    if (res.status === 200) {
                        fetch('http://localhost:5000/users/', {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                            .then(res => {
                                if (res.status !== 200) {
                                    alert("Error while editing account.");
                                }
                                return res.json();
                            }).then(data => {
                                setUsers(data);
                                setFilteredUsers(data.filter((user) =>
                                    user.name.toLowerCase().includes(textFilter)
                                ));
                            });
                    }
                    else {
                        alert("Error while editing account.");
                    }
                    return res.json();
                });
        }
        catch (error) {
            console.log(error);
        }

        setModoEdicao(false);
    }

    const checkboxStyle = {
        color: '#D6A324',
        '&.Mui-checked': {
            color: '#D6A324',
        },
    };

    return <>
        <form onSubmit={onSubmit}>
            <div className='EditUser-input'>
                <div className='EditUser-header'>
                    <span>Edit User</span>
                </div>
                <TextField value={info.name} required variant='outlined' margin='normal' onChange={handleInputChange} name="name" label="Name" type="text" inputProps={{ maxLength: 30 }} />
                <TextField value={info.email} required variant='outlined' margin='normal' onChange={handleInputChange} name="email" label="Email" type={"email"} />
                <TextField value={info.address} required variant='outlined' margin='normal' onChange={handleInputChange} name="address" label="Address" type={"text"} />
                <TextField value={info.telephone} required variant='outlined' margin='normal' onKeyDown={handleNumberChange} onChange={handleInputChange} name="telephone" label="Telephone" type={"tel"} inputProps={{ maxLength: 14 }} />
                <FormControlLabel
                    value={info.isAdmin}
                    control={<Checkbox
                        checked={info.isAdmin}
                        onChange={() => setInfo({ ...info, 'isAdmin': !info.isAdmin })}
                        sx={checkboxStyle} />}
                    label='Is admin'
                    labelPlacement="end"
                />
                <div className='EditUser-button'>
                    <Button isSubmitForm={true} styles={{ backgroundColor: '#D7A324' }} name={'Save Changes'}></Button>
                </div>
            </div><br />
        </form>
    </>;
}

export default EditUser;