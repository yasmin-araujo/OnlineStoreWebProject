import { React, useState } from 'react'
import './style.css'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const User = ({ element, users, setUsers, setFilteredUsers, textFilter }) => {


    const handleDeleteClick = (e) => {
        let newUsers = users.filter(x => x.name != element.name);
        setUsers(newUsers);
        setFilteredUsers(newUsers.filter((user) =>
            user.name.toLowerCase().includes(textFilter.toLowerCase())
        ))
    }

    return <>
        <div className='User-user'>
            <div className='User-info'>{element.name}</div>
            <div className='User-info'>{element.email}</div>
            <div className='User-info'>{element.password}</div>
            <div className='User-info'>{element.tipo}</div>
            <DeleteOutlined style={{ cursor: 'pointer' }} onClick={handleDeleteClick} />
            <EditOutlined style={{ cursor: 'pointer' }} />
        </div>
    </>


}

export default User;