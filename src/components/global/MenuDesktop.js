import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoLarge from '../../assets/images/logo/karsaz/logo-large.svg';
import searchIcon from '../../assets/icons/Search.svg';
import HeaderUserSection from './HeaderUserSection';

export default function MenuDesktop() {
  const [show, doShow] = useState(false);
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
          zIndex: '100',
        }}
      >
        <div className="tw-flex tw-items-center tw-py-2">
          <Link to="./" className="tab tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12 tw-flex tw-items-center">
            <img src={logoLarge} alt="" />
            <h3 className="tw-mr-4 tw-font-black text-blue">کارساز</h3>
          </Link>
          <Link
            to="./"
            className="tab tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12"
          >
            خانه
          </Link>
          <Link
            to="https://google.com"
            className="tab tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12"
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
            className="tab tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12"
          >
            فرصت‌های شغلی
          </Link>
          <Link
            to="https://google.com"
            className="tab tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12"
          >
            وبلاگ
          </Link>
          <Link
            to="./about"
            className="tab tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12"
          >
            درباره ما
          </Link>
          <Link
            to="./contact"
            className="tab tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12"
          >
            تماس با ما
          </Link>
          <Link
            to="./faq"
            className="tab tw-transition-colors tw-duration-200 tw-ease-in-out text-primary-hover"
          >
            سوالات متداول
          </Link>
        </div>
        <div className="tw-flex tw-align-middle tw-items-center tw-justify-items-center">
          <div
            id="auth-header-desktop-search"
            className="auth-header-desktop-search tw-flex tw-flex-row tw-items-center border-smooth tw-ml-4"
          >
            <div className="hoverer tw-z-0 tw-relative">
              <input
                ckassName="font-kalameh tw-block"
                placeholder="دوره یا آموزشگاه را جستجو کنید..."
                type="text"
                style={{
                  width: show ? '220px' : '0',
                  // {display: show ? 'initial' : 'none',}
                }}
              />
            </div>

            <button
              className="button-secondary"
              style={{ border: 'none', background: 'transparent' }}
              onClick={() => (show ? doShow(false) : doShow(true))}
            >
              <img src={searchIcon} alt="" className="" />
            </button>
          </div>
          <HeaderUserSection />
        </div>
      </div>
    </div>
  );
}
