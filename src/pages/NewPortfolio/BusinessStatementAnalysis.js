import React from "react";
import ProgressBar from "../../components/ProgressBar";
import { Form } from "react-bootstrap";
import BankDetails from "../../components/BankDetails";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BusinessStatementAnalysis() {
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
          text1={"Upload Company’s Account Statement"}
          text2={"e.g CAC Registration, Business Permits etc"}
        />
      </Form>
    </>
  );
}

export default BusinessStatementAnalysis;
