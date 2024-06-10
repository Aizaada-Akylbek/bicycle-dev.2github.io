import React from "react";
//img
import RightLine from "../../../assets/uiImg/Right.svg";
//css
import "./CareerBtn.css";
//router
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
//components

const CareerBtn = () => {
  const { t } = useTranslation();
  return (
    <div className="info-block">
      <div className="info-title">
        <h4>{t("Careers")}</h4>
        <NavLink to="/careers">
          <img src={RightLine} alt="employees" />
        </NavLink>
      </div>
      <NavLink to="/careers">
        {" "}
        <button>{t("More")}</button>
      </NavLink>
    </div>
  );
};

export default CareerBtn;
