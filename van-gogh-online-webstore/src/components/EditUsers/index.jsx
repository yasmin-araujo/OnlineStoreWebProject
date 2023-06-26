import { React, useState } from 'react'
import './style.css'
import { Typography, TextField } from '@mui/material'


const EditUsers = () => {
    const [users, setUsers] = useState([
        {
            name: 'Tiago',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Flavio',
            email: 'email2',
            password: 'password2',
            tipo: 'Normal'
        },
        {
            name: 'Yasmin',
            email: 'email3',
            password: 'password3',
            tipo: 'Normal'
        },
        {
            name: 'Username33',
            email: 'email3',
            password: 'password3',
            tipo: 'Admin'
        },
        {
            name: 'Username14',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username15',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username16',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username17',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username18',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username19',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username120',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username21',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username22',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username23',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
        {
            name: 'Username24',
            email: 'email1',
            password: 'password1',
            tipo: 'Normal'
        },
    ])
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [textFilter, setTextFilter] = useState('');
    const handleButtonClick = (e) => {
        let newUsers = users.filter(element => element.name != e.target.name);
        setUsers(newUsers);
        setFilteredUsers(newUsers.filter((user) =>
            user.name.toLowerCase().includes(textFilter.toLowerCase())
        ))
    }
    const handleTextChange = (e) => {
        setFilteredUsers(users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))
        setTextFilter(e.target.value);
    }
    return <>
        <div className='EditUsersPage'>
            <Typography variant='salesTitle'>Manage Users</Typography>
            <div className='EditUsers-header'>
                <div className='EditUsers-info'>Name</div>
                <div className='EditUsers-info'>Email</div>
                <div className='EditUsers-info'>Password</div>
                <div className='EditUsers-info'>Type</div>
                <TextField value={textFilter} onChange={handleTextChange} size='small' style={{ backgroundColor: 'white' }} label="Find Users" />
            </div>
            <div className='EditUsers-bloco'>
                {filteredUsers.map(element => {

                    return <div className='EditUsers-usuario'>
                        <div className='EditUsers-info'>{element.name}</div>
                        <div className='EditUsers-info'>{element.email}</div>
                        <div className='EditUsers-info'>{element.password}</div>
                        <div className='EditUsers-info'>{element.tipo}</div>
                        <button name={element.name} onClick={handleButtonClick} className='EditUsers-button'>x</button>
                    </div>


                })}

            </div>

        </div >

    </>
}

export default EditUsers;