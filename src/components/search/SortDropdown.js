/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setQuerySort } from '../../app/redux/actions/searchActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function SortDropdown() {
  const { sort } = useSelector((state) => state.search.query.filters);
  const [text, setText] = useState(() => {});
  const dispatch = useDispatch();
  const history = useHistory();

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
  }, [sort]);

  const onClick = (value) => {
    const url = new URL(window.location);
    url.searchParams.set('sortby', value);
    history.push(`./${url.search}`);
  };

  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <button
        className="tw-flex tw-text-sm tw-font-normal 2xl:tw-text-base tw-items-center sort-dropdown courses-dropdown tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        {text}
        <span>
          <img src={arrow} alt="" />
        </span>
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
