import React from 'react';

export default function Input({ type, value, placeholder, classes, regex, message }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={classes}
        style={{ marginBottom: '-10px' }}
      />
      <p className="caption">متن پیش فرض</p>
    </div>
  );
}
