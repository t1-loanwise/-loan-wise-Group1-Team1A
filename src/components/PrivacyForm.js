import React from "react";

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
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
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
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default PrivacyForm;
