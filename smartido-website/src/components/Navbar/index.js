import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';


const Navbar = ({name}) => {
    const [sidebar, setSidebar] = useState(false);

    const navigator = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigator('/login');
    }

    return (
    
        <>
            <div className='navbar'>
                <div className='hello-message'>Hello... {name}</div>
                <button className='logout_btn' onClick={logout}>LOGOUT</button>
            </div>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    <img src={require("../../assets/logo-no-background white.png")} className='logo_navbar'/>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    
    );
}

export default Navbar;