import React from "react";
import "./AppCalendar.css";
import Month from "../month/Month";
import { useTranslation } from "react-i18next";

const AppCalendar = () => {
  const {t}=useTranslation()
  const year = new Date().getFullYear();
  const holidays = [
    "2024-01-01",
    "2024-01-02",
    "2024-01-03",
    "2024-01-04",
    "2024-01-05",
    "2024-01-06",
    "2024-01-07",
    "2024-02-23",
    "2024-03-08",
    "2024-03-08",
    "2024-05-01",
    "2024-05-05",
    "2024-05-09",
    "2024-08-31",
    "2024-10-07",
  ];
  const months = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="appCalendar">
      <div className="circle s-circle-calendar2">
        <div className="circle-inner" />
      </div>
      <div className="calendar">
        <h1 className="year middle-blue poppins">{year} {t("Calendar")} </h1>
        <div className="months">
          {months.map((month) => (
            <Month key={month} year={year} month={month} holidays={holidays} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppCalendar;
