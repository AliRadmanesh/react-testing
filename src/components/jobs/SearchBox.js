import React from 'react';
import { useSelector } from 'react-redux';

import CategoriesDropdown from './CategoriesDropdown';

export default function SearchBox() {
  const { categories } = useSelector((state) => state.jobs.search);
  let name;
  let value;
  const options = [
    {
      name: 'Chrome',
      value: 'chrome',
    },
    {
      name: 'Edge',
      value: 'Edge',
    },
    {
      name: 'Firefox',
      value: 'Firefox',
    },
    {
      name: 'IE',
      value: 'IE',
    },
    {
      name: 'Safari',
      value: 'Safari',
    },
    {
      name: 'Brave',
      value: 'Brave',
    },
  ];
  return (
    <div className="search-box bg-light font-kalameh-num tw-rounded-xl tw-p-4 tw-w-full" style={{}}>
      <form className="tw-grid jobs-search-form jobs-search-areas tw-gap-4">
        {/* <input
          type="text"
          className="tw-rounded-xl tw-p-4 jobs-search-area-1 "
          placeholder="عنوان شغلی یا شرکت..."
          style={{ paddingTop: '1rem', paddingBottom: '1rem', width: 'auto' }}
        /> */}

        {/* <div className="jobs-search-area-2 tw-rounded-xl tw-w-auto"> */}
        {/* <CategoriesDropdown /> */}
        {/* <input
          type="search"
          className="tw-rounded-xl tw-p-4 jobs-search-area-2"
          placeholder="عنوان شغلی یا شرکت..."
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        /> */}
        {/* </div> */}
        {/* <input
          type="search"
          className="tw-rounded-xl tw-p-4 jobs-search-area-3"
          placeholder="عنوان شغلی یا شرکت..."
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        /> */}
        {/* <button
          className="button-primary tw-p-4 jobs-search-area-4 tw-py-4"
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        >
          جستجو
        </button> */}

        <div className="jobs-search-area-1 tw-bg-red-500" style={{ height: '50px' }} />
        <div className="jobs-search-area-2 tw-bg-green-500" style={{ height: '50px' }} />
        <div className="jobs-search-area-3 tw-bg-blue-500" style={{ height: '50px' }} />
        <div className="jobs-search-area-4 tw-bg-yellow-500" style={{ height: '50px' }} />
      </form>
      {/* <form className="tw-grid jobs-search-form jobs-search-areas tw-gap-4">
        <div className="jobs-search-area-1 tw-bg-red-500" style={{ height: '50px' }}>
          <input type="text" />
        </div>
        <div className="jobs-search-area-2 tw-bg-green-500" style={{ height: '50px' }}>
          <input type="text" />
        </div>
        <div className="jobs-search-area-3 tw-bg-blue-500" style={{ height: '50px' }}>
          <input type="text" />
        </div>
        <div className="jobs-search-area-4 tw-bg-yellow-500" style={{ height: '50px' }}>
          <input type="text" />
        </div>
      </form> */}
    </div>
  );
}
