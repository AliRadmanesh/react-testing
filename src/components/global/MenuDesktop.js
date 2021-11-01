import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showCategoryDesktopMenu } from '../../app/redux/actions/headerActions';
import logoLarge from '../../assets/images/logo/karsaz/logo-large.svg';
import searchIcon from '../../assets/icons/Search.svg';
import HeaderUserSection from './HeaderUserSection';

import { autoSuggest, hideSuggest } from '../../app/redux/actions/searchActions';
import { setCoursesQuery } from '../../app/redux/actions/coursesActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function MenuDesktop() {
  const ref = useRef();
  const [show, doShow] = useState(false);
  const [width, setWidth] = useState('160px');
  const dispatch = useDispatch();
  const { categoryDesktop } = useSelector((state) => state.header);
  const { list, show: showSuggests } = useSelector((state) => state.search.suggest);

  const handleSuggests = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      ref.current.style.display !== 'none'
    ) {
      dispatch(hideSuggest());
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1280) setWidth('220px');

    document.addEventListener('click', handleSuggests);

    return () => {
      document.removeEventListener('click', handleSuggests);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="tw-relative">
      <div className="tw-w-full tw-hidden xl:tw-block" style={{ marginBottom: '96px' }}>
        <div
          id="desktop-menu"
          className="container tw-w-full tw-justify-between tw-flex tw-items-center tw-py-4"
          style={{
            position: 'fixed',
            top: '0',
            background: '#fbfbfb',
            transition: 'background .7s',
            zIndex: '8888',
          }}
        >
          <div className="tw-flex tw-items-center tw-py-2">
            <Link to="./" className=" tw-ml-4 lg:tw-ml-8 tw-flex tw-items-center">
              <img src={logoLarge} alt="" />
              <h3 className="tw-mr-4 tw-font-black text-blue">کارساز</h3>
            </Link>
            <Link
              to="../"
              className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
            >
              خانه
            </Link>
            <button
              className="tw-flex tw-text-sm tw-p-0 tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
              onClick={() => dispatch(showCategoryDesktopMenu(!categoryDesktop))}
            >
              دسته‌بندی &nbsp; &nbsp;
              <img src={arrow} alt="" className="inline-block" />
            </button>
            <Link
              to="https://google.com"
              className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
            >
              فرصت‌های شغلی
            </Link>
            <Link
              to="https://google.com"
              className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
            >
              وبلاگ
            </Link>
            <Link
              to="../about"
              className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
            >
              درباره ما
            </Link>
            <Link
              to="../contact"
              className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
            >
              تماس با ما
            </Link>
            <Link
              to="../faq"
              className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover"
            >
              سوالات متداول
            </Link>
          </div>
          <div className="tw-flex tw-align-middle tw-items-center tw-justify-items-center">
            <div className="tw-relative">
              <div
                id="page-header-desktop-search"
                className="page-header-desktop-search tw-flex tw-flex-row tw-items-center tw-py-1 border-smooth tw-ml-4"
              >
                <div className="hoverer tw-z-0 tw-relative" style={{ fontFamily: 'kalamehWeb' }}>
                  <input
                    className="tw-block"
                    placeholder="جستجوی دوره، مدرس، آموزشگاه..."
                    type="text"
                    style={{
                      width: show ? width : '0',
                      // {display: show ? 'initial' : 'none',}
                    }}
                    onChange={(e) => dispatch(autoSuggest(e.target.value))}
                  />
                </div>

                <button
                  className="button-secondary"
                  style={{
                    background: 'transparent',
                    padding: '1rem',
                    borderColor: show && 'transparent',
                  }}
                  onClick={() => (show ? doShow(false) : doShow(true))}
                >
                  <img src={searchIcon} alt="" className="" />
                </button>
              </div>
              <div
                className="tw-absolute bg-white tw-rounded-xl tw-shadow-sm"
                ref={ref}
                style={{ display: showSuggests ? 'block' : 'none' }}
              >
                {list.length !== 0 &&
                  list.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="tw-p-4 bg-white autosuggest-item font-kalameh-num tw-w-full hover:tw-bg-gray-200 tw-cursor-pointer"
                    >
                      {item.title}
                    </div>
                  ))}
              </div>
            </div>
            <HeaderUserSection />
          </div>
        </div>
      </div>
    </div>
  );
}
