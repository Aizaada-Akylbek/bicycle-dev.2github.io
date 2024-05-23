import React from "react";
import Team1 from "../../assets/team/Team.svg";
import Team2 from "../../assets/team/Team1.svg";
import Team3 from "../../assets/team/Team2.svg";
import Team4 from "../../assets/team/Team3.svg";
import { NavLink } from "react-router-dom";
import LD from "../../assets/logoLinks/LinkedIn.svg";
import "./Team.css";
import { useTranslation } from "react-i18next";

const Team = () => {
  const teamData = [
    { img: Team1, name: "", position: "", lnkdn:"https://www.linkedin.com/feed/" },
    { img: Team2, name: "", position: "", lnkdn:"https://www.linkedin.com/feed/" },
    { img: Team3, name: "", position: "", lnkdn:"https://www.linkedin.com/feed/" },
    { img: Team4, name: "", position: "", lnkdn:"https://www.linkedin.com/feed/" },
  ];
  const {t}=useTranslation()
  return (
    <div className="team container">
      <div className="team-block">
        <div className="main-title-second poppins dark-blue team-title">
          <span className="middle-blue">{t("Teamwork")}</span> {t("is the only way we work")}
        </div>
        <p>
     {t("At the heart of our company lies an exceptional team of talented individuals, each bringing unique expertise and passion to the table. From experienced developers crafting elegant code to visionary designers shaping user experiences, we are a cohesive unit dedicated to innovation and excellence.")}
        </p>
      </div>
      <div className="cards-team">
        {teamData.map((el, index) => (
          <div className="card-team" key={index}>
            <div className="image-container" key={el.img}>
              <img src={el.img} alt="user" className="img-team" />
              <div className="image-text">
                <h6>BDM and Founder</h6>
                <h3>Farkhat Bakhtiyar</h3>
                <NavLink to={el.lnkdn}>
                  <img src={LD} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
