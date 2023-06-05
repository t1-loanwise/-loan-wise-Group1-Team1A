import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

function DetailsForm(props) {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: props.user.full_name,
      address: props.user.address,
      email: props.user.email,
      phone_number: props.user.phone_number,
      d_o_b: props.user.d_o_b,
      number: props.user.number,
      name: props.user.name,
    },
  });

  return (
    <>
      <div className="form_container">
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
        <Form.Group controlId="phone">
          <div>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              placeholder="Enter phone number"
              autoComplete="off"
              {...register("phone_number", {
                required: "Phone number is required.",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Invalid phone number",
                },
              })}
              className={`${errors.phone_number ? "input-error" : ""}`}
            />
            {errors.phone_number && (
              <p className="errorMsg">{errors.phone_number.message}</p>
            )}
          </div>
          <div>
            <Form.Label>Alternative Phone number</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              autoComplete="off"
              {...register("phone_number", {
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Invalid phone number",
                },
              })}
              className={`${errors.phone_number ? "input-error" : ""}`}
            />
            {errors.phone_number && (
              <p className="errorMsg">{errors.phone_number.message}</p>
            )}
          </div>
        </Form.Group>
        <Form.Group controlId="D.O.B">
          <Form.Label>{props.date}</Form.Label>
          <Form.Control
            type="date"
            name="d.o.b"
            placeholder="DD/MM/YY"
            autoComplete="off"
            {...register("d_o_b", {
              required: "Date is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Please enter a valid date",
              },
            })}
            className={`${errors.d_o_b ? "input-error" : ""}`}
          />
          {errors.d_o_b && <p className="errorMsg">{errors.d_o_b.message}</p>}
        </Form.Group>
        <Form.Group controlId="number">
          <Form.Label>{props.number}</Form.Label>
          <Form.Control
            type="number"
            name="number"
            placeholder="Enter NIN"
            autoComplete="off"
            {...register("number", {
              required: "Number is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Please enter a valid number",
              },
            })}
            className={`${errors.number ? "input-error" : ""}`}
          />
          {errors.number && <p className="errorMsg">{errors.number.message}</p>}
        </Form.Group>
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
