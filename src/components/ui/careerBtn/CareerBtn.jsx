import React from "react";
//img
import RightLine from "../../../assets/uiImg/Right.svg";
//css
import "./CareerBtn.css";
//router
import { NavLink } from "react-router-dom";
//components

const CareerBtn = () => {
  return (
    <div className="info-block">
      <div className="info-title">
        <h4>Careers</h4>
        <NavLink to="/careers">
          <img src={RightLine} alt="employees" />
        </NavLink>
      </div>
      <NavLink to="/careers">
        {" "}
        <button>More</button>
      </NavLink>
    </div>
  );
};

export default CareerBtn;
