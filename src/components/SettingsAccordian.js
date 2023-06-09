import React from "react";
import PredictiveModel from "./PredictiveModel";
import GreaterThan from "../assets/icons/Vector-accor.svg";
import PredictiveContent from "./PredictiveContent";

import "../styles/AccordianContent.css";
import { useState } from "react";
import ArrowDown from "../assets/icons/Vector-accor2.svg";
import NewModel from "./NewModel";

const SettingsAccordian = () => {
  const accordionData = {
    title: "Predictive Model",
    body: "Set and edit new or old load default analysis rule",
    content: <PredictiveContent />,
  };
  const { title, body, content } = accordionData;
  //opening and closing the accordion
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="accordion-text">
              <div className="title">{title}</div>
              <div className="body">{body}</div>
            </div>
            <div className="close-open-icon">
              {isActive ? (
                <img src={ArrowDown} alt="close" width="18px" />
              ) : (
                <img src={GreaterThan} alt="open" width="12px" />
              )}
            </div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default SettingsAccordian;
