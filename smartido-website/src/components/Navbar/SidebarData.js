import React from 'react';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <AiIcons.AiOutlineStock />,
    cName: 'nav-text'
  }
];