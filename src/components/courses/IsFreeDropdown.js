/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCoursesIsFree } from '../../app/redux/actions/coursesActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function IsFreeDropdown() {
  const { is_free } = useSelector((state) => state.courses);
  const [text, setText] = useState(() => {});
  const history = useHistory();

  useEffect(() => {
    switch (is_free) {
      case 0:
        setText('دارای هزینه');
        break;
      case 1:
        setText('رایگان');
        break;
      default:
        setText('دارای هزینه');
    }
  }, [is_free]);

  const onClick = (value) => {
    const url = new URL(window.location);
    url.searchParams.set('is_free', value);
    history.push(`./${url.search}`);
  };

  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <button
        className="tw-flex tw-w-full tw-text-sm tw-font-normal 2xl:tw-text-base tw-items-center courses-dropdown free-dropdown tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        {text}
        <img src={arrow} alt="" />
      </button>
      <div className="courses-dropdown-items">
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            onClick(1);
            setText('رایگان');
            document.querySelector('.free-dropdown').classList.remove('active');
          }}
        >
          رایگان
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            onClick(0);
            setText('دارای هزینه');
            document.querySelector('.free-dropdown').classList.remove('active');
          }}
        >
          دارای هزینه
        </div>
      </div>
    </div>
  );
}
