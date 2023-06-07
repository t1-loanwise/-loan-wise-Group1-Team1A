import ProgressBar from "../../components/ProgressBar";
import DetailsForm from "../../components/DetailsForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoanInfo from "../../components/LoanInfo";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function PersonalDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [barFiller, setBarFiller] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [circleFiller1, setCircleFiller1] = useState(false);
  const [circleFiller2, setCircleFiller2] = useState(false);
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const validationSchema = Yup.object().shape({
    jobTitle: Yup.string().required(true),
    employmentLength: Yup.string().required(true),
    currentSalary: Yup.string().required("This field is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    setBarFiller(true);
    setIsFull(true);
    setCircleFiller1(true);
    setCircleFiller2(false);
    updateUser(data);
    navigate("/personalStatement");
  };

  return (
    <>
      <ProgressBar
        barFiller={barFiller}
        isFull={isFull}
        circleFiller1={circleFiller1}
        circleFiller2={circleFiller2}
      />
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_container">
          <DetailsForm
            user={user}
            Title={"Personal Information"}
            text={"Full Name"}
            address={"Residential address"}
            date={"Date of Birth"}
            number={"National Identity Number"}
            subject={"Current Employer"}
          />
          <div>
            <label className="input_title">Job Title</label>
            <div>
              <input
                name="jobTitle"
                type="text"
                placeholder="Enter answer"
                {...register("jobTitle")}
                className="input_field"
              />
            </div>
            <div className="ErrorMsg">{errors.jobTitle?.message}</div>
          </div>
          <div>
            <div>
              <label className="input_title">Length of Employment</label>
              <div>
                <input
                  name="employmentLength"
                  type="text"
                  placeholder="Enter answer"
                  {...register("employmentLength")}
                  className="input_field"
                />
              </div>
              <div className="ErrorMsg">{errors.employmentLength?.message}</div>
            </div>
            <div>
              <label className="input_title">Current Salary</label>
              <div>
                <input
                  name="currentSalary"
                  type="text"
                  placeholder="Enter answer"
                  {...register("currentSalary")}
                  className="input_field"
                />
              </div>
              <div className="ErrorMsg">{errors.jobTitle?.message}</div>
            </div>
          </div>
          <p className="auto_fill">Auto-fill from loan applications</p>
          <LoanInfo />
          <p className="auto_fill">Auto-fill from loan applications</p>
          <button className="form_btn">Proceed</button>
        </div>
      </form>
    </>
  );
}

export default PersonalDetails;
