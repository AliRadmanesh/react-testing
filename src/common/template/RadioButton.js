import React from 'react';
import './template.css';
import indicator from './checkbox-indicator.svg';

export default function Checkbox({
  onChange,
  text = '',
  disabled,
  classes = '',
  checked,
  name,
  defaultValue,
}) {
  return (
    <div className={`template ${classes}`}>
      {/* eslint-disable-next-line */}
      <label class="radio-container">
        <span>{text}</span>
        <input
          type="radio"
          className="radio-button"
          onChange={onChange}
          disabled={disabled}
          checked={checked}
          name={name}
          defaultValue={defaultValue}
        />
        <span className="checkmark" />
      </label>
    </div>
  );
}
