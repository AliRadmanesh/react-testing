/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function SortDropdown() {
  const { sort } = useSelector((state) => state.courses);
  const [text, setText] = useState(() => {});
  const history = useHistory();
  const ref = useRef();

  const handleClick = (event) => {
    if (!event.target.className.includes('sort-dropdown') && ref.current) {
      ref.current.classList.remove('active');
    }
  };

  useEffect(() => {
    switch (sort) {
      case 1:
        setText('مرتبط‌ترین');
        break;
      case 2:
        setText('جدیدترین');
        break;
      case 3:
        setText('محبوب‌ترین');
        break;
      default:
        setText('مرتبط‌ترین');
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    switch (parseInt(new URL(window.location.href).searchParams.get('sortby'), 10)) {
      case 1:
        setText('مرتبط‌ترین');
        break;
      case 2:
        setText('جدیدترین');
        break;
      case 3:
        setText('محبوب‌ترین');
        break;
      default:
        setText('مرتبط‌ترین');
    }
  }, [window.location.search]);

  const onClick = (value) => {
    const url = new URL(window.location);
    url.searchParams.set('sortby', value);
    history.push(`./${url.search}`);
  };

  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <button
        ref={ref}
        className="tw-flex tw-w-full tw-text-sm tw-font-normal 2xl:tw-text-base tw-items-center courses-dropdown sort-dropdown tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        {text}
        <img src={arrow} alt="" className="" />
      </button>
      <div className="courses-dropdown-items">
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            onClick(1);
            setText('مرتبط‌ترین');
            document.querySelector('.sort-dropdown').classList.remove('active');
          }}
        >
          مرتبط‌ترین
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            onClick(2);
            setText('جدیدترین');
            document.querySelector('.sort-dropdown').classList.remove('active');
          }}
        >
          جدیدترین
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            onClick(3);
            setText('محبوب‌ترین');
            document.querySelector('.sort-dropdown').classList.remove('active');
          }}
        >
          محبوب‌ترین
        </div>
      </div>
    </div>
  );
}
