import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function BankDetails(props) {
  const [inputFields, setInputFields] = useState([
    {
      document: "",
    },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputFields];
    list.splice(index, 1);
    setInputFields(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputFields([...inputFields, { document: "" }]);
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(true),
    date: Yup.date().required("Required"),
    document: Yup.mixed()
      .test("required", "You need to provide a file", (value) => {
        return value && value.length;
      })
      .test("fileSize", "The file is too large", (value, context) => {
        return value && value[0] && value[0].size <= 200000;
        // 200KB
      })
      .test("type", "We only support pdf", function (value) {
        return value && value[0] && value[0].type === "document/pdf";
      }),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);
  return (
    <>
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
            name="fullName"
            type="text"
            placeholder="Enter full name"
            className="input_field"
            {...register("fullName")}
          />
        </div>
        <div className="ErrorMsg">{errors.fullName?.message}</div>
      </div>
      <div>
        <div>
          <label className="input_title">From</label>
          <div>
            <input
              name="date"
              type="date"
              placeholder="Enter number"
              className="input_field"
              {...register("date")}
            />
          </div>
          <div className="ErrorMsg">{errors.dob?.message}</div>
        </div>
        <div>
          <label className="input_title">To</label>
          <div>
            <input
              name="date"
              type="date"
              placeholder="Enter number"
              {...register("date")}
              className="input_field"
            />
          </div>
          <div className="ErrorMsg">{errors.dob?.message}</div>
        </div>
      </div>
      <div>
        <label className="input_title">Upload Bank Statement</label>
        <div>
          <input
            name="document"
            type="file"
            placeholder="Upload"
            {...register("document")}
            className="input_field"
          />
        </div>
        <div className="ErrorMsg">{errors.document?.message}</div>
      </div>
      <p className="auto_fill">{props.text1}</p>
      <div>
        <label className="input_title">Other Supporting Documents</label>
        <div>
          <input
            name="document"
            type="file"
            placeholder="Upload"
            className="input_field"
          />
        </div>
        <div className="ErrorMsg">{errors.document?.message}</div>
      </div>
      <div>
        <p className="auto_fill">{props.text2}</p>
        <button className="form_btn2" onClick={handleAddClick}>
          +
        </button>
      </div>
    </>
  );
}

export default BankDetails;
