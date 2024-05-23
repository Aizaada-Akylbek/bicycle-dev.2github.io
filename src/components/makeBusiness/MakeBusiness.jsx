import React from "react";
import "./MakeBusiness.css";
//img
import macbook from "../../assets/makeBusiness/mackbook.png";
import notebook from "../../assets/makeBusiness/oyourbusiness.png";
import { useTranslation } from "react-i18next";

const MakeBusiness = () => {
  const { t } = useTranslation();
  return (
    <div className="make-your-banner">
      <div className="container">
        <div className="make-your-banner-text poppins">
          {" "}
          <span className="make-span">
            {t("Make")}
            <img src={macbook} alt="macbook" className="macbook" />
          </span>
          <br />
          {t("your")}{" "}
          <span>
            <img className="notebook" src={notebook} alt="makeYour" />
          </span>
          {t("business")}
          <br />
          {t("effectual!")}
        </div>
      </div>
    </div>
  );
};

export default MakeBusiness;
