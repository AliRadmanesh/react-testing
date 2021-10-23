import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoLarge from '../../assets/images/logo/karsaz/logo-large.svg';
import searchIcon from '../../assets/icons/Search.svg';
import HeaderUserSection from './HeaderUserSection';

import { autoSuggest } from '../../app/redux/actions/searchActions';

export default function MenuDesktop() {
  const [show, doShow] = useState(false);
  const [width, setWidth] = useState('160px');

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth >= 1280) setWidth('220px');
  });

  const suggest = (e) => {
    dispatch(autoSuggest(e.target.value));
  };

  return (
    <div className="tw-w-full tw-hidden lg:tw-block" style={{ marginBottom: '96px' }}>
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
            to="./"
            className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
          >
            خانه
          </Link>
          <Link
            to="https://google.com"
            className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
          >
            دسته‌بندی &nbsp; &nbsp;
            <span
              style={{
                transform: 'rotateY(-45deg)',
                color: '#2C2C2C',
                width: '10px',
              }}
            >
              &lsaquo;
            </span>
          </Link>
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
            to="./about"
            className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
          >
            درباره ما
          </Link>
          <Link
            to="./contact"
            className="tw-text-sm tw-font-medium font-kalameh 2xl:tw-text-lg 2xl:tw-font-semibold text-black tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8"
          >
            تماس با ما
          </Link>
          <Link
            to="./faq"
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
                  onChange={suggest}
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
          </div>
          <HeaderUserSection />
        </div>
      </div>
    </div>
  );
}
