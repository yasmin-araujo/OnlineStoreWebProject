import { React, useState, useEffect } from 'react'
import './style.css'
import { Typography, TextField } from '@mui/material'
import { UserAddOutlined } from '@ant-design/icons'
import User from '../User';
import AddUsers from '../AddUsersWindow';
import EditUser from '../EditUserWindow';

const ManageUsers = () => {


    const [users, setUsers] = useState([
        {
            name: 'Tiago',
            email: 'tiago@email.com',
            password: 'password1',
            type: 'Normal',
            adress: 'adrestiago',
            telephone: '123',
        },
        {
            name: 'Flavio',
            email: 'Flavio@gmail.com',
            password: '234',
            type: 'Admin',
            adress: '123',
            telephone: '123',
        },
        {
            name: 'Yasmin',
            email: 'yasmin@gmail.com',
            password: 'password3',
            type: 'Normal',
            adress: '234',
            telephone: '425',
        },
    ])
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        setFilteredUsers(users.filter((user) =>
            user.name.toLowerCase().includes(textFilter.toLowerCase())
        ))
    }, [users])
    const [textFilter, setTextFilter] = useState('');
    const handleTextChange = (e) => {
        setFilteredUsers(users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))
        setTextFilter(e.target.value);
    }

    const [modoAdd, setModoAdd] = useState(false);
    const handleAddClick = (e) => {
        setModoAdd(!modoAdd);
    }

    const [modoEdicao, setModoEdicao] = useState(false);



    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('overlay')) {
            // Fecha a janela de edição apenas se o clique ocorreu fora da janela
            // Lógica para fechar a janela aqui
            setModoAdd(false);
            setModoEdicao(false);
        }
    };


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        type: '',
        adress: '',
        telephone: '',
    })


    return <>

        {modoAdd ? (
            <div onClick={handleOverlayClick} className='overlay'>
                <AddUsers users={users} setUsers={setUsers} setModoAdd={setModoAdd} />
            </div>
        ) : ('')}
        {modoEdicao ? (
            <div onClick={handleOverlayClick} className='overlay'>
                <EditUser user={user} users={users} setUsers={setUsers} setModoEdicao={setModoEdicao} />
            </div>
        ) : ('')}
        <div className='EditUsersPage'>

            <Typography variant='salesTitle'>Manage Users</Typography>
            <div className='EditUsers-header'>
                <div className='EditUsers-info'>Name</div>
                <div className='EditUsers-info'>Email</div>
                <div className='EditUsers-info'>Password</div>
                <div className='EditUsers-info'>Type</div>
                <div className='EditUsers-findusers'>
                    <TextField value={textFilter} onChange={handleTextChange} size='small' style={{ width: '120px', backgroundColor: 'white' }} label="Find Users" />
                    <UserAddOutlined onClick={handleAddClick} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className='EditUsers-bloco'>
                {filteredUsers.map(element => (
                    <User setUser={setUser} setModoEdicao={setModoEdicao} element={element} users={users} setUsers={setUsers} setFilteredUsers={setFilteredUsers} textFilter={textFilter} />
                ))}

            </div>

        </div >

    </>
}

export default ManageUsers;