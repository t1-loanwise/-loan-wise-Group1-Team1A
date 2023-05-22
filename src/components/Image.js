import React from "react";

const Image = ({ link, text }) => {
  return (
    <>
      <img src={link} alt={text} />
    </>
  );
};

export default Image;
