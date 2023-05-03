import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

const Navbar = ({name}) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const navigator = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigator('/login');
    }

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className='hello-message'>Hello... {name}</div>
                <button className='logout_btn' onClick={logout}>LOGOUT</button>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <img src={require("../../assets/logo.png")} className='logo_navbar'/>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
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
        </IconContext.Provider>
    </>
  );
}

export default Navbar;