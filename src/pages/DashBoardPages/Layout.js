import React from 'react'
import '../../styles/dashNavigation.css'
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div >
      <TopBar />
      <div className='overview'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout