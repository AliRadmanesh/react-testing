// eslint-disble-next-line
import React, { useEffect, useState } from 'react';

import './template.css';
import icon from './icon.svg';

export function Dropdown({ disabled, classes, state, onChange, message, options }) {
  const [choice, setChoice] = useState(null);
  const [show, doShow] = useState(false);

  useEffect(() => {
    // document.querySelector('.dropdown-container').style.width =
    console.log(document.querySelector('.template').style.width);
  }, []);

  return (
    <div style={{ marginBottom: '1rem' }} className="template font-kalameh">
      <div
        role="none"
        className="dropdown"
        style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '12px' }}
        onClick={() => doShow(!show)}
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
    </div>
  );
}
