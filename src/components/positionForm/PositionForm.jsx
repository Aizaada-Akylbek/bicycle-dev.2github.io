// import React, { useState, useRef, forwardRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./PositionForm.css";
// import { useTranslation } from "react-i18next";

// const Modal = ({ isOpen }) => {
//   const {t}=useTranslation()
//   if (!isOpen) {
//     return null;
//   }

//   return <div className="modal-overlay">{t("Your message has been sent")}</div>;
// };

// const PositionForm = (props, ref) => {
//   const {t}=useTranslation()
//   const [lnkd, setLnkdn] = useState(true);
//   const [formValues, setFormValues] = useState({
//     user_name: "",
//     user_phone: "",
//     user_email: "",
//     message: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const form = useRef();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validate = () => {
//     let errors = {};
//     if (!formValues.user_name) errors.user_name = t("Name is required");
//     if (!formValues.user_email) {
//       errors.user_email = t("Email is required");
//     } else if (!validateEmail(formValues.user_email)) {
//       errors.user_email = t("Invalid email format");
//     }
//     if (!formValues.user_phone) errors.user_phone = t("Phone is required");

//     return errors;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     setFormErrors({ ...formErrors, [name]: "" }); // Clear error on change
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const errors = validate();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     emailjs
//       .sendForm("service_nqcwraa", "template_5f6kff7", form.current, {
//         publicKey: "kaXtgRdirwWqDEySs",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           setIsModalOpen(true);
//           setTimeout(() => {
//             setIsModalOpen(false);
//           }, 3000);
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//     form.current.reset();
//     setFormValues({ user_name: "", user_phone: "", user_email: "", message: "" });
//   };

//   return (
//     <div>
//       <div className="position-form" ref={ref}>
//         <form ref={form} className="position-inputs" onSubmit={sendEmail}>
//           <div className="position-input-blocks">
//             <div className="position-input-block">
//               <label htmlFor="name" className="redLabels">
//                 {t("Your name")}
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className={`full-inputs ${formErrors.user_name ? "input-error" : ""}`}
//                 placeholder={t("Enter your name")}
//                 name="user_name"
//                 value={formValues.user_name}
//                 onChange={handleInputChange}
                
//               />
//               {formErrors.user_name && <span className="error-text">{formErrors.user_name}</span>}
//             </div>
//             <div className="position-input-block">
//               <label htmlFor="phone" className="redLabels">
//                 {t("Phone")}
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 className={`full-inputs ${formErrors.user_phone ? "input-error" : ""}`}
//                 placeholder={t("Enter phone number")}
//                 name="user_phone"
//                 value={formValues.user_phone}
//                 onChange={handleInputChange}
//               />
//             {formErrors.user_phone && <span className="error-text">{formErrors.user_phone}</span>}
//             </div>

//           </div>
//           <label htmlFor="email" className="redLabels">
//             E-mail
//           </label>
//           <input
//             type="text"
//             placeholder={t("Enter e-mail")}
//             id="email"
//             className={`full-inputs ${formErrors.user_email ? "input-error" : ""}`}
//             name="user_email"
//             value={formValues.user_email}
//             onChange={handleInputChange}
//           />
//           {formErrors.user_email && <span className="error-text">{formErrors.user_email}</span>}
//           <div className="radio-inputs"></div>
//           {lnkd && (
//             <div id="linkToLnkdn">
//               <label htmlFor="linkLnkdn">{t("Link to")} LinkedIn</label>
//               <input
//                 type="text"
//                 placeholder={t("Paste link")}
//                 className={`full-inputs ${formErrors.message ? "input-error" : ""}`}
//                 id="linkLnkdn"
//                 name="message"
//                 value={formValues.message}
//                 onChange={handleInputChange}
//               />
//               {formErrors.message && <span className="error-text">{formErrors.message}</span>}
//             </div>
//           )}
//           {!lnkd && <input type="file" />}
//           <p>
//            {t("By submitting your application, you consent to the storage of your CV in our database of candidates. If we have another vacancy that suits you, we may contact you")}
//           </p>
//           <button className="inp-btn" type="submit">
//             {t("I want to work for BicycleDev")}
//           </button>
//           <Modal isOpen={isModalOpen} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default forwardRef(PositionForm);
// PositionForm.js
import React, { useState, useRef, forwardRef } from "react";
import { sendEmail } from "../../utils/email/emailUtils";
import "./PositionForm.css";
import { useTranslation } from "react-i18next";

const Modal = ({ isOpen }) => {
  const { t } = useTranslation();
  if (!isOpen) {
    return null;
  }

  return <div className="modal-overlay">{t("Your message has been sent")}</div>;
};

const PositionForm = (props, ref) => {
  const { t } = useTranslation();
  const [lnkd, setLnkdn] = useState(true);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = (values) => {
    let errors = {};
    if (!values.user_name) errors.user_name = t("Name is required");
    if (!values.user_email) {
      errors.user_email = t("Email is required");
    } else if (!validateEmail(values.user_email)) {
      errors.user_email = t("Invalid email format");
    }
    if (!values.user_phone) errors.user_phone = t("Phone is required");

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(form, formValues, setIsModalOpen, setFormErrors, validate);
    setFormValues({ user_name: "", user_phone: "", user_email: "", message: "" });
  };

  return (
    <div>
      <div className="position-form" ref={ref}>
        <form ref={form} className="position-inputs" onSubmit={handleSubmit}>
          <div className="position-input-blocks">
            <div className="position-input-block">
              <label htmlFor="name" className="redLabels">
                {t("Your name")}
              </label>
              <input
                type="text"
                id="name"
                className={`full-inputs ${formErrors.user_name ? "input-error" : ""}`}
                placeholder={t("Enter your name")}
                name="user_name"
                value={formValues.user_name}
                onChange={handleInputChange}
              />
              {formErrors.user_name && <span className="error-text">{formErrors.user_name}</span>}
            </div>
            <div className="position-input-block">
              <label htmlFor="phone" className="redLabels">
                {t("Phone")}
              </label>
              <input
                type="tel"
                id="phone"
                className={`full-inputs ${formErrors.user_phone ? "input-error" : ""}`}
                placeholder={t("Enter phone number")}
                name="user_phone"
                value={formValues.user_phone}
                onChange={handleInputChange}
              />
              {formErrors.user_phone && <span className="error-text">{formErrors.user_phone}</span>}
            </div>
          </div>
          <label htmlFor="email" className="redLabels">
            E-mail
          </label>
          <input
            type="text"
            placeholder={t("Enter e-mail")}
            id="email"
            className={`full-inputs ${formErrors.user_email ? "input-error" : ""}`}
            name="user_email"
            value={formValues.user_email}
            onChange={handleInputChange}
          />
          {formErrors.user_email && <span className="error-text">{formErrors.user_email}</span>}
          <div className="radio-inputs"></div>
          {lnkd && (
            <div id="linkToLnkdn">
              <label htmlFor="linkLnkdn">{t("Link to")} LinkedIn</label>
              <input
                type="text"
                placeholder={t("Paste link")}
                className={`full-inputs ${formErrors.message ? "input-error" : ""}`}
                id="linkLnkdn"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
              />
              {formErrors.message && <span className="error-text">{formErrors.message}</span>}
            </div>
          )}
          {!lnkd && <input type="file" />}
          <p>
            {t(
              "By submitting your application, you consent to the storage of your CV in our database of candidates. If we have another vacancy that suits you, we may contact you"
            )}
          </p>
          <button className="inp-btn" type="submit">
            {t("I want to work for BicycleDev")}
          </button>
          <Modal isOpen={isModalOpen} />
        </form>
      </div>
    </div>
  );
};

export default forwardRef(PositionForm);

