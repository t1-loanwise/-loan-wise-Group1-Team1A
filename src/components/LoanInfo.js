import React from "react";
import { useForm } from "react-hook-form";
import { Form, Row } from "react-bootstrap";

function LoanInfo() {
  const {
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
      <Row>
        <Form.Group controlId="formGridCategory" className="col col-sm-6">
          <Form.Label>Loan Category</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="category"
            value="{form.category}"
            onChange="{handleChange}"
          >
            <option value="Choose answer">Choose answer</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Student">Student</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="amount" className="col col-sm-6">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            placeholder="$0.00"
            autoComplete="off"
            {...register("amount", {
              required: "Amount is required.",
              pattern: {
                value: /^(0|[1-9]\d*)$/,
                message: "Amount should contain only characters.",
              },
            })}
            className={`${errors.full_name ? "input-error" : ""}`}
          />
          {errors.full_name && (
            <p className="errorMsg">{errors.full_name.message}</p>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group controlId="formGridValidityPeriod" className="col col-sm-6">
          <Form.Label>Validity Period</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="validity_period"
            value="{form.validity_period}"
            onChange="{handleChange}"
          >
            <option value="Choose answer">Choose answer</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="1 Year">1 Year</option>
            <option value=">1 Year"> above 1 Year</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="interest_rate" className="col col-sm-6">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control
            type="number"
            name="interest_rate"
            autoComplete="off"
            {...register("interest_rate", {
              required: "Rate is required.",
              pattern: {
                value: /^(0|[1-9]\d*)$/,
                message: "Rate should contain only characters.",
              },
            })}
            className={`${errors.full_name ? "input-error" : ""}`}
          />
          {errors.full_name && (
            <p className="errorMsg">{errors.full_name.message}</p>
          )}
        </Form.Group>
      </Row>
    </>
  );
}

export default LoanInfo;
