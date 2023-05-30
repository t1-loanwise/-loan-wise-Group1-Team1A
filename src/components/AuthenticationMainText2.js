import React from "react";
import "../styles/Auth.css";

function AuthenticationMainText({ Title, Body }) {
  return (
    <div className="mainTextContainer">
      <span className="mainTextHeader">{Title}</span>
      <span className="mainTextBody">{Body}</span>
    </div>
  );
}

export default AuthenticationMainText;
