import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "./Logo";
import menu from "../assets/icons8-menu-rounded-50.png";
import menu2 from "../assets/menu2.png";
import close from "../assets/icons8-close.svg";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 5.5%;
  font-size: 16px;
  font-family: "Urbanist";
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 20px 5.5%;
  }
`;

const LogoNavContainer = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  width: 70%;
  font-weight: bold;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  height: 100vh;
  z-index: 1000;
  gap: 2em;
  align-items: center;
  width: 100%;
  font-weight: bold;
  background-color: #007e99;
`;

const Nav = styled(NavLink)`
  color: #00191f;
`;

const Nav2 = styled(NavLink)`
  color: #ffffff
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1em;
  @media (max-width: 768px) {
    display: none;
  }
`;

const List2 = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1em;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ButtonsContainer2 = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
`;

const Register = styled(Link)`
  border: none;
  background: transparent;
  color: #00191f;
  font-size: 1.1em;
  text-decoration: none;
  height: fit-content;
  padding: 15px 30px;
  font-weight: bold;
`;

const Login = styled(Link)`
  background: #007e99;
  border: 0;
  color: white;
  font-size: 1em;
  height: fit-content;
  padding: 15px 40px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #006980;
    transition: ease-in-out 0.3s;
  }
`;

const DropDown = () => {
  return (
    <Dropdown>
      <ButtonsContainer2>
        <Register to="/register">Register</Register>
        <Login to="/login">Login</Login>
      </ButtonsContainer2>
      <List2>
        <Nav2
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#005466" : "#ffffff",
            backgroundColor: isActive ? "#ffffff" : "transparent",
            textDecoration: isActive ? "none" : "none",
            opacity: isActive ? 0.7 : 1,
            padding: isActive ? "10px" : "0px",
          })}
        >
          <li>Home</li>
        </Nav2>
        <Nav2
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#005466" : "#ffffff",
            backgroundColor: isActive ? "#ffffff" : "transparent",
            textDecoration: isActive ? "none" : "none",
            opacity: isActive ? 0.7 : 1,
            padding: isActive ? "10px" : "0px",
          })}
        >
          <li>About Us</li>
        </Nav2>
        <Nav2
          to="/pricing"
          style={({ isActive }) => ({
            color: isActive ? "#005466" : "#ffffff",
            backgroundColor: isActive ? "#ffffff" : "transparent",
            textDecoration: isActive ? "none" : "none",
            opacity: isActive ? 0.7 : 1,
            padding: isActive ? "10px" : "0px",
          })}
        >
          <li>Pricing</li>
        </Nav2>
        <Nav2
          to="/blog"
          style={({ isActive }) => ({
            color: isActive ? "#005466" : "#ffffff",
            backgroundColor: isActive ? "#ffffff" : "transparent",
            textDecoration: isActive ? "none" : "none",
            opacity: isActive ? 0.7 : 1,
            padding: isActive ? "10px" : "0px",
          })}
        >
          <li>Blog</li>
        </Nav2>
      </List2>
    </Dropdown>
  );
};

const NavBar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <>
      <Navbar>
        <LogoNavContainer>
          <Link to="/">
            <Logo />
          </Link>
          <List>
            <Nav
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#005466" : "#00191f",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              <li>Home</li>
            </Nav>
            <Nav
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#005466" : "#00191f",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              <li>About Us</li>
            </Nav>
            <Nav
              to="/pricing"
              style={({ isActive }) => ({
                color: isActive ? "#005466" : "#00191f",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              <li>Pricing</li>
            </Nav>
            <Nav
              to="/blog"
              style={({ isActive }) => ({
                color: isActive ? "#005466" : "#00191f",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              <li>Blog</li>
            </Nav>
          </List>
        </LogoNavContainer>
        <ButtonsContainer>
          <Register to="/register">Register</Register>
          <Login to="/login">Login</Login>
        </ButtonsContainer>
        <div>
          <div className="menu menu2" onClick={toggleSideMenu}>
            {/* <span>Menu</span> */}
            <img src={sideMenu ? close : menu2} />
          </div>
          {sideMenu && <DropDown />}
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
