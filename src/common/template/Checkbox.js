import React from 'react';
import './template.css';
import indicator from './checkbox-indicator.svg';

export default function Checkbox({
  onChange,
  text = '',
  disabled,
  classes = '',
  checked,
  secondText,
}) {
  return (
    <div className={`template ${classes}`}>
      {/* eslint-disable-next-line */}
      <label className="checkbox-container">
        <span>
          {text} <span style={{ color: '#acacac' }}>{secondText}</span>
        </span>
        <input
          type="checkbox"
          className="checkbox"
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
        <span className="checkmark" />
        <img src={indicator} alt="" className="checkmark-indicator" />
      </label>
    </div>
  );
}
