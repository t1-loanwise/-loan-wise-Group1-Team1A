import React from "react";
import { NavLink, Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "./Logo";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 5%;
  font-size: 16px;
  font-family: "Urbanist";
`;

const LogoNavContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  width: 70%;
`;

const Nav = styled(NavLink)`
  color: #00191f;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1em;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Register = styled(Link)`
  border: none;
  background: transparent;
  color: #00191f;
  font-size: 1.1em;
  text-decoration: none;
  height: fit-content;
  padding: 15px 30px;
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
  &:hover {
    background-color: #006980;
    transition: ease-in-out 0.3s;
  }
`;

const NavBar = () => {
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
      </Navbar>
    </>
  );
};

export default NavBar;
