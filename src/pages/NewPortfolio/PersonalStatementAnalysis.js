import React from "react";
import ProgressBar from "../../components/ProgressBar";
import BankDetails from "../../components/BankDetails";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PersonalStatementAnalysis() {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/analysisResult");
  };

  return (
    <>
      <ProgressBar />
      <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <BankDetails
          user={user}
          text1={"Upload PDF format"}
          text2={
            "e.g NIN slip, driver’s license or any other form of identification"
          }
        />
      </Form>
    </>
  );
}

export default PersonalStatementAnalysis;
