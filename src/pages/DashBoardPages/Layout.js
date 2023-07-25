import React, { useEffect } from "react";
import "../../styles/dashNavigation.css";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = ({ authenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated, navigate]);
  if (!authenticated) {
    return null;
  }

  return (
    <div>
      <TopBar />
      <div className="overview">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
