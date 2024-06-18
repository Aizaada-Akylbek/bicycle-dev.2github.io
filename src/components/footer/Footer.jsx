import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import FB from "../../assets/logoLinks/Facebook.svg";
import TW from "../../assets/logoLinks/Twitter.svg";
import IG from "../../assets/logoLinks/Instagram.svg";
import LN from "../../assets/logoLinks/LinkedIn.svg";
import YT from "../../assets/logoLinks/YouTube.svg";
import { useTranslation } from "react-i18next";
import FooterContact from "../footerContact/FooterContact";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  // const [formValues, setFormValues] = useState({
  //   user_name: "",
  //   user_phone: "",
  //   user_email: "",
  //   message: "",
  // });
  const { t } = useTranslation();

  const handleButtonClick = () => {
    if (inputValue.trim() === "") {
      setError(t("Please fill out this field"));
      return;
    }
    setError("");
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000); // Close modal after 3 seconds
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) {
      setError("");
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    emailjs
      .sendForm("service_nqcwraa", "template_5f6kff7", form.current, {
        publicKey: "kaXtgRdirwWqDEySs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsModalOpen(true);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
    setFormValues({
      user_name: "",
      user_phone: "",
      user_email: "",
      message: "",
    });
  };
  return (
    <footer>
      <div className="container">
        <div>
          <div className="footerBlocks">
            <div className="footerLogos">
              <div className="titleWork">
                {t("Interested in")} <br />
                {t("working together?")}
              </div>

              <FooterContact />

              {/* <div className="footerContact">
                <input
                  type="text"
                  placeholder={t("Email address")}
                  className={`footerInput ${error ? "invalid" : ""}`}
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button onClick={handleButtonClick} className="footerBtn">
                  <i className="bi bi-arrow-right"></i>
                </button> */}
              {/* <Modal isOpen={isModalOpen} /> */}
              {/* </div>
              {error && <div className="error">{error}</div>} */}
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
                <h2>{t("About")}</h2>
                <li>
                  <NavLink to="/">{t("Company")}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{t("Services")}</NavLink>
                </li>
                <li>
                  <NavLink to="/industries">{t("Industries")}</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">{t("Partners")}</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">{t("Careers")}</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">{t("Contacts")}</NavLink>
                </li>
              </ul>
              <ul className="footerNavList">
                <h2>{t("Career")}</h2>
                <li>
                  <NavLink to="/">{t("Company")}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{t("Services")}</NavLink>
                </li>
                <li>
                  <NavLink to="/industries">{t("Industries")}</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">{t("Partners")}</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">{t("Careers")}</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">{t("Contacts")}</NavLink>
                </li>
              </ul>
              <ul className="footerNavList">
                <h2>{t("Career")}</h2>
                <li>
                  <NavLink to="/">{t("Company")}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{t("Services")}</NavLink>
                </li>
                <li>
                  <NavLink to="/industries">{t("Industries")}</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">{t("Partners")}</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">{t("Careers")}</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">{t("Contacts")}</NavLink>
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

// Footer.js
// import React, { useState, useRef } from "react";
// import { NavLink } from "react-router-dom";
// // import { sendEmail } from "./emailUtils";
// import { sendEmail } from "../../utils/email/emailUtils";
// import "./Footer.css";
// import FB from "../../assets/logoLinks/Facebook.svg";
// import TW from "../../assets/logoLinks/Twitter.svg";
// import IG from "../../assets/logoLinks/Instagram.svg";
// import LN from "../../assets/logoLinks/LinkedIn.svg";
// import YT from "../../assets/logoLinks/YouTube.svg";
// import { useTranslation } from "react-i18next";

// const Modal = ({ isOpen }) => {
//   const { t } = useTranslation();
//   if (!isOpen) {
//     return null;
//   }

//   return <div className="modal-overlay">{t("Your message has been sent")}</div>;
// };

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const form = useRef();
//   const { t } = useTranslation();

//   const validate = (values) => {
//     let errors = {};
//     if (!values.user_email) {
//       errors.user_email = t("Please fill out this field");
//     }
//     return errors;
//   };

//   const handleButtonClick = (e) => {
//     e.preventDefault();
//     const formValues = { user_email: inputValue };
//     sendEmail(form, formValues, setIsModalOpen, setError, validate);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     if (error) {
//       setError("");
//     }
//   };

//   return (
//     <footer>
//       <div className="container">
//         <div>
//           <div className="footerBlocks">
//             <div className="footerLogos">
//               <div className="titleWork">
//                 {t("Interested in")} <br />
//                 {t("working together?")}
//               </div>
//               <div className="footerContact">
//                 <form ref={form} onSubmit={handleButtonClick}>
//                   <input
//                     type="text"
//                     placeholder={t("Email address")}
//                     className={`footerInput ${error ? "invalid" : ""}`}
//                     value={inputValue}
//                     onChange={handleInputChange}
//                   />
//                   <button type="submit" className="footerBtn">
//                     <i className="bi bi-arrow-right"></i>
//                  </button>
//                 <Modal isOpen={isModalOpen} />
//                 </form>

//                  {error && <div className="error">{error}</div>}
//               </div>
//                  </div>
//                  </div>
//                  </div>

// </div>
// </footer>
//   )}

//   export default Footer
