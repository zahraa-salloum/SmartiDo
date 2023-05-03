import Navbar from "../../components/Navbar";
import User from "../../components/User";
import {useState, useEffect } from "react";
import axios from "axios";
import { numbers } from "../../constants/constants";
import Alert from "../../components/Alert";


const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const [showAlert, setShowAlert] = useState(false);

    const handleBlock = () => {
        setShowAlert(true);
    }

    const handleConfirm = () => {
        setShowAlert(false);
    }

    const handleCancel = () => {
        setShowAlert(false);
    }

    useEffect(() => {
        const getUsers = () => {
            axios.get("http://"+ numbers.server +"/api/v0.0.1/admin/get_users", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }).then(response => {
                    setUsers(response.data.users)
                }).catch((err) => {
                    console.log(err);
                })
        }
        getUsers()
    },[]) 

    return (
        <>
            {showAlert && (
                <Alert
                message={'Are you sure you want to block this user ?'}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                />
            )}
            <Navbar name={name}/>
            <div className="container_all_users">
                {users.map(user => (
                    <User key={user.id} user_image={`data:image/png;base64,${user.picture}`} user_name={user.name} onBlock={handleBlock}/>
                ))}
            </div>
        </>
    );
}


export default UsersPage;