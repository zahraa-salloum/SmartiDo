import Button from '../../components/Button';
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import {useState } from "react";

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

    return (
        <div className="container">
          <h1 className="size_heading">Log In</h1>
          <Input label_name={"Email"} input_type={"email"} onChange={handleEmail} size="40" />
          <Input label_name={"Password"} input_type={"password"} onChange={handlePassword}/>
          <Button name_button={"LOGIN"} />
          <div className="error"></div>
        </div>
       
    );
}
export default Login;