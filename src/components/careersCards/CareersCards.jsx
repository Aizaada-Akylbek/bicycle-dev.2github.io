import React, { useState } from "react";
import "./CareersCards.css";
import { useTranslation } from "react-i18next";

const CareersCards = () => {
  const {t}=useTranslation()
  const cardText=[
    {
      num: "02",
      title: t("Collaborative teamwork and supportive working culture "),
      descr:
        t("We believe in the power of team effort and encourage openness, respect and collaboration."),
    },
    {
      num: "03",
      title: t("Hybrid and flexible working models"),
      descr:
        t("We are committed to creating a work environment that promotes the growth and success of every employee"),
    },
    {
      num: "04",
      title: t("Growth and development"),
      descr:
        t("Capacity development opportunities (mentoring, on-the-job learning, ICT trainings, English and German courses)"),
    },
    {
      num: "05",
      title: t("Attractive and competitive compensation"),
      descr:
        t("We offer attractive and competitive wages, valuing the contribution of each employee to the success of the company."),
    },
  ]

  return (
    <div className="careers-cards dark-blue">
      <div className="bg-medium bg-careers-cards"/>
      <div className="career-card big">
        <h3 className="poppins middle-blue ">01</h3>
        <h4>{t("Team workshops and events")}</h4>
        <p>
        {t("Share experiences, deepen your knowledge and create new connections in a friendly and supportive environment. Opportunity for learning, growth and development for you!")}
        </p>
      </div>
      {cardText.map((el, index) => (
        <div className="career-card small">
          <h3 className="poppins middle-blue">{el.num}</h3>
          <h4>{el.title}</h4>
          <p>{el.descr}</p>
        </div>
      ))}
    </div>
  );
};

export default CareersCards;
