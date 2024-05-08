import React, {useState} from 'react'
import './TranslateBtn.css'
const TranslateBtn = () => {
    const [value, setValue] = useState("");
    const options = [
        { label: "RU", value: 1 },
        { label: "EN", value: 2 },
        { label: "GE", value: 3 },
      ];

      function handleChange(e) {
        setValue(e.target.value);
      }
  return (
    <div className='translateBtn dark-blue'>
    <select value={value} onChange={handleChange} style={{ border: "none" }}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  
  </div>
  )
}

export default TranslateBtn
