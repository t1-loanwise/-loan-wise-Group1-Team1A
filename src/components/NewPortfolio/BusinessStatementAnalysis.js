import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/NewPortfolio.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function BusinessStatementAnalysis() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter full name"),
    bankName: Yup.string().required("Please enter bank name"),
    fromDate: Yup.date().required("This field is required"),
    toDate: Yup.date().required("This field is required"),
    bankStatement: Yup.mixed()
      .test("required", "You need to provide a file", (value) => {
        return value && value.length;
      })
      .test("fileSize", "The file is too large", (value) => {
        console.log(value[0]);
        return value && value[0] && value[0].size <= 2000000;
        // 200KB
      })
      .test("fileFormat", "Unsupported File Format", (value) => {
        console.log(value[0].type);
        return (
          value && value[0].type && "application/pdf".includes(value[0].type)
        );
      }),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/analysisResult");
  };
  return (
    <>
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_container">
          <h3>Bank Statement Details</h3>
          <div onSubmit={handleSubmit}>
            <label className="input_title">Bank Statement Name</label>
            <div>
              <input
                name="fullName"
                type="text"
                placeholder="Enter full name"
                {...register("fullName")}
                className="input_field"
              />
            </div>
            <div className="ErrorMsg">{errors.fullName?.message}</div>
          </div>
          <div>
            <label className="input_title">Bank Name</label>
            <div>
              <input
                name="bankName"
                type="text"
                placeholder="Enter bank name"
                className="input_field"
                {...register("bankName")}
              />
            </div>
            <div className="ErrorMsg">{errors.bankName?.message}</div>
          </div>
          <div>
            <div>
              <label className="input_title">From</label>
              <div>
                <input
                  name="fromDate"
                  type="date"
                  placeholder="Enter number"
                  className="input_field"
                  {...register("fromDate")}
                />
              </div>
              <div className="ErrorMsg">{errors.fromDate?.message}</div>
            </div>
            <div>
              <label className="input_title">To</label>
              <div>
                <input
                  name="toDate"
                  type="date"
                  placeholder="Enter number"
                  {...register("toDate")}
                  className="input_field"
                />
              </div>
              <div className="ErrorMsg">{errors.toDate?.message}</div>
            </div>
          </div>
          <div>
            <label className="input_title">Upload Bank Statement</label>
            <div>
              <input
                name="bankStatement"
                type="file"
                accept="application/pdf"
                placeholder="Upload"
                {...register("bankStatement")}
                className="input_field"
              />
            </div>
            <div className="errorMsg">{errors.bankStatement?.message}</div>
          </div>
          <p className="auto_fill">Upload Company’s Account Statement</p>
          <div>
            <label className="input_title">Other Supporting Documents</label>
            <div>
              <input
                name="supportingDocument"
                type="file"
                accept="application/pdf"
                placeholder="Upload"
                {...register("supportingDocument")}
                className="input_field"
              />
            </div>
          </div>
          <div>
            <p className="auto_fill">
              e.g CAC Registration, Business Permits etc
            </p>
            <button className="form_btn2">+</button>
          </div>
          <button className="form_btn">Analyze</button>
        </div>
      </form>
    </>
  );
}

export default BusinessStatementAnalysis;
