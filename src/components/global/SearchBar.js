import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQueryKeywords, hideSuggest } from '../../app/redux/actions/searchActions';
import searchIcon from '../../assets/icons/Search.svg';

export default function SearchBar({ onChange, classes }) {
  const { keywords } = useSelector((state) => state.search.query);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (new URL(window.location).searchParams.get('category[0]'))
      setCategory(new URL(window.location).searchParams.get('category[0]'));
    else setCategory(null);
  }, [window.location.href]);

  // console.log(window.location.href.searchParams);

  const dispatch = useDispatch();
  return (
    <div
      className={`tw-grid tw-items-center tw-px-2 search-container tw-mb-4 tw-w-full tw-h-full ${classes}`}
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
        onChange={(e) => dispatch(setQueryKeywords(e.target.value))}
      />
      {keywords !== '' ? (
        <Link
          to={`/courses/?q=${keywords}&${
            category !== null ? `category[0]=${category}` : ''
          }&is_free=0&sortby=1&page=1`}
          className="tw-m-0 tw-p-2 tw-justify-self-end"
          onClick={() => {
            window.localStorage.setItem('query', keywords);
            dispatch(hideSuggest());
          }}
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
