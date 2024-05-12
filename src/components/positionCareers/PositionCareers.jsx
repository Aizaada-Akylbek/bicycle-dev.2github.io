import React from 'react'
import './PositionCareers.css'
import { NavLink } from 'react-router-dom'

const PositionCareers = () => {
  return (
    <div className="position-careers">
    <span className="position-title">Open positions</span>
    <div className="position-btns">
      <button>Remote</button>
      <button>AWS</button>
      <button>GCP</button>
      <button>Postgres</button>
    </div>
    <h1 className='main-title-second poppins'>Fullstack developer</h1>
    <p >
      We are expanding our DevOps engineering department<br/> and look forward to
      working with professionals in this field.
    </p>
   <NavLink  to="/fullstack"> <button className="main-btn">Apply now</button></NavLink>
  </div>
  )
}

export default PositionCareers