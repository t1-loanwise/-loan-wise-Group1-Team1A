import React from "react";
import "../styles/ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <div className="Toggle">
      <label className="switch">
        <input type="Checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
