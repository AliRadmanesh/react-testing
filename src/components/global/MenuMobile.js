/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bars from '../../assets/icons/bars.svg';
import logoSmall from '../../assets/images/logo/karsaz/logo-small.svg';
import close from '../../assets/icons/Close-Gray.svg';
import searchIcon from '../../assets/icons/Search.svg';
import HeaderUserSection from './HeaderUserSection';

const MenuMobile = () => {
  const [show, doShow] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="mobile-menu"
      className="tw-block lg:tw-hidden"
      style={{
        background: show ? 'rgba(251, 251, 251, 1)' : 'transparent',
        zIndex: '8888',
        // marginBottom: '88px',
        top: '0',
        position: 'sticky',
      }}
    >
      <div className="container bg-white tw-flex tw-justify-between tw-items-center tw-py-4">
        <div className="tw-flex tw-items-center bg-white">
          <div role="presentation" style={{ cursor: 'pointer' }} onClick={() => doShow(true)}>
            <img src={bars} alt="" />
          </div>
          <img src={logoSmall} className="tw-mx-4" alt="" />
          <h3 className="tw-font-black text-blue">کارساز</h3>
        </div>
        <HeaderUserSection />
        {/* <div className="tw-flex tw-items-center">
          <Link to="https://google.com" className="tab tw-mx-4">
            ورود
          </Link>
          <Link
            to="https://google.com"
            className="tab tw-py-2 bg-primary font-kalameh text-white tw-px-4 tw-rounded-xl"
          >
            ثبت نام
          </Link>
        </div> */}
      </div>
      <div
        className="mobile-menu-container bg-white"
        style={{
          right: show ? '0' : '100%',
          display: show ? 'block' : 'none',
          height: '100vh',
        }}
      >
        <div
          className="tw-flex tw-flex-col tw-pb-4 top-shadow-inner"
          style={{
            // boxShadow: '-10px 10px 15px -10px #ddd inset',
            paddingRight: '16px',
            paddingLeft: '16px',
          }}
        >
          <div className="tw-flex tw-justify-between tw-items-center tw-py-4">
            <div className="tw-flex tw-items-center ">
              <div
                role="presentation"
                style={{ cursor: 'pointer' }}
                className="tw-ml-2"
                onClick={() => doShow(false)}
              >
                <img src={close} alt="" />
              </div>
              <h3 className="tab">منو</h3>
            </div>
            {/* <div className="tw-flex tw-items-center">
              <Link to="https://google.com" className="tab tw-mx-4">
                ورود
              </Link>
              <Link to="https://google.com" className="tab button-primary">
                ثبت نام
              </Link>
            </div> */}
            <HeaderUserSection />
          </div>
          <div>
            <form
              onSubmit={handleSearch}
              className="tw-grid tw-items-center mobile-menu-search-container tw-mb-4"
              style={{ gridTemplateColumns: 'auto 30px' }}
            >
              <input
                type="text"
                className="mobile-menu-search"
                placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
                onFocus={() => {
                  document.querySelector('.mobile-menu-search-container').classList.add('focus');
                }}
                onBlur={() => {
                  document.querySelector('.mobile-menu-search-container').classList.remove('focus');
                }}
              />
              <button type="submit" className="tw-p-0">
                <img src={searchIcon} alt="" className="" />
              </button>
            </form>
          </div>
          <Link to="./" className="tab tw-my-2">
            خانه
          </Link>
          <Link to="https://google.com" className="tab tw-my-2">
            دسته‌بندی &nbsp; &nbsp;
            <span
              style={{
                color: '#2C2C2C',
                width: '40px',
              }}
            >
              &rsaquo;
            </span>
          </Link>
          <Link to="https://google.com" className="tab tw-my-2">
            فرصت‌های شغلی
          </Link>
          <Link to="https://google.com" className="tab tw-my-2">
            وبلاگ
          </Link>
          <Link to="./about" className="tab tw-my-2">
            درباره ما
          </Link>
          <Link to="./contact" className="tab tw-my-2">
            تماس با ما
          </Link>
          <Link to="./faq" className="tab tw-my-2">
            سوالات متداول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;

const styles = {
  main: {
    background: 'rgba(44, 44, 44, .5)',
    height: '100vh',
  },
  container: {
    position: 'absolute',
    width: '100%',
    top: '0',
    right: '0',
    zIndex: '999999',
  },
};
