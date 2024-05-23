import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import FB from "../../assets/logoLinks/Facebook.svg";
import TW from "../../assets/logoLinks/Twitter.svg";
import IG from "../../assets/logoLinks/Instagram.svg";
import LN from "../../assets/logoLinks/LinkedIn.svg";
import YT from "../../assets/logoLinks/YouTube.svg";
import { useTranslation } from "react-i18next";
const Modal = ({ isOpen }) => {
  const {t}=useTranslation()
  if (!isOpen) {
    return null;
  }

  return <div className="modal-overlay">{t('Your message has been sent')}</div>;
};
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {t}=useTranslation()

  const handleButtonClick = () => {
    setIsModalOpen(true);
    console.log("tttt");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000); // Close modal after 3 seconds
  };
  return (
    <footer>
      <div className="container">
        <div>
          <div className="footerBlocks">
            <div className="footerLogos">
              <div className="titleWork">
                {t('Interested in')} <br />
                {t('working together?')}
              </div>
              <div className="footerContact">
                <input
                  type="text"
                  placeholder={t("Email address")}
                  className="footerInput"
                />
                <button onClick={handleButtonClick} className="footerBtn">
                  <i className="bi bi-arrow-right"></i>
                </button>
                <Modal isOpen={isModalOpen} />
              </div>
              <div className="logoLinks">
                <img src={FB} alt="" />
                <img src={TW} alt="" />
                <img src={IG} alt="" />
                <img src={LN} alt="" />
                <img src={YT} alt="" />
              </div>
            </div>
            <div className="footerNav">
              <ul className="footerNavList">
                <h2>{t('About')}</h2>
                <li>
                  <NavLink to="/">{t('Company')}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{t('Services')}</NavLink>
                </li>
                <li>
                  <NavLink to="/industries">{t('Industries')}</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">{t('Partners')}</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">{t('Careers')}</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">{t('Contacts')}</NavLink>
                </li>
              </ul>
              <ul className="footerNavList">
                <h2>{t('Career')}</h2>
                <li>
                  <NavLink to="/">{t('Company')}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{t('Services')}</NavLink>
                </li>
                <li>
                  <NavLink to="/industries">{t('Industries')}</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">{t('Partners')}</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">{t('Careers')}</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">{t('Contacts')}</NavLink>
                </li>
              </ul>
              <ul className="footerNavList">
                <h2>{t('Career')}</h2>
                <li>
                  <NavLink to="/">{t('Company')}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{t('Services')}</NavLink>
                </li>
                <li>
                  <NavLink to="/industries">{t('Industries')}</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">{t('Partners')}</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">{t('Careers')}</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">{t('Contacts')}</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            Copyright © 2024. Bicycle Dev. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
