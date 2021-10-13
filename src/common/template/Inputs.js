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
}) {
  return (
    <div style={{ marginBottom: '1rem' }} className="template">
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${classes} ${state}`}
        style={{ marginBottom: '-10px', width: '100%' }}
        onChange={onChange}
        disabled={disabled}
      />
      <p
        className="caption"
        style={{
          color:
            (!state && '#2c2c2c') ||
            (state === 'error' && '#B21111') ||
            (state === 'warning' && '#B26F11') ||
            (state === 'success' && '#11B262'),
          visibility: state ? 'visible' : 'hidden',
          marginTop: '1rem',
          marginRight: '.5rem',
        }}
      >
        {message}
      </p>
    </div>
  );
}

export function EmailInput({
  defaultValue,
  placeholder,
  disabled,
  classes,
  state,
  onChange,
  message,
}) {
  return (
    <div style={{ marginBottom: '1rem' }} className="template">
      <input
        type="email"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={classes}
        style={{ marginBottom: '-10px', width: '100%' }}
        onChange={onChange}
        disabled={disabled}
      />
      <p
        className="caption"
        style={{
          color:
            (!state && '#2c2c2c') ||
            (state === 'error' && '#B21111') ||
            (state === 'warning' && '#B26F11') ||
            (state === 'success' && '#11B262'),
          visibility: state ? 'visible' : 'hidden',
          marginTop: '1rem',
          marginRight: '.5rem',
        }}
      >
        {message}
      </p>
    </div>
  );
}

export function NumberInput({
  defaultValue,
  placeholder,
  disabled,
  classes,
  state,
  onChange,
  message,
}) {
  return (
    <div style={{ marginBottom: '1rem' }} className="template">
      <input
        type="number"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={classes + (state === 'error' && ' error')}
        style={{ marginBottom: '-10px', width: '100%' }}
        onChange={onChange}
        disabled={disabled}
      />
      <p
        className="caption"
        style={{
          color:
            (!state && '#2c2c2c') ||
            (state === 'error' && '#B21111') ||
            (state === 'warning' && '#B26F11') ||
            (state === 'success' && '#11B262'),
          visibility: state ? 'visible' : 'hidden',
          marginTop: '1rem',
          marginRight: '.5rem',
        }}
      >
        {message}
      </p>
    </div>
  );
}
