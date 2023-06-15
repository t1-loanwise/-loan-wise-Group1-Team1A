import React from "react";
import Button2 from "./Button2";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card2 = ({ title, text, link, body }) => {
  return (
    <div className="card2_content">
      <LazyLoadImage src={link} alt={text} className="card2_image" />
      <h3>{title}</h3>
      <p>{body}</p>
      <Button2 text="Learn More" />
    </div>
  );
};

export default Card2;
