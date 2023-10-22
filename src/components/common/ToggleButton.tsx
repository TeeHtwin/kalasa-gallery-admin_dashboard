'use client';

import React from 'react';
import './Toggle.css';

const ToggleButton = ({ toggleNum, checked }: any) => {
  return (
    <label htmlFor={toggleNum} className="toggle_container rop-shadow-md">
      <input
        type="checkbox"
        defaultChecked={checked}
        id={toggleNum}
        className="toggle"
      />
      <span className="slider"></span>
      <span
        className="toggle_text"
        data-available="available"
        data-soldout="sold out"
      ></span>
      <div className="toggle_bg" />
    </label>
  );
};

export default ToggleButton;
