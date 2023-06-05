import React from "react";
import ProgressBar from "../../components/ProgressBar";
import DetailsForm from "../../components/DetailsForm";
import { Form, Button } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoanInfo from "../../components/LoanInfo";
import { useForm } from "react-hook-form";

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
        <DetailsForm
          user={user}
          Title={"Business Information"}
          text={"Business Name"}
          address={"Business address"}
          date={"Date of Registration"}
          number={"CAC Reg. No"}
          subject={"Business Owner"}
        />
        <p>Auto-fill from loan applications</p>
        <LoanInfo />
        <p>Auto-fill from loan applications</p>
        <Button variant="primary" type="submit">
          Proceed
        </Button>
      </Form>
    </>
  );
}

export default BusinessDetails;
