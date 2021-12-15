// Due to wrong grid behavior, Multiple grid forms are written
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setJobsCategory,
  setJobsLocation,
  clearJobsSearchFilters,
} from '../../app/redux/actions/jobsActions';

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
  }),

  input: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
  }),
  indicatorSeparator: (state) => ({
    display: 'none',
  }),
};

const CategoryDropdown = () => {
  const dispatch = useDispatch();
  const {
    search: { categories, category },
  } = useSelector((state) => state.jobs);

  return (
    <Select
      options={categories}
      height="100px"
      className="tw-rounded-xl jobs-search-select text-gray  tw-text-sm tw-font-normal 2xl:tw-text-base"
      placeholder={<div>گروه شغلی</div>}
      styles={customStyle}
      onChange={(item) => dispatch(setJobsCategory({ name: item.label, id: item.value }))}
      // styles={customSelectStyle}
    />
  );
};

const LocationDropdown = () => {
  const dispatch = useDispatch();
  const {
    search: { locations, location },
  } = useSelector((state) => state.jobs);

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
        // console.log(item);
      }}
    />
  );
};

export default function SearchBox() {
  const [text, setText] = useState(new URL(window.location).searchParams.get('q'));
  const {
    search: { category, location },
  } = useSelector((state) => state.jobs);
  let name;
  let value;
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(clearJobsSearchFilters());
    if (text === '') toast.error('لطفا کلمه یا عبارتی را درون باکس اول وارد کنید.');
    else {
      const url = new URL(window.location.origin);
      url.searchParams.set('q', text);
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
      console.log(url.search);
      history.push(`./jobs${url.search}`);
    }
  };

  return (
    <div className="search-box bg-light font-kalameh-num tw-rounded-xl tw-p-4 tw-w-full" style={{}}>
      {/* 0 to 768px */}
      <form onSubmit={onSubmit} className="tw-grid tw-gap-4 tw-grid-cols-1 md:tw-hidden">
        <div className="" style={{}}>
          <input
            type="text"
            placeholder="عنوان شغلی یا شرکت..."
            className="tw-w-full tw-h-full"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="" style={{}}>
          <CategoryDropdown />
        </div>
        <div className="" style={{}}>
          <LocationDropdown />
        </div>
        <div className="" style={{}}>
          <button
            type="submit"
            className="button-primary tw-grid tw-place-items-center tw-w-full tw-h-full"
            style={{}}
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
          <div className="" style={{}}>
            <input
              type="text"
              placeholder="عنوان شغلی یا شرکت..."
              className="tw-w-full tw-h-full"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>
          <div className="" style={{}}>
            <button
              type="submit"
              className="button-primary tw-grid tw-place-items-center tw-w-full tw-h-full"
              style={{}}
            >
              جستجو
            </button>
          </div>
        </div>
        <div className="tw-grid tw-gap-x-4 tw-grid-cols-2">
          <div className="" style={{}}>
            <CategoryDropdown />
          </div>
          <div className="" style={{}}>
            <LocationDropdown />
          </div>
        </div>
      </form>
      {/* 1280px and up */}
      <form onSubmit={onSubmit} className="tw-hidden xl:tw-grid jobs-columnar-form tw-gap-4">
        <div className="" style={{}}>
          <input
            type="text"
            placeholder="عنوان شغلی یا شرکت..."
            className="tw-w-full tw-h-full"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="" style={{}}>
          <CategoryDropdown />
        </div>
        <div className="" style={{}}>
          <LocationDropdown />
        </div>
        <div className="" style={{}}>
          <button
            type="submit"
            className="button-primary tw-grid tw-place-items-center tw-w-full tw-h-full"
            style={{}}
          >
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
}
