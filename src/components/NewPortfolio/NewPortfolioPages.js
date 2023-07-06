import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import NewBorrowerDetails from "./NewBorrowerDetails";
import NewEmploymentDetails from "./NewEmploymentDetails";
import NewPredictionResult from "./NewPredictionResult";

function NewPortfolioPages() {
  const [page, setPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalPages = 3; // Total number of pages

  const borrowerSchema = Yup.object().shape({
    fullName: Yup.string().required("Enter your full name"),
    resAddress: Yup.string()
      .required("Enter your residential address")
      .min(11, "Must be more than 11 characters"),
    email: Yup.string()
      .email()
      .required("Enter a valid email address")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ),
    altPhoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ),
    dob: Yup.date().required("This field is is required"),
    number: Yup.string()
      .min(11, "Must be 11 characters")
      .required("This field is required"),
    jobTitle: Yup.string().required("This field is required"),
    currentEmployer: Yup.string().required("This field is required"),
    employmentLength: Yup.string().required("This field is required"),
    currentSalary: Yup.string().required("This field is required"),
    loanPurpose: Yup.string().required("This field is required"),
    loanCategory: Yup.string()
      .required("This field is required")
      .oneOf(["Personal", "Business", "Mortgage", "Student"])
      .label("Loan Category"),
    date: Yup.date().required("This field is required"),
    amount: Yup.string().required("This field is required"),
    validityPeriod: Yup.string()
      .required("This field is required")
      .oneOf(["3 Months", "6 Months", "1 Year", "above 1 Year"])
      .label("Validity Period"),
    interestRate: Yup.string().required("This field is required"),
  });
  const employmentSchema = Yup.object().shape({
    jobTitle: Yup.string().required("This field is required"),
    currentEmployer: Yup.string().required("This field is required"),
    employmentLength: Yup.string().required("This field is required"),
    currentSalary: Yup.string().required("This field is required"),
    loanPurpose: Yup.string().required("This field is required"),
    loanCategory: Yup.string()
      .required("This field is required")
      .oneOf(["Personal", "Business", "Mortgage", "Student"])
      .label("Loan Category"),
    date: Yup.date().required("This field is required"),
    amount: Yup.string().required("This field is required"),
    validityPeriod: Yup.string()
      .required("This field is required")
      .oneOf(["3 Months", "6 Months", "1 Year", "above 1 Year"])
      .label("Validity Period"),
    interestRate: Yup.string().required("This field is required"),
  });
  const formOptions = {
    resolver: yupResolver(
      Yup.object().shape({
        ...borrowerSchema.fields,
        ...employmentSchema.fields,
      })
    ),
    mode: "onChange",
  };
  const methods = useForm(formOptions);

  function handleFormSubmit(data) {
    if (page !== totalPages - 1) {
      setPage(page + 1);
      setCurrentStep(currentStep + 1);
    }

    console.log(data);
    console.log(methods.formState);
    console.log(methods.formState.errors);
  }

  const ShowNextPage = () => {
    switch (page) {
      case 0:
        return <NewBorrowerDetails errors={methods.formState.errors} />;
      case 1:
        return <NewEmploymentDetails errors={methods.formState.errors} />;
      case 2:
        return <NewPredictionResult />;
      default:
        break;
    }
  };

  return (
    <div className="rightContent portfolio-form-container">
      <ProgressBar currentPage={page} activeStep={currentStep} />
      <form className="input-form" {...methods}>
        {ShowNextPage()}
        <button
          className="new_portfolio_btn"
          onClick={methods.handleSubmit(handleFormSubmit)}
          type="submit"
        >
          {page === 0
            ? "Proceed"
            : page === totalPages - 1
            ? "Download Report"
            : "Analyze"}
        </button>
      </form>
    </div>
  );
}

export default NewPortfolioPages;
