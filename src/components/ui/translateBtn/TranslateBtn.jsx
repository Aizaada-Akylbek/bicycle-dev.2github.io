// import React, { useState } from "react";
// import "./TranslateBtn.css";
// const TranslateBtn = () => {
//   const [value, setValue] = useState("");
//   const [active, setActive] = useState("en");
//   const options = [
//     { label: "RU", value: 1 },
//     { label: "EN", value: 2 },
//     { label: "GE", value: 3 },
//   ];

//   function handleChange(language) {
//     console.log(language);
//     const lang = language.toLowerCase();
//     i18n.changeLanguage(lang);
//     setActive(lang);
//   }
//   return (
//     <div className="translateBtn dark-blue">
//       <select value={value} style={{ border: "none" }}>
//         {options.map((option) => (
//           <option
//             key={option.value}
//             value={option.value}
//             // onClick={(e) => (e.target.innerText)}
//             onChange={(e) => handleChange(e)}
//           >
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default TranslateBtn;

import React, { useState } from "react";
import "./TranslateBtn.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";

const TranslateBtn = () => {
  const [active, setActive] = useState("en");
  const options = [
    { label: "EN", value: "en" },
    { label: "RU", value: "ru" },
    { label: "GE", value: "ge" },
  ];
  // const { i18n, t } = useTranslation();
  function handleChange(event) {
    const language = event.target.value;
    console.log(language);
    i18n.changeLanguage(language);
    setActive(language);
  }

  return (
    <div className="translateBtn dark-blue">
      <select value={active} onChange={handleChange} style={{ border: "none" }}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TranslateBtn;
