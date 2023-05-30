import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/LandingPage/About";
import Home from "./pages/LandingPage/Home";
import Pricing from "./pages/LandingPage/Pricing";
import Blog from "./pages/LandingPage/Blog";
import SignUp from "./pages/AuthenticationPage/CreateAccount/SignUp";
import VerifyCode from "./pages/AuthenticationPage/VerifyCode";
import PasswordReset from "./pages/AuthenticationPage/PasswordReset";
import CreateNewPassword from "./pages/AuthenticationPage/CreateNewPassword";
import SetSecurityQuestion from "./pages/AuthenticationPage/CreateAccount/SetSecurityQuestion";
import VerifyRegistration from "./pages/AuthenticationPage/CreateAccount/VerifyRegistration";
import Login from "./pages/AuthenticationPage/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/verifyEmail" element={<VerifyCode />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/verifyRegistration" element={<VerifyRegistration />} />
        <Route path="/newPassword" element={<CreateNewPassword />} />
        <Route path="/securityQuestions" element={<SetSecurityQuestion />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
