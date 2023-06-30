import React from 'react'
import { useForm } from 'react-hook-form'
import Onboarding from '../../components/Onboarding';
import Logo from '../../components/Logo';
import AuthenticationMainText from '../../components/AuthenticationMainText';


const SelectRole = () => {
  const{register, formState: {isSubmitting},handleSubmit,getValues} = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data)
  }
  return (
    <div className="verify_container">
      <Onboarding />
      <div className="reset_head_content">
        <div className="loanwiselogo-container">
          <Logo />
        </div>
        <div className="reset_body_content">
          <AuthenticationMainText
            Title="Select your Role"
            Body="Please select a profession that best describes you"
          />
          <form
            onsubmit={handleSubmit(onSubmit)}
            className="createAccount_form"
          >
            <div className="QuestionAnswer-Container">
              <div className="QuestionAnswer">
                <label htmlFor="professionalRole">Select Role</label>
                <select
                  name="professionalRole"
                  {...register("professionalRole", { required: "true" })}
                >
                  <option className="selectedOption" selected disabled hidden>
                    Select a role
                  </option>
                  <option>Risk Analyst</option>
                  <option>Credit Analyst</option>
                  <option>What school did you attend?</option>
                </select>
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
      </div>
    </div>
  );
}

export default SelectRole