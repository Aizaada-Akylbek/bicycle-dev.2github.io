import React from "react";
import { NavLink } from "react-router-dom";
import "./DevOperations.css";

const DevOperations = () => {
  return (
    <div className="development container">
      <h4 className="poppins">
        Do your development
        <br /> operations need a level-up?
      </h4>
      <p>Let's dive in to see the value Bicycle Dev can provide you</p>
      <NavLink to="/employees">
        {" "}
        <button className="main-btn">Contact our experts</button>
      </NavLink>
    </div>
  );
};

export default DevOperations;
