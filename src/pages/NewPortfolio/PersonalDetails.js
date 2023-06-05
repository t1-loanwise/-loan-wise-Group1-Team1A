import ProgressBar from "../../components/ProgressBar";
import DetailsForm from "../../components/DetailsForm";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoanInfo from "../../components/LoanInfo";
import { useForm } from "react-hook-form";

function PersonalDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/personalStatement");
  };

  return (
    <>
      <ProgressBar />
      <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <DetailsForm
          user={user}
          Title={"Personal Information"}
          text={"Full Name"}
          address={"Residential address"}
          date={"Date of Birth"}
          number={"National Identity Number"}
          subject={"Current Employer"}
        />
        <Form.Group controlId="job_title">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            name="full_name"
            placeholder="Enter answer"
            autoComplete="off"
            {...register("job_title", {
              required: "Job Title is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Job Title should contain only characters.",
              },
            })}
            className={`${errors.job_title ? "input-error" : ""}`}
          />
          {errors.job_title && (
            <p className="errorMsg">{errors.job_title.message}</p>
          )}
        </Form.Group>
        <Form.Group controlId="length_of_employment">
          <Form.Label>Length of Employment</Form.Label>
          <Form.Control
            type="text"
            name="length_of_employment"
            placeholder="Enter answer"
            autoComplete="off"
            {...register("length_of_employment", {
              required: "Length of Employment is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message:
                  " Length of Employment should contain only characters.",
              },
            })}
            className={`${errors.length_of_employment ? "input-error" : ""}`}
          />
          {errors.length_of_employment && (
            <p className="errorMsg">{errors.length_of_employment.message}</p>
          )}
        </Form.Group>
        <Form.Group controlId="current_salary">
          <Form.Label>Current Salary</Form.Label>
          <Form.Control
            type="text"
            name="current_salary"
            placeholder="Enter answer"
            autoComplete="off"
            {...register("current_salary", {
              required: "Current salary is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Current salary should contain only characters.",
              },
            })}
            className={`${errors.current_salary ? "input-error" : ""}`}
          />
          {errors.current_salary && (
            <p className="errorMsg">{errors.current_salary.message}</p>
          )}
        </Form.Group>
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

export default PersonalDetails;
