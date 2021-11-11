/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCoursesIsFree } from '../../app/redux/actions/coursesActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function IsFreeDropdown() {
  const { is_free } = useSelector((state) => state.courses);
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

  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <button
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
            dispatch(setCoursesIsFree(1));
            setText('رایگان');
          }}
        >
          رایگان
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setCoursesIsFree(0));
            setText('پولی');
          }}
        >
          پولی
        </div>
      </div>
    </div>
  );
}
