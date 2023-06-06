import React from "react";
import ProgressBar from "../../components/ProgressBar";
import DetailsForm from "../../components/DetailsForm";
import { Form, Button } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoanInfo from "../../components/LoanInfo";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";

function BusinessDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/businessStatement");
  };
  return (
    <>
      <ProgressBar />
      <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_container">
          <DetailsForm
            user={user}
            Title={"Business Information"}
            text={"Business Name"}
            address={"Business address"}
            date={"Date of Registration"}
            number={"CAC Reg. No"}
            subject={"Business Owner"}
          />
          <p className="auto_fill">Auto-fill from loan applications</p>
          <LoanInfo />
          <p className="auto_fill">Auto-fill from loan applications</p>
          <Button variant="primary" type="submit">
            Proceed
          </Button>
        </div>
      </Form>
    </>
  );
}

export default BusinessDetails;
