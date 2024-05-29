import React from 'react'
import './PositionBenefits.css'
import notebook from '../../assets/benefitImgs/notebook.svg'
import bag from '../../assets/benefitImgs/bag.svg'
import server from '../../assets/benefitImgs/server.svg'
import calendar from '../../assets/benefitImgs/calendar.svg'
import world from '../../assets/benefitImgs/world.svg'
import exch from '../../assets/benefitImgs/exchangeBackend.svg'
import communication from '../../assets/benefitImgs/communication.svg'
import team from '../../assets/benefitImgs/team.svg'
import { useTranslation } from 'react-i18next'

const PositionBenefits = () => {
  const {t}=useTranslation()
    const empBenefitsData=[
        {img:notebook, title:t('Flexible working hours')},
        {img:bag, title:t("Onsite business trips")},
        {img:server, title:t("English lessons")},
        {img:calendar, title:t("Training budget")},
        {img:world, title:t("Remote-first culture")},
        {img:exch, title:t("Long-term projects")},
        {img:communication, title:t("Paid conferences")},
        {img:team, title:t("Team parties")},
      ]
  return (
    <div className='benefit'>
        <h2 className='poppins'>{t("Employees benefits")}</h2>
        <div className="benefit-cards">
         {empBenefitsData.map(el=>(
           <div className="benefit-card" key={el.title}>
           <img src={el.img} alt={el.title} />
           <h4>{el.title}</h4>
         </div>
         ))}
        </div>

      </div>
  )
}

export default PositionBenefits