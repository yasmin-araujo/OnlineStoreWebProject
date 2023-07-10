import { React, useState } from 'react'
import './style.css'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const User = ({ setUser, element, users, setUsers, setFilteredUsers, textFilter, setModoEdicao }) => {


    const handleDeleteClick = (e) => {
        let newUsers = users.filter(x => x.name != element.name);
        setUsers(newUsers);
    }

    const handleEditClick = (e) => {
        setUser(element)
        setModoEdicao(true);
    }

    return <>
        <div className='User-user'>
            <div className='User-info'>{element.name}</div>
            <div className='User-info'>{element.email}</div>
            <div className='User-info'>{element.password}</div>
            <div className='User-info'>{element.type}</div>
            <div className='User-icons'>
                <DeleteOutlined style={{ cursor: 'pointer' }} onClick={handleDeleteClick} />
                <EditOutlined onClick={handleEditClick} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    </>


}

export default User;