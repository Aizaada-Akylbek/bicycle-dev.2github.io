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

const PositionBenefits = () => {
    const empBenefitsData=[
        {img:notebook, title:'Flexible working hours'},
        {img:bag, title:'Onsite business trips'},
        {img:server, title:'English lessons'},
        {img:calendar, title:'Training budget'},
        {img:world, title:'Remote-first culture'},
        {img:exch, title:'Long-term projects'},
        {img:communication, title:'Paid conferences'},
        {img:team, title:'Team parties'},
      ]
  return (
    <div className='benefit'>
        <h2 className='poppins'>Employees benefits</h2>
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