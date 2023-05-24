import React from "react";
import "../styles/AuthenticationMainText.css"

export const AuthenticationMainText = ({ Title, Body }) => {
  return (
    <div className="mainTextContainer">
      <span className="mainTextHeader">{Title}</span>
      <span className="mainTextBody">{Body}</span>
    </div>
  );
};
