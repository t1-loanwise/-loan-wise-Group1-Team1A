import React, { useState } from "react";
import plus from "../assets/icons/plus.png";
import { IconContext } from "react-icons";
import { BiMinusCircle } from "react-icons/bi";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
// import { FaCirclePlus } from "react-icons/fa";

const Accordion = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <div className="faq-accordion">
        <div
          className="faq-question"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {title}
          {isOpen ? (
            <IconContext.Provider value={{ className: "minus" }}>
              <div>{isHover ? <HiMinusCircle /> : <BiMinusCircle />}</div>
            </IconContext.Provider>
          ) : (
            <div>
              {isHover ? (
                <IconContext.Provider value={{ className: "plus" }}>
                  <HiPlusCircle />
                </IconContext.Provider>
              ) : (
                <img src={plus} height="20" width="20" alt="plus" />
              )}
            </div>
          )}
        </div>

        {isOpen && <div className="faq-answer">{content}</div>}
      </div>
    </>
  );
};

export default Accordion;
