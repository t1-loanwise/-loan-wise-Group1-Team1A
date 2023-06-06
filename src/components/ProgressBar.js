import "../styles/NewPortfolio.css";

function ProgressBar({ barFiller, isFull, circleFiller1, circleFiller2 }) {
  return (
    <>
      <div className="progress_bar">
        <div
          className={`${
            barFiller
              ? isFull
                ? "filler active1"
                : "filler active2"
              : "filler"
          }`}
        ></div>
        <div className="progress_circle1"></div>
        <div
          className={`${
            circleFiller1 ? "progress_circle2 active" : "progress_circle2"
          }`}
        ></div>
        <div
          className={`${
            circleFiller2 ? "progress_circle3 active" : "progress_circle3"
          }`}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
