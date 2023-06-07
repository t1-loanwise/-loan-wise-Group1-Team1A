import React from "react";
import ProgressBar from "../../components/ProgressBar";
import BankDetails from "../../components/BankDetails";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/NewPortfolio.css";

function PersonalStatementAnalysis() {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [barFiller, setBarFiller] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [circleFiller1, setCircleFiller1] = useState(false);
  const [circleFiller2, setCircleFiller2] = useState(false);
  const handleClick2 = () => {
    setBarFiller(true);
    setIsFull(false);
    setCircleFiller1(true);
    setCircleFiller2(true);
  };
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/analysisResult");
  };

  return (
    <>
      <ProgressBar
        barFiller={barFiller}
        isFull={isFull}
        circleFiller1={circleFiller1}
        circleFiller2={circleFiller2}
      />
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_container">
          <BankDetails
            user={user}
            text1={"Upload PDF format"}
            text2={
              "e.g NIN slip, driver’s license or any other form of identification"
            }
          />
          <button className="form_btn" onClick={handleClick2}>
            Analyze
          </button>
        </div>
      </form>
    </>
  );
}

export default PersonalStatementAnalysis;
