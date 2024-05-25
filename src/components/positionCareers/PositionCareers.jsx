import React from 'react'
import './PositionCareers.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PositionCareers = () => {
  const {t}=useTranslation()
  return (
    <div className="position-careers">
    <span className="position-title">{t("Open positions")}</span>
    <div className="position-btns">
      <button>{t("Remote")}</button>
      <button>AWS</button>
      <button>GCP</button>
      <button>Postgres</button>
    </div>
    <h1 className='main-title-second poppins'>Fullstack {t("developer")}</h1>
    <p >
      {t("We are expanding our DevOps engineering department")}<br/> {t("and look forward to working with professionals in this field.")}
    </p>
   <NavLink  to="/positions"> <button className="main-btn">{t("Apply now")}</button></NavLink>
  </div>
  )
}

export default PositionCareers