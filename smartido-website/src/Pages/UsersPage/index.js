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
    const [emailBlock, setEmailBlock] = useState('');

    const handleBlock = (email) => {
        setShowAlert(true);
        setEmailBlock(email);
    }

    const handleConfirm = async () => {

        let data = {
            "email": emailBlock,
        };

        await axios.post(numbers.server +"admin/block",data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setShowAlert(false);
            setUsers(users.filter(user => user.email !== emailBlock));

        }).catch((err) => {
            console.log(err);

        })

    }

    const handleCancel = () => {
        setShowAlert(false);
    }

    useEffect(() => {
        const getUsers = () => {
            axios.get(numbers.server +"admin/get_users", {
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
            <Navbar name={name} title={'Users'}/>
            <div className="container_all_users">
                {users.map(user => (
                    <User key={user.id} user_image={`data:image/png;base64,${user.picture}`} user_name={user.name} onBlock={() => handleBlock(user.email)}/>
                ))}
            </div>
        </>
    );
}


export default UsersPage;