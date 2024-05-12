import React, { useState, useRef, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import "./PositionForm.css";
const Modal = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return <div className="modal-overlay">Your message has been sent</div>;
};
const PositionForm = (props, ref) => {
  const [lnkd, setLnkdn] = useState(true);
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    console.log("tttt");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nqcwraa", "template_5f6kff7", form.current, {
        publicKey: "kaXtgRdirwWqDEySs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    const formsAll = e.target;
    formsAll.reset();
  };

  return (
    <div>
      <div className="position-form" ref={ref}>
        <form ref={form} className="position-inputs" onSubmit={sendEmail}>
          <div className="position-input-blocks">
            <div className="position-input-block">
              <label htmlFor="name" className="redLabels">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="full-inputs"
                placeholder="Enter your name"
                name="user_name"
                required
              />
            </div>
            <div className="position-input-block">
              <label htmlFor="phone" className="redLabels">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="full-inputs"
                placeholder="Enter phone number"
                name="user_phone"
              />
            </div>
          </div>
          <label htmlFor="email" className="redLabels">
            E-mail
          </label>
          <input
            type="email"
            placeholder="Enter e-mail"
            id="email"
            className="full-inputs"
            name="user_email"
          />
          <div className="radio-inputs">
            {/* <div>
            <input
              type="radio"
              id="lnkdn"
              className='radio-inp'
              name="cv"
              onChange={() => setLnkdn(true)}
            />
            <label className='radio-label'
            htmlFor="lnkdn">
              Link to LinkedIn
            </label>
          </div> */}
            {/* <div>
            {" "}
            <input
              type="radio"
              id="cv"
              name="cv"
              className={styles.radioInp}
              onChange={() => setLnkdn(false)}
            />
            <label className={styles.radioLabel} htmlFor="cv">
              File containing resume
            </label>
          </div> */}
          </div>
          {lnkd && (
            <div id="linkToLnkdn">
              <label htmlFor="linkLnkdn">Link to LinkedIn</label>
              <input
                type="text"
                placeholder="Paste link"
                className="full-inputs"
                id="linkLnkdn"
                name="message"
              />
            </div>
          )}
          {!lnkd && <input type="file" />}
          <p>
            By submitting your application, you consent to the storage of your
            CV in our database of candidates. If we have another vacancy that
            suits you, we may contact you *
          </p>
          <button className="inp-btn" onClick={handleButtonClick}>
            I want to work for BicycleDev
          </button>
          <Modal isOpen={isModalOpen} />
        </form>
      </div>
    </div>
  );
};

export default forwardRef(PositionForm);
