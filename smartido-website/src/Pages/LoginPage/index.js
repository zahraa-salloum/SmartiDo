import Button from '../../components/Button';
import Input from "../../components/Input";

const Login = () => {
    return (
        
        <div className="container">
          <h1 className="size_heading">Log In</h1>
          <Input label_name={"Email"} input_type={"email"} size="40" />
          <Input label_name={"password"} input_type={"password"} />
          <Button name_button={"Login"} />
          </div>
       
    );
}
export default Login;