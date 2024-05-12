import React, { useRef, useEffect } from "react";
import "../styles/Positions.css";
import InfoPositions from "../components/infoPositions/InfoPositions";
import PositionBenefits from "../components/positionBenefits/PositionBenefits";
import PositionForm from "../components/positionForm/PositionForm";

const Positions = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container">
      <div className="main-positions">
        <b>Open positions</b>
        <div className="positions-btns">
          <button>Remote</button>
          <button>AWS</button>
          <button>GCP</button>
          <button>Postgres</button>
        </div>
        <h1 className="main-title poppins ">Fullstack developer</h1>
        <p className="main-text-h3">
          We are expanding our DevOps engineering department and look forward to
          working with professionals in this field.
        </p>
        <button className="main-btn" onClick={handleClick}>
          Apply now
        </button>
      </div>
      <InfoPositions />
      <PositionBenefits />
      <PositionForm ref={ref} />
    </div>
  );
};

export default Positions;
