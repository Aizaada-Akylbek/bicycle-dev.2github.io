import React from "react";
import CircleLogo from "../../assets/logos/CircleBicycle.svg";
import { NavLink } from "react-router-dom";
import "./ItOutstaffing.css";
import { useTranslation } from "react-i18next";

const ItOutstaffing = () => {
  const { t } = useTranslation();
  return (
    <div className="it-outstaffing">
      <div className="itoutstaffing-blocks-one">
        <div className="main-title-second poppins middle-blue">
          {t("IT-outstaffing")}
        </div>
        <p className="main-text-h3 dark-blue">
          {t(
            "Explore our IT outstaffing services, which includes both models of staff augmentation and dedicated teams.Whether for a few months or an extended period, we thoroughly recruit, onboard, and retain talented and skilled IT engineers for your business. We take over all intricacies related to work contract management, payroll, and taxation."
          )}
        </p>
        <button className="main-btn">
          <NavLink to="/contacts"> Contact us</NavLink>{" "}
        </button>
      </div>

      <div className="it-outstaffing-staff end">
        <img src={CircleLogo} alt="bicycleDev" />
        <h4 className="dark-blue">{t("IT staff augmentation")}</h4>
        <p>
          {t(
            "In the realm of staff augmentation, we support you to fortify and expand your in-house team with proficient technical specialists to efficiently tackle both short-term and long-term challenges in your business."
          )}
        </p>
      </div>

      <div className="it-outstaffing-staff center">
        <img src={CircleLogo} alt="bicycledev" />
        <h4 className="dark-blue">{t("Dedicated Team")}</h4>
        <p>
          {t(
            "Leveraging our expertise, we assemble a dedicated team geared towards executing extra prospective projects and tasks of your business."
          )}
        </p>
      </div>
    </div>
  );
};

export default ItOutstaffing;
