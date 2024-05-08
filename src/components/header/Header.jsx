
import React, { useState, useEffect, useRef } from 'react';
import whiteLogo from '../../assets/logos/WhiteMainLogo.png';
import darkLogo from '../../assets/logos/MainLogo.svg';
import './Header.css'
import { NavLink } from 'react-router-dom';
import TranslateBtn from '../ui/translateBtn/TranslateBtn';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav >
            <div className={`navbar ${isOpen ? "open" : ""} container`} ref={navbarRef}>
                <div className="navbar-container">
                    <NavLink to="/">

                      <div className={`navbar__logo ${isOpen ? 'open' : ""}`}  />
                      <img  src={isOpen ? whiteLogo : darkLogo} alt="" />
                      </NavLink>
                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                        {
                            isOpen ? (
                                <div className="close-button" onClick={() => setIsOpen(false)}> <i className="bi bi-x"></i></div>
                            ) : (
                                <>
                                    <div className={'bar'} />
                                    <div className={'bar-2'} />
                                    <div className={'bar'} />
                                </>
                            )
                        }
                    </div>

                    <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                        <li onClick={()=>setIsOpen(false)}><NavLink to='/' >Company</NavLink></li>
                        <li onClick={()=>setIsOpen(false)}><NavLink to="/services" >Services</NavLink></li>
                        <li onClick={()=>setIsOpen(false)}><NavLink to="/industries">Industries</NavLink></li>
                        <li onClick={()=>setIsOpen(false)}><NavLink to="/partners">Partners</NavLink></li>
                        <li onClick={()=>setIsOpen(false)}><NavLink to="/careers">Careers</NavLink></li>
                        {/* <li><NavLink to="/insights">Insights</NavLink></li> */}
                        <li onClick={()=>setIsOpen(false)}><NavLink to="/calendar">Calendar</NavLink></li>
                        <li onClick={()=>setIsOpen(false)}><NavLink to="/employees">Employees</NavLink></li>
                        <li onClick={()=>setIsOpen(false)}><NavLink to="/contacts">Contacts</NavLink></li>
                        <li><TranslateBtn/></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
