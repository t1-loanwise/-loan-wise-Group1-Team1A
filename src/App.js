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
import SettingAndPrivacy from "./components/SettingAndPrivacy";
import Test from "./pages/Test";
import Login from "./pages/AuthenticationPage/Login";
import Successfulpage from "./pages/AuthenticationPage/SuccessfulPage";
import Settings from "./pages/DashBoardPages/Settings";
import Delinquency from "./pages/DashBoardPages/Delinquency";
import Messages from "./pages/DashBoardPages/Messages";
import Logout from "./pages/DashBoardPages/Logout";
import Portfolio from "./pages/DashBoardPages/Portfolio";
import Recovery from "./pages/DashBoardPages/Recovery";
import Repayment from "./pages/DashBoardPages/Repayment";
import Layout from "./pages/DashBoardPages/Layout";
import Dashboard from "./pages/DashBoardPages/Dashboard";
import NotFound from "./pages/DashBoardPages/NotFound";
import Profile from "./pages/DashBoardPages/Profile";
import Notification from "./pages/DashBoardPages/Notification";
import PredictiveModel from "./components/PredictiveModel";
import NotificationsMain from "./components/NotificationsMain";

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
        <Route path="/success" element={<Successfulpage />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />}>
            <Route
              path="settings/PredictiveModel"
              element={<PredictiveModel />} />
          
            <Route
              path="security-and-privacy"
              element={<SettingAndPrivacy /> }/>     
                   <Route path="settings/NotificationsMain"
              element={<NotificationsMain />}
            />
          </Route>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/repayment" element={<Repayment />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/general/notification" element={<Notification />} />
          <Route path="/general/messages" element={<Messages />} />
          <Route path="/general/profile" element={<Profile />} />
          <Route path="delinquency" element={<Delinquency />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
