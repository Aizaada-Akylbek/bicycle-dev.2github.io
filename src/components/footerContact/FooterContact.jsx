import React, { useState } from "react";
// import "./FooterContact.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "../footer/Footer.css";
const Modal = ({ isOpen }) => {
  const { t } = useTranslation();
  if (!isOpen) {
    return null;
  }

  return <div className="modal-overlay">{t("Your message has been sent")}</div>;
};
const FooterContact = () => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!inputValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      setError(t("Please fill out this field correctly"));
      return;
    }
    setError("");
    setIsModalOpen(true);
    console.log("tttt");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000); // Close modal after 3 seconds

    emailjs
      .sendForm(
        "service_nqcwraa",
        "template_5f6kff7",
        formRef.current,
        "kaXtgRdirwWqDEySs"
      )
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

    setInputValue("");
  };

  return (
    <div>
      <form ref={formRef} className="footerContact">
        <input
          type="text"
          placeholder={t("Email address")}
          className={`footerInput ${error ? "invalid" : ""}`}
          value={inputValue}
          onChange={handleInputChange}
          name="user_email"
        />
        <button onClick={handleButtonClick} className="footerBtn">
          <i className="bi bi-arrow-right"></i>
        </button>
      </form>
      <Modal isOpen={isModalOpen} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default FooterContact;
