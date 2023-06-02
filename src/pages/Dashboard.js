import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import dashboard from "../assets/home.svg";
import portfolio from "../assets/portfolio.svg";
import repayment from "../assets/money-recive.svg";
import recovery from "../assets/recovery-convert.svg";
import delinquency from "../assets/convertshape.svg";
import general from "../assets/book.svg";
import dropdown from "../assets/dropdownIcon.svg";
import settings from "../assets/setting-2.svg";
import logout from "../assets/logout.svg";
import Logo from "../assets/logoWhite.svg";
import bell from "../assets/bell.svg";
import profile from "../assets/profile.svg";
import "../styles/dashboard.css";
import DashboardTopNav from "./DashboardTopNav";

const Dashboard = () => {
  return (
    <div className="dash-nav-container">
      <div>
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
            <div className="user-details">
              <Link className="user-name">Tosin Adepoju</Link>
              <Link className="user-profession">Risk Analyst</Link>
            </div>
          </div>
        </nav>
        <nav className="side-bar-nav">
          <div className="side-bar-nav1">
            <NavLink to="/dashboard/user">
              <button className="nav-side">
                <img src={dashboard} alt="dashboard" />
                <span>Dashboard</span>
              </button>
            </NavLink>
            <NavLink to="/dashboard/user">
              <button className="nav-side">
                <img src={portfolio} alt="portfolio" />
                <span>Portfolio Analysis</span>
              </button>
            </NavLink>
            <NavLink to="/dashboard/user">
              <button className="nav-side">
                <img src={repayment} alt="repayment" />
                <span>Repayment</span>
              </button>
            </NavLink>
            <NavLink to="/dashboard/user">
              <button className="nav-side">
                <img src={recovery} alt="recovery" />
                <span>Recovery management</span>
              </button>
            </NavLink>
            <NavLink to="/dashboard/user">
              <button className="nav-side">
                <img src={delinquency} alt="delinquency" />
                <span>Delinquency Analysis</span>
              </button>
            </NavLink>
            <NavLink to="/dashboard/user">
              <button className="general-nav">
                <div className="nav-side">
                  <img src={general} alt="general" />
                  <span>General</span>
                </div>
                <img src={dropdown} alt="dropdown" />
              </button>
            </NavLink>
          </div>
          <div className="side-bar-nav2">
            <NavLink to="/dashboard/user">
              <button className="nav-side">
                <img src={settings} alt="settings" />
                <span>Settings</span>
              </button>
            </NavLink>
            <NavLink to="/dashboard/user">
              <button className="nav-side">
                <img src={logout} alt="logout" />
                <span>Logout</span>
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
