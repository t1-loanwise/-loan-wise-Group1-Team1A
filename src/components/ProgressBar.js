import React, { useState } from "react";
import "../styles/ProgressBar.css";

function ProgressBar() {
  const [colorFiller, setColoFiller] = useState(0);
  return (
    <>
      <div className="progress_bar">
        <div className="progress_circle1"></div>
        <div className="progress_circle2"></div>
        <div className="progress_circle3"></div>
      </div>
    </>
  );
}

export default ProgressBar;
