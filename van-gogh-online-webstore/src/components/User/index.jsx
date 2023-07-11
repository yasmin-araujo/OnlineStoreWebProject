import { React, useState } from 'react'
import './style.css'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const User = ({ setUserToEdit, user, users, setUsers, setFilteredUsers, textFilter, setModoEdicao }) => {
    const handleDeleteClick = (e) => {
        let newUsers = users.filter(x => x.name !== user.name);
        setUsers(newUsers);
    }

    const handleEditClick = (e) => {
        setUserToEdit(user);
        setModoEdicao(true);
    }

    return <>
        <div className='User-user'>
            <div className='User-info'>{user.name}</div>
            <div className='User-info'>{user.email}</div>
            <div className='User-info'>{user.isAdmin.toString()}</div>
            <div className='User-icons'>
                <DeleteOutlined style={{ cursor: 'pointer' }} onClick={handleDeleteClick} />
                <EditOutlined onClick={handleEditClick} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    </>


}

export default User;