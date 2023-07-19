import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import dashboard from "../assets/home.svg";
import portfolio from "../assets/portfolio.svg";
import repayment from "../assets/money-recive.svg";
import recovery from "../assets/recovery-convert.svg";
import delinquency from "../assets/convertshape.svg";
import general from "../assets/book.svg";
import dropdown from "../assets/dropdownIcon.svg";
import dropdown2 from "../assets/dropdown2.svg";
import settings from "../assets/setting-2.svg";
import logout from "../assets/logout.svg";
import "../styles/dashNavigation.css";
import bell from "../assets/bell.svg";
import profile from "../assets/user.png";
import { UserContext } from "../pages/AuthenticationPage/lib/UserContext";



const SideBar = ({sideMenu, toggleSideMenu}) => {
  const [dropMenu, setDropMenu ] = useState(false);
    const { userName } = useContext(UserContext);


  const toggleDropMenu = () => {
    setDropMenu((prevState) => !prevState);
  };



  return (
    <div>
      <nav className={sideMenu ? "activeSidebar" : "side-bar-nav"}>
        <div className="user-notif-profile profile-block">
          <Link className="user-picture">
            <img src={profile} alt="profile" />
          </Link>
          <div className="user-details">
            <Link className="user-name">{userName}</Link>
            <Link className="user-profession">Analyst</Link>
          </div>
        </div>
        <ul className="side-bar-nav1">
          <li>
            <NavLink activeClassName="active" to="/dashboard">
              <button className="nav-side">
                <img src={dashboard} alt="dashboard" />
                <span>Dashboard</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/portfolio">
              <button className="nav-side">
                <img src={portfolio} alt="portfolio" />
                <span>Portfolio Analysis</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/repayment">
              <button className="nav-side">
                <img src={repayment} alt="repayment" />
                <span>Repayment</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/recovery">
              <button className="nav-side">
                <img src={recovery} alt="recovery" />
                <span>Recovery management</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/delinquency">
              <button className="nav-side">
                <img src={delinquency} alt="delinquency" />
                <span>Delinquency Analysis</span>
              </button>
            </NavLink>
          </li>
          <li className={`dropdown ${dropMenu ? "show-dropdown" : ""}`}>
            <NavLink
              exact="true"
              to="/general/messages"
              activeClassName="active"
            >
              <button className="general-nav" onClick={toggleDropMenu}>
                <div className="nav-side">
                  <img src={general} alt="general" />
                  <span>General</span>
                </div>
                <img src={dropMenu ? dropdown2 : dropdown} alt="dropdown" className="drop"/>
              </button>
            </NavLink>
            <ul className={`dropdown-menu ${dropMenu ? "show-dropdown" : ""}`}>
              <li>
                <NavLink activeClassName="active" to="/general/messages">
                  <button className="dropdown-nav">Messages</button>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/general/profile">
                  <button className="dropdown-nav">User Profile</button>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/general/notification">
                  <button className="dropdown-nav">Notifications</button>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="side-bar-nav2">
          <li>
            <NavLink activeClassName="active" to="/settings">
              <button className="nav-side">
                <img src={settings} alt="settings" />
                <span>Settings</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/logout">
              <button className="nav-side">
                <img src={logout} alt="logout" />
                <span>Logout</span>
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
