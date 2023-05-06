import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import UsersPage from "./Pages/UsersPage";
import DashboardPage from "./Pages/DashboardPage";

function App() {
    return (
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes> 
    );
}

export default App;
