import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import Logo from "../../assets/Vector.svg";
import { useNavigate } from "react-router";
import Onboarding from "../../components/Onboarding";
import axios from "axios";

const SetSecurityQuestion = ({ token }) => {
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
    getValues,
  } = useForm();
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(token);
  const onSubmit = async () => {
    try {
      const response = await axios.put(
        `https://loanwise.onrender.com/api/${token}/security-question`,
        {
          securityQuestions: [
            {
              question: getValues("question1"),
              answer: getValues("answer1"),
            },
            {
              question: getValues("question2"),
              answer: getValues("answer2"),
            },
          ],
        }
      );
      setQuestions(response.data);
      setError(false);
      console.log(response.data);
      navigate("/success");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="createAccount_parentContainer">
      <Onboarding />
      <div className="createAccountContainer">
        <div className="loanwiselogo-container">
          <img src={Logo} alt="Loanwise Logo" class="Logo-loanwise2" />
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
            {error && (
              <span className="registered-user">Please, try again.</span>
            )}
            <div className="QuestionAnswer-Container">
              <div className="QuestionAnswer">
                <select
                  name="question1"
                  {...register("question1", { required: "true" })}
                >
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
                    name="answer1"
                    placeholder="Enter answer"
                    {...register("answer1", { required: "true" })}
                  />
                </div>
              </div>
              <div className="QuestionAnswer">
                <select
                  name="question2"
                  {...register("question2", { required: "true" })}
                >
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
                    name="answer2"
                    placeholder="Enter answer"
                    {...register("answer2", { required: "true" })}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="createAccountBtn">
              {isSubmitting ? (
                <i className="fa fa-circle-o-notch fa-spin"></i>
              ) : (
                "Proceed"
              )}
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SetSecurityQuestion;
