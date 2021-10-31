import React, { useRef, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import searchIcon from '../../assets/icons/Search.svg';

export default function SearchBar({ onSearch, onChange, classes }) {
  const { keywords } = useSelector((state) => state.search.query);

  return (
    <div
      className={`tw-grid tw-items-center tw-px-2 search-container tw-mb-4 tw-w-full  ${classes}`}
      style={{ gridTemplateColumns: 'auto 62px' }}
    >
      <input
        type="text"
        className="search tw-flex tw-p-0  tw-pr-2  tw-w-full tw-text-sm font-kalameh-num"
        placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
        onFocus={() => {
          document.querySelector('.search-container').classList.add('focus');
        }}
        onBlur={() => {
          document.querySelector('.search-container').classList.remove('focus');
        }}
        onChange={onChange}
      />
      {keywords !== '' ? (
        <Link
          to={`../search/q=${keywords}`}
          className="tw-m-0 tw-p-2 tw-justify-self-end"
          onClick={onSearch}
        >
          <img src={searchIcon} alt="" className="icon" />
        </Link>
      ) : (
        <span className="tw-m-0 tw-p-2 tw-justify-self-end">
          <img src={searchIcon} alt="" className="icon" />
        </span>
      )}
    </div>
  );
}
