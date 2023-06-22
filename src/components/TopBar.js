import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Logo from "../assets/logoWhite.svg";
import bell from "../assets/bell.svg";
import profile from "../assets/user.png";
import "../styles/dashNavigation.css";
import back from "../assets/back arrow.svg";

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    navigate(-1);
  };

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName)
    }
  },[])

 const shouldDisplayBackLink =
   location.pathname.startsWith("/customer/") ||
   location.pathname === "/userPreference" ||
   location.pathname.startsWith("/prediction") ||
   location.pathname.startsWith("/portfolio/") 


  return (
    <nav className="top-nav-bar">
      <div className="logo-back-button">
        <Link className="logo-loanwise-container">
          <img src={Logo} alt="logo" />
        </Link>
        {shouldDisplayBackLink && (
          <div className="back-link">
            <button className="back-button" onClick={goBack}>
              <img src={back} alt="back button" />
              <span>Back</span>
            </button>
          </div>
        )}
      </div>
      <div className="user-notif-profile">
        <Link to="/general/notification" className="notification-bell">
          <img src={bell} alt="notification" />
        </Link>
        <Link className="user-picture">
          <img src={profile} alt="profile" />
        </Link>
        <div className="user-details">
          <Link className="user-name">{userName}</Link>
          <Link className="user-profession">Analyst</Link>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
