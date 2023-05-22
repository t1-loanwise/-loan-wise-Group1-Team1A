import React from "react";
import { styled } from "styled-components";
import LoanwiseLogo from "../assets/Vector.svg";

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = () => {

  return <LogoImage src={LoanwiseLogo} alt="Loanwise Logo" />;
};

export default Logo;
