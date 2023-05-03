import Navbar from "../../components/Navbar";
import User from "../../components/User";



const UsersPage = () => {
    return (
        <>
        <Navbar />
        <div className="container_users">
            <User user_image={require("../../assets/logo.png")} user_name={'Zahraa'} />
        </div>
        </>
    );
}


export default UsersPage;