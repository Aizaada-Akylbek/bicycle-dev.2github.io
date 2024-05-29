import React from "react";
import RightLine from "../../../assets/uiImg/Right.svg";
import "../careerBtn/CareerBtn.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EmployeesBtn = () => {
  const { t } = useTranslation();
  return (
    <div className="info-block">
      <div className="info-title">
        <h4>{t("Our employees")}</h4>
        <NavLink to="/careers">
          <img src={RightLine} alt="employees" />
        </NavLink>
      </div>
      <NavLink to="/employees">
        {" "}
        <button>{t("More")}</button>
      </NavLink>
    </div>
  );
};

export default EmployeesBtn;
