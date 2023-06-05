import React from "react";
import Button1 from "./Button1";
import FillButton from "./FillButton";

const PrivacyForm = () => {
  return (
    <form>
      <div className="setting-form">
        <label>Previous Password</label> <input type="text" />
      </div>
      <div className="setting-form">
        <label>
          New Password
          <span>
            Password must contain at least 6 characters including numbers
          </span>
        </label>
        <input type="text" />
      </div>
      <div className="setting-form">
        <label>Two factor authentication</label>
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="setting-form">
        <div className="col-2 ">
          <label>Change security questions</label>
        </div>
        <div className="col-2">
          <div className="setting-form-block full-width mbottom-16">
            <select placeholder="Select Question">
              <option>Select Question</option>
              <option>Question1</option>
              <option>Question2</option>
            </select>
            <input type="text" />
          </div>
          <div className="setting-form-block full-width">
            <select placeholder="Select Question">
              <option>Select Question</option>
              <option>Question1</option>
              <option>Question1</option>
            </select>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="setting-form">
        <label>Use security question for sign-in</label>
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="setting-form justify-left">
        <div>
          <FillButton label='Save Changes' />
        </div>
      </div>
    </form>
  );
};

export default PrivacyForm;
