import React, { useState } from "react";
import DatePicker from "react-date-picker";

function Calendar() {
  const [dateValue, onDateChange] = useState(new Date());

  return (
    <>
      <DatePicker
        onChange={onDateChange}
        value={dateValue}
        autoFocus={true}
        className="date-picker"
        closeCalendar={false}
      />
    </>
  );
}

export default Calendar;
