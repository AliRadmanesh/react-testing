// eslint-disble-next-line
import React, { useEffect, useState } from 'react';

import './template.css';
import icon from './icon.svg';

export function Dropdown({ disabled, classes, state, stateHandler, onChange, message, options }) {
  const [choice, setChoice] = useState(null);
  const [show, doShow] = useState(false);
  // const [state, setState] = useState(null);

  useEffect(() => {
    // document.querySelector('.dropdown-container').style.width =
    console.log(document.querySelector('.template').style.width);
  }, []);

  return (
    <div style={{ marginBottom: '1rem' }} className="template font-kalameh">
      <div
        role="none"
        className={!disabled ? `dropdown ${state}` : `dropdown disabled`}
        style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '12px' }}
        onClick={() => {
          if (!disabled) doShow(!show);
        }}
      >
        <p
          style={{ cursor: 'default' }}
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          {choice || (
            <span style={{ color: '#878787', opacity: '.7' }}>یک گزینه را انتخاب کنید</span>
          )}
        </p>
        <img src={icon} alt="" />
      </div>
      <div className="dropdown-container">
        <div className="dropdown-items" style={{ display: show ? 'block' : 'none' }}>
          {options.map((item) => (
            <div
              role="none"
              key="item"
              className="dropdown-item"
              onClick={() => {
                setChoice(item);
                doShow(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
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
