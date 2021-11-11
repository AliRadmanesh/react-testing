/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQueryIsFree } from '../../app/redux/actions/searchActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function IsFreeDropdown() {
  const { is_free } = useSelector((state) => state.search.query.filters);
  const [text, setText] = useState(() => {
    switch (is_free) {
      case 0:
        return 'پولی';
      case 1:
        return 'رایگان';
      default:
        return 'مرتبط‌ترین';
    }
  });
  const dispatch = useDispatch();
  const ref = useRef();
  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <button
        ref={ref}
        className="tw-flex tw-text-sm tw-font-normal 2xl:tw-text-base tw-items-center courses-dropdown tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        {text}
        <img src={arrow} alt="" />
      </button>
      <div className="courses-dropdown-items">
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setQueryIsFree(1));
            setText('رایگان');
            ref.current.classList.remove('active');
          }}
        >
          رایگان
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setQueryIsFree(0));
            setText('پولی');
            ref.current.classList.remove('active');
          }}
        >
          پولی
        </div>
      </div>
    </div>
  );
}
