import React, { useEffect } from 'react';

import './template.module.css';

export function TextInput({
  defaultValue,
  placeholder,
  disabled,
  classes,
  state,
  onChange,
  message,
  options,
}) {
  return (
    <div style={{ marginBottom: '1rem' }} className="template">
      <div className="dropdown">
        {options.map((ee) => (
          <div className="dropdown-item">ee</div>
        ))}
      </div>
    </div>
  );
}
