import React from 'react';
import searchIcon from '../../assets/icons/Search.svg';

export default function SearchBar({ onSearch, classes }) {
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
      />
      <button className="tw-m-0 tw-p-2 tw-justify-self-end" onClick={onSearch}>
        <img src={searchIcon} alt="" className="icon" />
      </button>
    </div>
  );
}
