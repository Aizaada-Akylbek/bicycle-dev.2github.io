import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Company from '../../pages/Company'
import Services from '../../pages/Services'
import Industries from '../../pages/Industries'
import Partners from '../../pages/Partners'
import Careers from '../../pages/Careers'
import Calendar from '../../pages/Calendar'
import Contacts from '../../pages/Contacts'
import Employees from '../../pages/Employees'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Company/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/industries' element={<Industries/>}/>
            <Route path='/partners' element={<Partners/>}/>
            <Route path='/careers' element={<Careers/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout