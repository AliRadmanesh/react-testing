import React from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const top_search = useSelector((state) => state.home.data.top_search);

  return (
    <div className="container">
      <div className="tw-flex tw-justify-between tw-items-center tw-py-4 landing-search-container tw-mb-4 tw-w-full tw-max-w-screen-sm tw-mx-auto">
        <input
          type="text"
          className="landing-search tw-flex font-kalameh"
          placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
          onFocus={() => {
            document.querySelector('.landing-search-container').classList.add('focus');
          }}
          onBlur={() => {
            document.querySelector('.landing-search-container').classList.remove('focus');
          }}
        />
        <button className="tw-m-0 button-primary">جستجو</button>
      </div>
      <div className="tw-py-4 tw-mb-4 tw-w-full tw-max-w-screen-sm tw-mx-auto">
        <p className="text-primary tw-mb-2">بیشترین کلمات جستجو شده</p>
        <div className="tw-flex tw-flex-wrap">
          {top_search.map((ee) => (
            <p key="1" className="bg-medium tw-py-2 tw-px-4 tw-m-2" style={{ borderRadius: '6px' }}>
              {ee}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
