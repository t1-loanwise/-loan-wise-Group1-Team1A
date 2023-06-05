import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function BankDetails(props) {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: props.user.full_name,
      from: props.user.from,
      to: props.user.to,
      file: props.user.file,
      name: props.user.name,
    },
  });
  return (
    <>
      <h3>Bank Statement Details</h3>
      <Form.Group controlId="full_name">
        <Form.Label>Bank Statement Name</Form.Label>
        <Form.Control
          type="text"
          name="full_name"
          placeholder="Enter full name"
          autoComplete="off"
          {...register("full_name", {
            required: "Full name is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Full name should contain only characters.",
            },
          })}
          className={`${errors.full_name ? "input-error" : ""}`}
        />
        {errors.full_name && (
          <p className="errorMsg">{errors.full_name.message}</p>
        )}
      </Form.Group>
      <Form.Group controlId="full_name">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          autoComplete="off"
          {...register("name", {
            required: "Name is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Name should contain only characters.",
            },
          })}
          className={`${errors.name ? "input-error" : ""}`}
        />
        {errors.name && <p className="errorMsg">{errors.name.message}</p>}
      </Form.Group>
      <Form.Group controlId="from">
        <Form.Label>From</Form.Label>
        <Form.Control
          type="date"
          name="from"
          placeholder="select date"
          autoComplete="off"
          {...register("from", {
            required: "Date is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Please enter a valid date",
            },
          })}
          className={`${errors.from ? "input-error" : ""}`}
        />
        {errors.from && <p className="errorMsg">{errors.from.message}</p>}
      </Form.Group>
      <Form.Group controlId="to">
        <Form.Label>To</Form.Label>
        <Form.Control
          type="date"
          name="to"
          placeholder="select date"
          autoComplete="off"
          {...register("to", {
            required: "Date is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Please enter a valid date",
            },
          })}
          className={`${errors.to ? "input-error" : ""}`}
        />
        {errors.to && <p className="errorMsg">{errors.to.message}</p>}
      </Form.Group>
      <Form.Group controlId="file">
        <Form.Label>Upload Bank Statement</Form.Label>
        <Form.Control
          type="file"
          name="file"
          placeholder="choose file"
          autoComplete="off"
          {...register("from", {
            required: "File is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Please upload a pdf file",
            },
          })}
          className={`${errors.file ? "input-error" : ""}`}
        />
        {errors.file && <p className="errorMsg">{errors.file.message}</p>}
      </Form.Group>
      <p>{props.text1}</p>
      <Form.Group controlId="file">
        <Form.Label>Other Supporting Documents</Form.Label>
        <Form.Control
          type="file"
          name="file"
          placeholder="choose file"
          autoComplete="off"
          {...register("from", {
            required: "File is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Please upload a pdf file",
            },
          })}
          className={`${errors.file ? "input-error" : ""}`}
        />
        {errors.file && <p className="errorMsg">{errors.file.message}</p>}
      </Form.Group>
      <p>{props.text2}</p>
      <p>+</p>
      <Button variant="primary" type="submit">
        Analyze
      </Button>
    </>
  );
}

export default BankDetails;
