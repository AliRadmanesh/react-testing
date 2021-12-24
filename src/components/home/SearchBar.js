import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import searchWhiteIcon from '../../assets/icons/Search White.svg';
import { setQueryKeywords } from '../../app/redux/actions/searchActions';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const top_search = useSelector((state) => state.home.data.top_search);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setQueryKeywords(value));
    if (value !== '') {
      history.push(`/courses/search/?q=${value}&is_free=0&sortby=1&page=1`);
    }
  };

  return (
    <div className="container tw-relative" style={{ top: '-2rem' }}>
      <form onSubmit={onSubmit}>
        <div className="tw-flex tw-justify-between tw-items-center landing-search-container bg-light tw-mb-4 tw-w-full tw-max-w-lg 2xl:tw-max-w-2xl tw-mx-auto tw-shadow-xl">
          <input
            type="text"
            className="landing-search tw-flex font-kalameh-num tw-w-full tw-px-4 tw-py-0 tw-text-base tw-font-normal"
            placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
            onFocus={() => {
              document.querySelector('.landing-search-container').classList.add('focus');
            }}
            onBlur={() => {
              document.querySelector('.landing-search-container').classList.remove('focus');
            }}
            onChange={(e) => setValue(e.target.value)}
          />
          {value !== '' ? (
            <>
              <button
                type="submit"
                className="tw-m-0 tw-py-2 tw-px-6 button-primary tw-hidden lg:tw-block font-kalameh-num te-text-base tw-font-semibold 2xl:tw-text-xl"
              >
                جستجو
              </button>
              <button
                type="submit"
                className="tw-m-0 button-primary tw-block lg:tw-hidden"
                style={{ padding: '.5rem' }}
              >
                <img src={searchWhiteIcon} alt="" />
              </button>
            </>
          ) : (
            <>
              <button className="tw-m-0 tw-py-2 tw-px-6 button-primary tw-hidden lg:tw-block font-kalameh-num te-text-base tw-font-semibold 2xl:tw-text-xl">
                جستجو
              </button>
              <button
                className="tw-m-0 button-primary tw-block lg:tw-hidden"
                style={{ padding: '.5rem' }}
              >
                <img src={searchWhiteIcon} alt="" />
              </button>
            </>
          )}
        </div>
      </form>

      <div className="tw-py-4 tw-mb-4 tw-w-full tw-max-w-screen-sm tw-mx-auto">
        <p className="text-black font-iranyekan-num tw-text-sm tw-font-medium 2xl:tw-text-xl tw-mb-2 ">
          بیشترین کلمات جستجو شده
        </p>
        <div className="tw-flex tw-flex-wrap">
          {top_search.map((item) => (
            <Link
              to={`/courses/search/?q=${item}&is_free=0&sortby=1&page=1`}
              key="1"
              className="bg-medium font-iranyekan-num tw-text-xs tw-font-normal 2xl:tw-text-sm tw-py-2 tw-px-4 tw-m-2"
              style={{ borderRadius: '6px' }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
