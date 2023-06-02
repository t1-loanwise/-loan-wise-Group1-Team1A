import React, { useState } from "react";
import plus from "../assets/icons/plus.png";
import { IconContext } from "react-icons";
import { BiMinusCircle } from "react-icons/bi";

const Accordion = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="faq-accordion">
        <div onClick={handleClick}>
          {title}
          {isOpen ? (
            <IconContext.Provider value={{ className: "minus" }}>
              <div>
                <BiMinusCircle />
              </div>
            </IconContext.Provider>
          ) : (
            <div>
              <img
                src={plus}
                height="20"
                width="20"
                alt="plus"
                // className="plus"
              />
            </div>
          )}
        </div>

        {isOpen && <div className="faq-answer">{content}</div>}
      </div>
    </>
  );
};

export default Accordion;
