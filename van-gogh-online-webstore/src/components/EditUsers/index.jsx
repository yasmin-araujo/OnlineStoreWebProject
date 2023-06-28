import { React, useState } from 'react'
import './style.css'
import { Typography, TextField } from '@mui/material'
import { PlusOutlined } from '@ant-design/icons'
import User from '../User';

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
                <PlusOutlined />
            </div>
            <div className='EditUsers-bloco'>
                {filteredUsers.map(element => (
                    <User element={element} users={users} setUsers={setUsers} setFilteredUsers={setFilteredUsers} textFilter={textFilter} />
                ))}

            </div>

        </div >

    </>
}

export default EditUsers;