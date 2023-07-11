import { React, useState, useEffect } from 'react'
import './style.css'
import { Typography, TextField } from '@mui/material'
import { UserAddOutlined } from '@ant-design/icons'
import User from '../User';
import AddUsers from '../AddUsersWindow';
import EditUser from '../EditUserWindow';

const ManageUsers = () => {
    const [users, setUsers] = useState([{
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        address: '',
        telephone: '',
    }]);
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        try {
            fetch('http://localhost:5000/users/', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(async res => {
                    if (!res.ok) {
                        alert("Error while fetching accounts.");
                        return false;
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data) {
                        return;
                    }
                    setUsers(data);
                    setFilteredUsers(data.filter((user) =>
                        user.name.toLowerCase().includes(textFilter.toLowerCase())
                    ));
                })
                .catch(error => {
                    console.log(error);
                    alert("Error while fetching accounts.");
                });
        }
        catch (e) {
            console.log(e);
        }
    }, []);


    const [textFilter, setTextFilter] = useState('');
    const handleTextChange = (e) => {
        setFilteredUsers(users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        ));
        setTextFilter(e.target.value);
    }

    const [modoAdd, setModoAdd] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('overlay')) {
            // Fecha a janela de edição apenas se o clique ocorreu fora da janela
            // Lógica para fechar a janela aqui
            setModoAdd(false);
            setModoEdicao(false);
        }
    };

    const [userToEdit, setUserToEdit] = useState({
        name: '',
        email: '',
        type: '',
        address: '',
        telephone: '',
    })

    return (<>
        {modoAdd ? (
            <div onClick={handleOverlayClick} className='overlay'>
                <AddUsers users={users} setUsers={setUsers} setFilteredUsers={setFilteredUsers} setModoAdd={setModoAdd} />
            </div>
        ) : ('')}
        {modoEdicao ? (
            <div onClick={handleOverlayClick} className='overlay'>
                <EditUser userToEdit={userToEdit} users={users} setUsers={setUsers} setFilteredUsers={setFilteredUsers} setModoEdicao={setModoEdicao} />
            </div>
        ) : ('')}

        <div className='EditUsersPage'>
            <Typography variant='salesTitle'>Manage Users</Typography>
            <div className='EditUsers-header'>
                <div className='EditUsers-info'>Name</div>
                <div className='EditUsers-info'>Email</div>
                <div className='EditUsers-info'>isAdmin</div>
                <div className='EditUsers-findusers'>
                    <TextField value={textFilter} onChange={handleTextChange} size='small' style={{ width: '120px', backgroundColor: 'white' }} label="Find Users" />
                    <UserAddOutlined onClick={() => setModoAdd(true)} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className='EditUsers-bloco'>
                {filteredUsers.map((user, index) => (
                    <User key={'user-row-' + index} user={user} setUserToEdit={setUserToEdit} setModoEdicao={setModoEdicao} users={users} setUsers={setUsers} setFilteredUsers={setFilteredUsers} textFilter={textFilter} />
                ))}
            </div>

        </div >

    </>);
}

export default ManageUsers;