import React, { useState } from 'react';

import './template.css';
import indicator from './checkbox-indicator.svg';

export default function Checkbox({ onChange, text = '', disabled, classes }) {
  return (
    <div className={`template ${classes}`}>
      {/* eslint-disable-next-line */}
      <label class="checkbox-container">
        <span>{text}</span>
        <input type="checkbox" className="checkbox" onChange={onChange} disabled={disabled} />
        <span className="checkmark" />
        <img src={indicator} alt="" className="checkmark-indicator" />
      </label>
    </div>
  );
}
