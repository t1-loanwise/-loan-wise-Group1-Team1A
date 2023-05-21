import React from 'react'
import { styled } from 'styled-components'
import LoanwiseLogo from './Vector.png'

const Logo = () => {
  const LogoImage = styled.img`
    width: 100%;
    height: 100%;
  `;
  return <LogoImage src={LoanwiseLogo} alt="Loanwise Logo" />;
}

export default Logo