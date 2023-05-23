import React from "react";
import AuthImage from "../assets/SignUpDesign.svg";
import { styled } from "styled-components";

const AuthenticationImage = () => {
  const IMG = styled.img`
    height: 1041px;
    width: 693px;
  `;
  return (
    <>
      <IMG src={AuthImage} alt="AuthImage" />
    </>
  );
};

export default AuthenticationImage;
