import React, { useState } from "react";
import "./porfoliotools.css";

const Iinput = ({value, onChange,placeholder}) => {




  return (
    <div className="portfolio__body-tools_input">
      <input
        placeholder={placeholder}
        className="custom__input"
        type="text"
        value={value}
        onChange={onChange}

        
      />
    </div>
  );
};

export default Iinput;
