import React from "react";
import { useForm } from "react-hook-form";
import { Form, Row } from "react-bootstrap";

function DetailsForm(props) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div>
        <h2>{props.Title}</h2>
        <Form.Group controlId="full_name">
          <Form.Label>{props.text}</Form.Label>
          <Form.Control
            type="text"
            name="full_name"
            placeholder="Enter your full name"
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
        <Form.Group controlId="address">
          <Form.Label>{props.address}</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter address"
            autoComplete="off"
            {...register("address", {
              required: "Address is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Address should contain only characters.",
              },
            })}
            className={`${errors.address ? "input-error" : ""}`}
          />
          <Form.Control type="text" name="address" />
          {errors.address && (
            <p className="errorMsg">{errors.address.message}</p>
          )}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email address"
            autoComplete="off"
            {...register("email", {
              required: "Email address is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email.",
              },
            })}
            className={`${errors.email ? "input-error" : ""}`}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </Form.Group>
        <Row>
          <Form.Group controlId="phone" className="col col-sm-6">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              placeholder="Enter phone number"
              autoComplete="off"
              {...register("phone_number", {
                required: "Phone number is required.",
                pattern: {
                  value:
                    /"^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$"/,
                  message: "Invalid phone number",
                },
              })}
              className={`${errors.phone_number ? "input-error" : ""}`}
            />
            {errors.phone_number && (
              <p className="errorMsg">{errors.phone_number.message}</p>
            )}
          </Form.Group>
          <Form.Group controlId="phone" className="col col-sm-6">
            <Form.Label>Alternative Phone number</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              autoComplete="off"
              {...register("phone_number", {
                pattern: {
                  value:
                    /"^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$"/,
                  message: "Invalid phone number",
                },
              })}
              className={`${errors.phone_number ? "input-error" : ""}`}
            />
            {errors.phone_number && (
              <p className="errorMsg">{errors.phone_number.message}</p>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="D.O.B" className="col col-sm-6">
            <Form.Label>{props.date}</Form.Label>
            <Form.Control
              type="date"
              name="d.o.b"
              autoComplete="off"
              {...register("d_o_b", {
                required: "Date is required.",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Please enter a valid date",
                },
              })}
              className={`${
                errors.d_o_b ? "input-error" : ""
              } portfolio_calendar`}
            />
            {errors.d_o_b && <p className="errorMsg">{errors.d_o_b.message}</p>}
          </Form.Group>
          <Form.Group controlId="number" className="col col-sm-6">
            <Form.Label>{props.number}</Form.Label>
            <Form.Control
              type="number"
              name="number"
              placeholder="Enter NIN"
              autoComplete="off"
              {...register("number", {
                required: "Number is required.",
                pattern: {
                  value: /^(0|[1-9]\d*)$/,
                  message: "Please enter a valid number",
                },
              })}
              className={`${errors.number ? "input-error" : ""}`}
            />
            {errors.number && (
              <p className="errorMsg">{errors.number.message}</p>
            )}
          </Form.Group>
        </Row>
        <Form.Group controlId="name">
          <Form.Label>{props.subject}</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Full name"
            autoComplete="off"
            {...register("name", {
              required: "Date is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Please enter full name",
              },
            })}
            className={`${errors.name ? "input-error" : ""}`}
          />
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
        </Form.Group>
      </div>
    </>
  );
}

export default DetailsForm;
