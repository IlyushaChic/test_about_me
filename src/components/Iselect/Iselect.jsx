import React from "react";
import "./iselect.css";

const Iselect = ({ option, dafaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {dafaultValue}
      </option>
      {option.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Iselect;
