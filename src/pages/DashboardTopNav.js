import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/logoWhite.svg";
import bell from "../assets/bell.svg";
import profile from "../assets/profile.svg";
import "../styles/dashboard.css";

const DashboardTopNav = () => {
  return (
    <nav className="top-nav-bar">
      <Link className="logo-loanwise-container">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="user-notif-profile">
        <Link className="notification-bell">
          <img src={bell} alt="notification" />
        </Link>
        <Link className="user-picture">
          <img src={profile} alt="profile" />
        </Link>
        <div className='user-details'>
          <Link className="user-name">Tosin Adepoju</Link>
          <Link className="user-profession">Risk Analyst</Link>
        </div>
      </div>
    </nav>
  );
}

export default DashboardTopNav