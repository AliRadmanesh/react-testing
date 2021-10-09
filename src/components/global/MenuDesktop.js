import React from 'react';
import { Link } from 'react-router-dom';
import logoLarge from '../../assets/images/logo/karsaz/logo-large.svg';
import searchIcon from '../../assets/icons/Search.svg';

export default function MenuDesktop() {
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
          zIndex: '1000000',
        }}
      >
        <div className="tw-flex tw-items-center tw-py-2">
          <Link
            to="https://google.com"
            className="tab tw-ml-4 lg:tw-ml-8 2xl:tw-ml-12 tw-flex tw-items-center"
          >
            <img src={logoLarge} alt="" />
            <h3 className="tw-mr-4 tw-font-black text-blue">کارساز</h3>
          </Link>
          <Link
            to="https://google.com"
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
          <div className="search-button">
            <img src={searchIcon} alt="" style={{}} />
          </div>
          <Link to="https://google.com" className="tab tw-mx-4">
            ورود
          </Link>
          <Link to="https://google.com" className="tab button-primary">
            ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
}
