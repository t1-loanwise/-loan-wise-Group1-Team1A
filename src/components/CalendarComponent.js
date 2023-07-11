import React, { useRef, useState } from "react";
import arrow from '../assets/darrow.svg';
import "../styles/CalendarComponent.css";

const CalendarComponent = ({onDateChange}) => {
  const calendarInputRef = useRef(null);
  const [showCalendarPicker, setShowCalendarPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("date");

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    onDateChange(date)
  };

  const handleArrowClick = () => {
    setShowCalendarPicker(true);
    calendarInputRef.current.focus();
  };

  const handleBlur = () => {
    setShowCalendarPicker(false);
  };

  return (
    <div>
      <div className={`dateArea ${showCalendarPicker ? "active" : ""}`} onBlur={handleBlur}>
        <img
          src={arrow}
          alt="arrow icon"
          onClick={handleArrowClick}
          className="arrowIcon"
        />
        <input
          ref={calendarInputRef}
          className="calendarInput"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
