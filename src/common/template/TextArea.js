import React, { useEffect } from 'react';

import './template.css';

export function TextArea({
  defaultValue,
  placeholder,
  disabled,
  classes,
  state,
  onChange,
  onBlur,
  onFocus,
  message,
}) {
  return (
    <div style={{ marginBottom: '.5rem' }} className="template">
      <textarea
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${classes} ${state}`}
        style={{ marginBottom: '-10px', width: '100%' }}
        onChange={onChange}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <p
        className="template-textarea-message"
        style={{
          color:
            (!state && 'متن پیشفرض') ||
            (state === 'error' && '#B21111') ||
            (state === 'warning' && '#B26F11') ||
            (state === 'success' && '#11B262'),
          visibility: state ? 'visible' : 'hidden',
        }}
      >
        {message ||
          (!state && '#2c2c2c') ||
          (state === 'error' && 'لطفا پیام خود را بنویسید') ||
          (state === 'warning' && 'در این قسمت، چیزی ننوشتید.') ||
          (state === 'success' && 'پیام شما را خواهیم دید.')}
      </p>
    </div>
  );
}
