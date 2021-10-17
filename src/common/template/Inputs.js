import React, { useEffect } from 'react';

import './template.css';

export function TextInput({
  defaultValue,
  placeholder,
  disabled,
  classes = '',
  state,
  onChange,
  onFocus,
  onBlur,
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
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
      <p
        className=""
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
  classes = '',
  state,
  onChange,
  onBlur,
  message,
}) {
  return (
    <div style={{ marginBottom: '1rem' }} className="template">
      <input
        type="email"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${classes} ${state}`}
        style={{ marginBottom: '-10px', width: '100%' }}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
      <p
        className=""
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
  onBlur,
  message,
}) {
  return (
    <div style={{ marginBottom: '1rem' }} className="template">
      <input
        type="number"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${classes} ${state}`}
        style={{ marginBottom: '-10px', width: '100%' }}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
      <p
        className=""
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
