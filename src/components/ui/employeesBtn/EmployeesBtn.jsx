import React from 'react'
import RightLine from '../../../assets/uiImg/Right.svg'
import '../careerBtn/CareerBtn.css'
import { NavLink } from 'react-router-dom'

const EmployeesBtn = () => {
  return (
    <div className="info-block">
      <div className="info-title">
        <h4>Our employees</h4>
        <NavLink to="/careers">
          <img src={RightLine} alt="employees" />
        </NavLink>
      </div>
      <NavLink to="/employees">
        {" "}
        <button>More</button>
      </NavLink>
    </div>
  )
}

export default EmployeesBtn