import React from "react";
import arrow from '../assets/darrow.svg'
import "../styles/CalendarComponent.css"

const CalendarComponent = () => {
  return (
    <div>
      <div className="dateArea">
        <img src={arrow} alt="arrow icon" />
        <input className="calendarInput" type="date" value="date" />
      </div>
    </div>
  );
};

export default CalendarComponent;
