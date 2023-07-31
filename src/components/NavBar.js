import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "./Logo";
import menu2 from "../assets/menu.png";
import close from "../assets/close.svg";

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
    padding: 10px 5.5%;
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
  top: 62px;
  left: 0;
  height: fit;
  z-index: 1000;
  gap: 1.5em;
  align-items: center;
  width: 100%;
  padding: 8% 0;
  border-top: 1px solid #d5dee0;
  font-weight: bold;
  background-color: #ffffff;
  transition: 0.6s ease-in-out;
`;

const Nav = styled(NavLink)`
  color: #00191f;
`;

const Nav2 = styled(NavLink)`
  color: #007e99;
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
  gap: 1.5em;
  font-size: 1em;
  flex-direction: column;
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
  flex-direction: column;
  gap: 0.2em;
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

const Register2 = styled(Link)`
  border: none;
  background: #006980;
  border: 1px solid #007e99;
  color: #ffffff;
  font-size: 1em;
  border-radius: 5px;
  text-decoration: none;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  font-weight: bold;
  &:hover {
    background-color: #005466;
    transition: ease-in-out 0.3s;
  }
`;

const Login2 = styled(Link)`
  background: #ffffff;
  border: 1px solid #007e99;
  color: #006980;
  border-radius: 5px;
  font-size: 1em;
  height: fit-content;
  width: fit-content;
  padding: 10px 40px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #005466;
    color: #ffffff;
    transition: ease-in-out 0.3s;
  }
`;

const DropDown = () => {
  return (
    <Dropdown>
      <ButtonsContainer2>
        <Register2 to="/register">Register</Register2>
      </ButtonsContainer2>
      <List2>
        <Nav2
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#005466" : "transparent",
            textDecoration: isActive ? "none" : "none",
            padding: isActive ? "10px 5%" : "0px 5% ",
            color: isActive ? "white" : "",
          })}
        >
          <li>Home</li>
        </Nav2>
        <Nav2
          to="/about"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#005466" : "transparent",
            textDecoration: isActive ? "none" : "none",
            padding: isActive ? "10px 5%" : "0px 5% ",
            color: isActive ? "white" : "",
          })}
        >
          <li>About Us</li>
        </Nav2>
        <Nav2
          to="/pricing"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#005466" : "transparent",
            textDecoration: isActive ? "none" : "none",
            padding: isActive ? "10px 5%" : "0px 5%",
            color: isActive ? "white" : "",
          })}
        >
          <li>Pricing</li>
        </Nav2>
        <Nav2
          to="/blog"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#005466" : "transparent",
            textDecoration: isActive ? "none" : "none",
            padding: isActive ? "10px 5%" : "0px 5% ",
            color: isActive ? "white" : "",
          })}
        >
          <li>Blog</li>
        </Nav2>
      </List2>
      <Login2 to="/login">Login</Login2>
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
        <div className="dropddown">
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
