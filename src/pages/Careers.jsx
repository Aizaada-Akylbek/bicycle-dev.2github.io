import React from "react";
import "../styles/Careers.css";
import CareersCards from "../components/careersCards/CareersCards";
import { NavLink } from "react-router-dom";
import PositionCareers from "../components/positionCareers/PositionCareers";
import DevOperations from "../components/ui/devOperations/DevOperations";

const Careers = () => {
  return (
    <div className="container">
      <div className="hero-careers">
        <h2 className="main-title poppins">
          Career at <br /> Bycycle Dev
        </h2>
        <p className="main-title-info">
          Step into our multicultural environment filled with creative and
          driven individuals. 
        </p>
        <NavLink to="/positions">
          {" "}
          <button className="main-btn">Label</button>
        </NavLink>
      </div>
      <CareersCards />
      <PositionCareers />
      <DevOperations />
    </div>
  );
};

export default Careers;
