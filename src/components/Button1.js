import React from "react";

const Button1 = ({ text, style }) => {
  return (
    <button style={style} type="submit">
      {text}
    </button>
  );
};

export default Button1;
