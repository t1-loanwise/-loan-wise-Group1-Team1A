import React from "react";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../../components/AuthenticationMainText";
import AuthenticationImage from "../../../components/AuthenticationImage";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router";

const SetSecurityQuestion = () => {
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/verifyRegistration");
  };
  return (
    <div className="createAccount_parentContainer">
      <div className="onboardingImg">
        <AuthenticationImage />
      </div>
      <div className="createAccountContainer">
        <div className="loanwiselogo-container">
          <Logo />
        </div>
        <div className="createAccount">
          <AuthenticationMainText
            Title="Set Security Question"
            Body="To keep your account secured, create 2 security questions and answers"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="createAccount_form"
          >
            <div className="QuestionAnswer-Container">
              <div className="QuestionAnswer">
                <select name="question1">
                  <option className="selectedOption" selected disabled hidden>
                    Select question
                  </option>
                  <option>What is your Mother's maiden name?</option>
                  <option>Where did you grow up?</option>
                  <option>What school did you attend?</option>
                </select>
                <div className="inputDiv">
                  <input
                    type="text"
                    name="question1"
                    placeholder="Enter answer"
                    {...register("answer1", { required: true })}
                  />
                </div>
              </div>
              <div className="QuestionAnswer">
                <select name="question2">
                  <option className="selectedOption" selected disabled hidden>
                    Select question
                  </option>
                  <option>What is your Mother's maiden name?</option>
                  <option>Where did you grow up?</option>
                  <option>What school did you attend?</option>
                </select>
                <div className="inputDiv">
                  <input
                    type="text"
                    name="question2"
                    placeholder="Enter answer"
                    {...register("answer2", { required: true })}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="createAccountBtn">
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetSecurityQuestion;
