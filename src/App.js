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
import SettingAndPrivacy from "./components/SettingAndPrivacy";
import Login from "./pages/AuthenticationPage/Login";
import Successfulpage from "./pages/AuthenticationPage/SuccessfulPage";
import PersonalDetails from "./components/NewPortfolio/PersonalDetails";
import BusinessDetails from "./components/NewPortfolio/BusinessDetails";
import PersonalStatementAnalysis from "./components/NewPortfolio/PersonalStatementAnalysis";
import BusinessStatementAnalysis from "./components/NewPortfolio/BusinessStatementAnalysis";
import Behavioral from "./components/NewPortfolio/Behavioral";
import Spend from "./components/NewPortfolio/Spend";
import Income from "./components/NewPortfolio/Income";
import TransactionPattern from "./components/NewPortfolio/TransactionPattern";
import Overview from "./components/NewPortfolio/Overview";
import CashFlow from "./components/NewPortfolio/CashFlow";
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
import UserPreferenceMain from "./components/UserPreferenceMain";
import NewPortfolioPages from "./components/NewPortfolio/NewPortfolioPages";
import VerifyRegistration from "./pages/AuthenticationPage/CreateAccount/VerifyRegistration";
import BorrowersDetails from "./pages/DashBoardPages/BorrowersDetails";
import LoanDetails from "./components/LoanDetails";
import LoanAnalysis from "./components/LoanAnalysis";
import LoanHistory from "./components/LoanHistory";

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
        <Route path="/newpassword" element={<CreateNewPassword />} />
        <Route path="/securityQuestions" element={<SetSecurityQuestion />} />
        <Route path="/verifyRegistration" element={<VerifyRegistration />} />
        <Route path="/newPassword" element={<CreateNewPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Successfulpage />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/customer/:customerName" element={<BorrowersDetails />}>
            <Route index element={<LoanDetails />} />
            <Route path="loan-details" element={<LoanDetails />} />
            <Route path="loan-analysis" element={<LoanAnalysis />} />
            <Route path="loan-history" element={<LoanHistory />} />
          </Route>
          <Route
            path="/portfolio/newPortfolio"
            element={<NewPortfolioPages />}
          />
          <Route
            path="/portfolio/businessDetails"
            element={<BusinessDetails />}
          />
          <Route
            path="/portfolio/businessStatement"
            element={<BusinessStatementAnalysis />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/repayment" element={<Repayment />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/general/notification" element={<Notification />} />
          <Route path="/general/messages" element={<Messages />} />
          <Route path="/general/profile" element={<Profile />} />
          <Route path="delinquency" element={<Delinquency />} />
          <Route path="/userPreference" element={<UserPreferenceMain />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
