// emailUtils.js
import emailjs from "@emailjs/browser";

export const sendEmail = (formRef, formValues, setModalOpen, setFormErrors, validate) => {
  const errors = validate(formValues);
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

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
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
        }, 3000);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  formRef.current.reset();
};
