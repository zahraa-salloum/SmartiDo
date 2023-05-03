import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import UsersPage from "./Pages/UsersPage";
import StatisticsPage from "./Pages/StatisticsPage";

function App() {
    return (
      <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/statistics" element={<StatisticsPage/>}/>
      </Routes> 
    );
}

export default App;
