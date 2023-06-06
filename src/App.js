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
import Successfulpage from "./pages/AuthenticationPage/SuccessfulPage";
import PersonalDetails from "./pages/NewPortfolio/PersonalDetails";
import BusinessDetails from "./pages/NewPortfolio/BusinessDetails";
import PersonalStatementAnalysis from "./pages/NewPortfolio/PersonalStatementAnalysis";
import BusinessStatementAnalysis from "./pages/NewPortfolio/BusinessStatementAnalysis";
import AnalysisResult from "./pages/NewPortfolio/AnalysisResult";
import Behavioral from "./pages/NewPortfolio/Behavioral";
import Spend from "./pages/NewPortfolio/Spend";
import Income from "./pages/NewPortfolio/Income";
import TransactionPattern from "./pages/NewPortfolio/TransactionPattern";
import Overview from "./pages/NewPortfolio/Overview";
import CashFlow from "./pages/NewPortfolio/CashFlow";

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
        <Route path="/personalDetails" element={<PersonalDetails />} />
        <Route path="/businessDetails" element={<BusinessDetails />} />
        <Route
          path="/personalStatement"
          element={<PersonalStatementAnalysis />}
        />
        <Route
          path="/businessStatement"
          element={<BusinessStatementAnalysis />}
        />
        <Route path="/businessDetails" element={<BusinessDetails />} />
        <Route path="/analysisResult" element={<AnalysisResult />}>
          <Route path="/analysisResult/overview" element={<Overview />} />
          <Route path="/analysisResult/cashFlow" element={<CashFlow />} />
          <Route path="/analysisResult/income" element={<Income />} />
          <Route path="/analysisResult/spend" element={<Spend />} />
          <Route path="/analysisResult/behavioral" element={<Behavioral />} />
          <Route
            path="/analysisResult/transactionPattern"
            element={<TransactionPattern />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
