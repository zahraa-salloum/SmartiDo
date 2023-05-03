import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import UsersPage from "./Pages/UsersPage";

function App() {
    return (
      <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
      </Routes> 
    );
}

export default App;
