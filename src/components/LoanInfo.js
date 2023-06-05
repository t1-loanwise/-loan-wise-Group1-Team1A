import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Form } from "react-bootstrap";

function LoanInfo() {
  const category = [
    { value: "Personal", label: "Personal" },
    { value: "Business", label: "Business" },
    { value: "Mortgage", label: "Mortgage" },
    { value: "Student", label: "Student" },
  ];
  const period = [
    { value: "3 Months", label: "3 Months" },
    { value: "6 Months", label: "6 Months" },
    { value: "1 Year", label: "1 Year" },
    { value: ">1 Year", label: ">1 Year" },
  ];
  const {
    control,
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <h3>Loan Information</h3>
      <Form.Group controlId="loan_purpose">
        <Form.Label>Loan Purpose</Form.Label>
        <Form.Control
          type="text"
          name="loan_purpose"
          autoComplete="off"
          {...register("loan_purpose", {
            required: "Purpose is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Purpose should contain only characters.",
            },
          })}
          className={`${errors.full_name ? "input-error" : ""}`}
        />
        {errors.full_name && (
          <p className="errorMsg">{errors.full_name.message}</p>
        )}
      </Form.Group>
      <div className="form-control">
        <label>Loan Category</label>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select {...field} isMulti options={category} />
          )}
        />
        {errors.category && (
          <p className="errorMsg">This is a required field.</p>
        )}
      </div>
      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          name="amount"
          placeholder="$0.00"
          autoComplete="off"
          {...register("amount", {
            required: "Amount is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Amount should contain only characters.",
            },
          })}
          className={`${errors.full_name ? "input-error" : ""}`}
        />
        {errors.full_name && (
          <p className="errorMsg">{errors.full_name.message}</p>
        )}
      </Form.Group>
      <div className="form-control">
        <label>Validity Period</label>
        <Controller
          name="period"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Select {...field} isMulti options={period} />}
        />
        {errors.period && <p className="errorMsg">This is a required field.</p>}
      </div>
      <Form.Group controlId="interest_rate">
        <Form.Label>Interest Rate</Form.Label>
        <Form.Control
          type="number"
          name="interest_rate"
          autoComplete="off"
          {...register("interest_rate", {
            required: "Rate is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Rate should contain only characters.",
            },
          })}
          className={`${errors.full_name ? "input-error" : ""}`}
        />
        {errors.full_name && (
          <p className="errorMsg">{errors.full_name.message}</p>
        )}
      </Form.Group>
    </>
  );
}

export default LoanInfo;
