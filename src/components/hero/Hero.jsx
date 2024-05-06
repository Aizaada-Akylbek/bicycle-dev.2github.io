import React from "react";
import "./Hero.css";
import CareerBtn from "../ui/careerBtn/CareerBtn";
import EmployeesBtn from "../ui/employeesBtn/EmployeesBtn";
import Slider from "../slider/Slider";
const Hero = () => {
  return (
    <div className="hero container dark-blue">
      <h1 className="main-title poppins">
        Technical innovation for{" "}
        <span className="middle-blue">dynamic growth</span>
      </h1>
      <p className="main-title-info">
        We are pleased to offer a wide range of high quality IT services.
      </p>
      <div className="hero-btns">
        <CareerBtn />
        <EmployeesBtn />
      </div>
    </div>
  );
};

export default Hero;
