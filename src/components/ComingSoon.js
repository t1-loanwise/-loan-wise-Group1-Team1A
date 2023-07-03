import React, { useState } from "react";
import "../styles/ComingSoon.css";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", email);
    setEmail("");
    e.target.reset();
  };
  return (
    <div className="rightContent2">
      <div className="comingSoon-page">
        <div className="page-page">
          <div className="coming-soon-text">
            <h3>COMING SOON</h3>
            <p>We are working hard to get this up and running</p>
            <p>We will be here soon</p>
          </div>
          <div className="coming-soon-input">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Notify me</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
