import React from "react";

const Image = ({ link, text, style }) => {
  return (
    <>
      <img src={link} alt={text} style={style} />
    </>
  );
};

export default Image;
