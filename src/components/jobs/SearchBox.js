import React from 'react';

export default function SearchBox() {
  return (
    <div className="bg-light font-kalameh-num tw-rounded-xl tw-p-4 tw-w-full" style={{}}>
      <form className="tw-grid jobs-search-form jobs-search-areas tw-gap-4">
        {/* <div
          className="jobs-search-area-1"
          style={{ height: '100%', minHeight: '80px', width: '100%' }}
        />
        <div
          className="jobs-search-area-2"
          style={{ height: '100%', minHeight: '80px', width: '100%' }}
        />
        <div
          className="jobs-search-area-3"
          style={{ height: '100%', minHeight: '80px', width: '100%' }}
        />
        <div
          className="jobs-search-area-4"
          style={{ height: '100%', minHeight: '80px', width: '100%' }}
        /> */}

        <input
          type="search"
          className="tw-rounded-xl tw-p-4 jobs-search-area-1"
          placeholder="عنوان شغلی یا شرکت..."
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        />
        <input
          type="search"
          className="tw-rounded-xl tw-p-4 jobs-search-area-2"
          placeholder="عنوان شغلی یا شرکت..."
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        />
        <input
          type="search"
          className="tw-rounded-xl tw-p-4 jobs-search-area-3"
          placeholder="عنوان شغلی یا شرکت..."
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        />
        <button
          className="button-primary tw-p-4 jobs-search-area-4 tw-py-4"
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        >
          جستجو
        </button>
      </form>
    </div>
  );
}
