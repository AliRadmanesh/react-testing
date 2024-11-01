// Due to wrong grid behavior, Multiple grid forms are written
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import toast from 'react-hot-toast';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setJobsCategory,
  setJobsLocation,
  clearJobsSearchFilters,
  getJobsSearchOptions,
} from '../../app/redux/actions/jobsActions';

import { replaceString } from '../../common/Functions';

const customStyle = {
  control: (provided, state) => ({
    ...provided,
    background: 'rgb(240, 242, 242)',
    borderRadius: 12,
    // height: 72,
    height: window.innerWidth >= 768 ? 72 : 56,
    border: 'none',
    // borderColor: state.isHovered ? 'transparent' : 'transparent',
    transition: 'box-shadow .3s ease-in',
    boxShadow: state.isFocused ? '0 0 0 2px #118ab2' : '0 0 0 2px transparent',
    opacity: 1,
  }),

  input: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
  }),

  indicatorSeparator: (state) => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    opacity: 1,
  }),
  menu: (style) => ({
    ...style,
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: 1,
  }),
  menuList: (style) => ({
    ...style,
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: 1,
  }),
};

function CategoryDropdown() {
  const dispatch = useDispatch();
  const {
    search: { categories, category },
  } = useSelector((state) => state.jobs);

  useEffect(() => {
    const params = new URL(window.location).searchParams;
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of params) {
      if (pair[0].includes('category')) {
        // eslint-disable-next-line array-callback-return
        categories.map((item) => {
          // eslint-disable-next-line eqeqeq
          if (item.value == pair[1]) {
            dispatch(setJobsCategory({ name: item.label, id: item.value }));
          }
        });
      }
    }
  }, [window.location.search]);

  return (
    <Select
      options={categories}
      height="100px"
      className="tw-rounded-xl jobs-search-select text-gray  tw-text-sm tw-font-normal 2xl:tw-text-base"
      placeholder={category.id === null && <div>گروه شغلی</div>}
      styles={customStyle}
      onChange={(item) => dispatch(setJobsCategory({ name: item.label, id: item.value }))}
      value={category.id !== null && { value: category.id, label: category.name }}
      // styles={customSelectStyle}
    />
  );
}

function LocationDropdown() {
  const dispatch = useDispatch();
  const {
    search: { locations, location },
  } = useSelector((state) => state.jobs);

  useEffect(() => {
    const p = parseInt(new URL(window.location).searchParams.get('province'), 10) || null;
    const c = parseInt(new URL(window.location).searchParams.get('city[0]'), 10) || null;
    if (c === null) {
      // eslint-disable-next-line array-callback-return
      locations.map((item) => {
        if (item.value === p && item.city === null) {
          dispatch(
            setJobsLocation({
              id: item.value,
              name: item.label,
              city: item.city,
              province: item.province,
            }),
          );
        }
      });
    } else {
      // eslint-disable-next-line array-callback-return
      locations.map((item) => {
        if (item.value === c && item.city !== null) {
          dispatch(
            setJobsLocation({
              id: item.value,
              name: item.label,
              city: item.city,
              province: item.province,
            }),
          );
        }
      });
    }
  }, [window.location.search]);

  return (
    <Select
      options={locations}
      height="100px"
      className="tw-rounded-xl jobs-search-select text-gray tw-text-sm tw-font-normal 2xl:tw-text-base"
      placeholder={<div>شهر</div>}
      styles={customStyle}
      onChange={({ value, label, city, province }) => {
        dispatch(
          setJobsLocation({
            id: value,
            name: label,
            city,
            province,
          }),
        );
      }}
      value={location.id !== null && { value: location.id, label: location.name }}
    />
  );
}

export default function SearchBox() {
  const [text, setText] = useState(new URL(window.location).searchParams.get('q'));
  const {
    search: { category, location, categories, locations },
  } = useSelector((state) => state.jobs);
  let name;
  let value;
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(clearJobsSearchFilters());
    const url = new URL(window.location.origin);

    if (text !== '' && text !== null) {
      url.searchParams.set('q', text);
    }
    if (location.id !== null) {
      if (location.city) {
        url.searchParams.delete('province');
        url.searchParams.set('city[0]', location.id);
      }
      if (!location.city) {
        url.searchParams.delete('city[0]');
        url.searchParams.set('province', location.id);
      }
    }

    if (category.id) {
      url.searchParams.set('category[0]', category.id);
    }
    if (!category.id) {
      url.searchParams.delete('category[0]');
    }
    url.searchParams.set('page', 1);

    if (url.search === '?page=1') history.push(`/jobs/search/${url.search}`);
    else
      history.push(
        `/jobs${url.searchParams.get('q') && category.name === '' ? '/search' : ''}${
          category.name !== '' ? `/${replaceString(category.name, ' ', '-')}` : ''
        }/${url.search}`,
      );
  };

  useEffect(() => {
    setText(new URL(window.location).searchParams.get('q'));
  }, [window.location.search]);

  return (
    <div className="search-box bg-light font-kalameh-num tw-rounded-xl tw-p-4 tw-w-full">
      {/* 0 to 768px */}
      <form onSubmit={onSubmit} className="tw-grid tw-gap-4 tw-grid-cols-1 md:tw-hidden">
        <div>
          <input
            type="text"
            placeholder="عنوان شغلی یا شرکت..."
            className="tw-w-full tw-h-full"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div>
          <CategoryDropdown />
        </div>
        <div>
          <LocationDropdown />
        </div>
        <div>
          <button
            type="submit"
            className="button-primary tw-grid tw-place-items-center tw-w-full tw-h-full"
          >
            جستجو
          </button>
        </div>
      </form>
      {/* 768px - 1280px */}
      <form
        onSubmit={onSubmit}
        className="tw-hidden tw-grid-cols-1 tw-gap-4 md:tw-grid xl:tw-hidden"
      >
        <div className="tw-grid tw-gap-x-4" style={{ gridTemplateColumns: '3fr 1fr' }}>
          <div>
            <input
              type="text"
              placeholder="عنوان شغلی یا شرکت..."
              className="tw-w-full tw-h-full"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>
          <div>
            <button
              type="submit"
              className="button-primary tw-grid tw-place-items-center tw-w-full tw-h-full"
            >
              جستجو
            </button>
          </div>
        </div>
        <div className="tw-grid tw-gap-x-4 tw-grid-cols-2">
          <div>
            <CategoryDropdown />
          </div>
          <div>
            <LocationDropdown />
          </div>
        </div>
      </form>
      {/* 1280px and up */}
      <form onSubmit={onSubmit} className="tw-hidden xl:tw-grid jobs-columnar-form tw-gap-4">
        <div>
          <input
            type="text"
            placeholder="عنوان شغلی یا شرکت..."
            className="tw-w-full tw-h-full"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div>
          <CategoryDropdown />
        </div>
        <div>
          <LocationDropdown />
        </div>
        <div>
          <button
            type="submit"
            className="button-primary tw-grid tw-place-items-center tw-w-full tw-h-full"
          >
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
}
