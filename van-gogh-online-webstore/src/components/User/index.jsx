import { React } from 'react'
import './style.css'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const User = ({ setUserToEdit, user: selectedUser, setUsers, setFilteredUsers, setModoEdicao, textFilter }) => {
    const userId = JSON.parse(localStorage.getItem('session'));

    const handleDeleteClick = () => {
        if (!window.confirm('Do you really want to delete this account?')) {
            return;
        }

        try {
            fetch('http://localhost:5000/users/' + selectedUser.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
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
                                    alert("Error while deleting account.");
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
                        alert("Error while deleting account.");
                    }
                    return res.json();
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleEditClick = (e) => {
        setUserToEdit(selectedUser);
        setModoEdicao(true);
    }

    return <>
        <div className='User-user'>
            <div className='User-info'>{selectedUser.name}</div>
            <div className='User-info'>{selectedUser.email}</div>
            <div className='User-info'>{selectedUser.isAdmin.toString()}</div>
            <div className='User-icons'>
                {selectedUser.id == userId ?
                    <div></div>
                    : <>
                        <DeleteOutlined style={{ cursor: 'pointer' }} onClick={handleDeleteClick} />
                        <EditOutlined onClick={handleEditClick} style={{ cursor: 'pointer' }} />
                    </>
                }
            </div>
        </div>
    </>;
}

export default User;