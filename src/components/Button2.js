import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Button2 = ({ text }) => {
  return (
    <>
      <button>
        {text}
        <BsArrowRightShort />
      </button>
    </>
  );
};

export default Button2;
