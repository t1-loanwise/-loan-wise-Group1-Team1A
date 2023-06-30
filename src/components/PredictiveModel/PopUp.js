import React from "react";
import Close from "../../assets/icons/close-circle.svg";
import "../../styles/Popup.css";

const PopUp = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-pop-btn"
          onClick={() => props.setTrigger(false)}
        >
          <img src={Close} alt="close" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
