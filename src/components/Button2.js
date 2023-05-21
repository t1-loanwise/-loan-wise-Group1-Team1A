import React from "react";
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";

const Button2 = ({ text }) => {
  return (
    <>
      <button className="button2">
        {text}
        <IconContext.Provider value={{ className: "react-icon1" }}>
          <div>
            <BsArrowRightShort />
          </div>
        </IconContext.Provider>
      </button>
    </>
  );
};

export default Button2;
