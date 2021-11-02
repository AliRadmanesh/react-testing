/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuerySort } from '../../app/redux/actions/searchActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function SortDropdown() {
  const { sort } = useSelector((state) => state.search.query.filters);
  const [text, setText] = useState(() => {
    switch (sort) {
      case 1:
        return 'مرتبط‌ترین';
      case 2:
        return 'جدیدترین';
      case 3:
        return 'مرتبط‌ترین';
      default:
        return 'مرتبط‌ترین';
    }
  });
  const dispatch = useDispatch();
  const ref = useRef();
  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <div
        ref={ref}
        className="tw-flex items-center courses-dropdown tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        <p className="tw-text-sm tw-font-normal 2xl:tw-text-base">{text}</p>
        <img src={arrow} alt="" />
      </div>
      <div className="courses-dropdown-items">
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setQuerySort(1));
            setText('مرتبط‌ترین');
            console.log(ref.current.classList.remove('active'));
          }}
        >
          مرتبط‌ترین
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setQuerySort(2));
            setText('جدیدترین');
            console.log(ref.current.classList.remove('active'));
          }}
        >
          جدیدترین
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setQuerySort(3));
            setText('محبوب‌ترین');
            console.log(ref.current.classList.remove('active'));
          }}
        >
          محبوب‌ترین
        </div>
      </div>
    </div>
  );
}
