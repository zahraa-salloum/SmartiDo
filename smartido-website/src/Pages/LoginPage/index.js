import Button from '../../components/Button';
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import axios from "axios";

const Login = () => {
    const navigator = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState("");

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
       setPassword(e.target.value)
    }

    const handleSubmit=()=>{
    
        let data = {
            "email": email,
            "password": password
          };

        axios.post("http://192.168.1.104:8000/api/v0.0.1/auth/login",data).then((res) => {
            if(res.data.user.type_id == 1){
                localStorage.setItem('token',res.data.authorisation.token);
                // navigator('/welcome');
            } else {
                setError("Access Denied");
            }
        }
        ).catch((err) => {
            console.log(err);
            setError("Invalid Credentials");
        })

    }

    return (
        <div className="container">
          <h1 className="size_heading">Log In</h1>
          <Input label_name={"Email"} input_type={"email"} onChange={handleEmail} size="40" />
          <Input label_name={"Password"} input_type={"password"} onChange={handlePassword}/>
          <Button name_button={"LOGIN"} onSubmit={handleSubmit}/>
          <div className="error">{error}</div>
        </div>
       
    );
}
export default Login;