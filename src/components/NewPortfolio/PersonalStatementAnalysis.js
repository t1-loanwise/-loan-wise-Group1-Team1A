import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../../styles/NewPortfolio.css";

function PersonalStatementAnalysis() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [moreFields, setMoreFields] = useState(false);

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
        console.log(value);
        console.log(value[0].type);
        return (
          value[0] && value[0].type && "application/pdf".includes(value[0].type)
        );
      }),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const handleAddMoreFields = () => {
    setMoreFields(moreFields + 1);
  };
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
            <div className="errorMsg">{errors.fullName?.message}</div>
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
            <div className="errorMsg">{errors.bankName?.message}</div>
          </div>
          <div>
            <div>
              <label className="input_title">From</label>
              <div>
                <input
                  name="fromDate"
                  type="date"
                  placeholder="Enter answer"
                  className="input_field"
                  {...register("fromDate")}
                />
              </div>
              <div className="errorMsg">{errors.fromDate?.message}</div>
            </div>
            <div>
              <label className="input_title">To</label>
              <div>
                <input
                  name="toDate"
                  type="date"
                  placeholder="Enter answer"
                  {...register("toDate")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.toDate?.message}</div>
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
          <p className="auto_fill">Upload PDF format</p>
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
              e.g NIN slip, driver’s license or any other form of identification
            </p>
            <div>
              <button className="form_btn2" onClick={handleAddMoreFields}>
                +
              </button>
              <div className="hideMoreDocument showMoreDocument">
                <label className="input_title">
                  Other Supporting Documents
                </label>
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
          </div>
          <button className="form_btn">Analyze</button>
        </div>
      </form>
    </>
  );
}

export default PersonalStatementAnalysis;
