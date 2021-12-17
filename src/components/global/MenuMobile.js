/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showCategoryMobileMenu, showMenu } from '../../app/redux/actions/headerActions';
import bars from '../../assets/icons/bars.svg';
import logoSmall from '../../assets/images/logo/karsaz/logo-small.svg';
import close from '../../assets/icons/Close-Gray.svg';
import searchIcon from '../../assets/icons/Search.svg';
import HeaderUserSection from './HeaderUserSection';

const MenuMobile = () => {
  // const [show, doShow] = useState(false);
  const { showNav } = useSelector((state) => state.header);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (showNav) dispatch(showMenu(false));
    window.scrollTo(0, 0);
  }, [new URL(window.location).pathname]);

  return (
    <div
      id="mobile-menu"
      className="tw-block xl:tw-hidden"
      style={{
        background: showNav ? 'rgba(251, 251, 251, 1)' : 'transparent',
        zIndex: '8888',
        // marginBottom: '88px',
        top: '0',
        position: 'sticky',
      }}
    >
      <div className="container bg-white tw-flex tw-justify-between tw-items-center tw-py-4">
        <div className="tw-flex tw-items-center bg-white">
          <div
            role="presentation"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(showMenu(true))}
          >
            <img src={bars} alt="" />
          </div>
          <img src={logoSmall} className="tw-mx-4" alt="" />
          <h3 className="tw-font-black text-blue">کارساز</h3>
        </div>
        <HeaderUserSection />
      </div>
      <div
        className="mobile-menu-container bg-white"
        style={{
          right: showNav ? '0' : '100%',
          display: showNav ? 'block' : 'none',
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
                onClick={() => dispatch(showMenu(false))}
              >
                <img src={close} alt="" />
              </div>
              <h3 className="tab">منو</h3>
            </div>
            <HeaderUserSection />
          </div>
          <div>
            <form
              onSubmit={handleSearch}
              className="tw-grid tw-items-center mobile-menu-search-container tw-mb-4 tw-w-full"
              style={{ gridTemplateColumns: '1fr auto' }}
            >
              <input
                type="text"
                className="mobile-menu-search font-kalameh-num tw-block"
                placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
                onFocus={() => {
                  document.querySelector('.mobile-menu-search-container').classList.add('focus');
                }}
                onBlur={() => {
                  document.querySelector('.mobile-menu-search-container').classList.remove('focus');
                }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                style={{ width: '100%' }}
              />
              {value !== '' ? (
                <Link
                  to={`/courses/search/?q=${value}&is_free=0&sort=1&page=1`}
                  type="submit"
                  className="tw-p-0"
                  onClick={() => dispatch(showMenu(false))}
                >
                  <img src={searchIcon} alt="جستجو" className="" />
                </Link>
              ) : (
                <img src={searchIcon} alt="جستجو" className="" />
              )}
            </form>
          </div>
          <Link to="/" className="tw-text-sm tw-font-medium tw-my-4 font-kalameh-num">
            خانه
          </Link>
          <button
            className="tw-text-sm tw-font-medium tw-my-4 font-kalameh-num tw-p-0 tw-text-right"
            onClick={() => dispatch(showCategoryMobileMenu(true))}
          >
            دسته‌بندی &nbsp; &nbsp;
            <span
              style={{
                color: '#2C2C2C',
                width: '40px',
              }}
            >
              &rsaquo;
            </span>
          </button>
          <Link to="/jobs" className="tw-text-sm tw-font-medium tw-my-4 font-kalameh-num">
            فرصت‌های شغلی
          </Link>
          <Link to="/blogs" className="tw-text-sm tw-font-medium tw-my-4 font-kalameh-num">
            وبلاگ
          </Link>
          <Link to="/about" className="tw-text-sm tw-font-medium tw-my-4 font-kalameh-num">
            درباره ما
          </Link>
          <Link to="/contact" className="tw-text-sm tw-font-medium tw-my-4 font-kalameh-num">
            تماس با ما
          </Link>
          <Link to="/faq" className="tw-text-sm tw-font-medium tw-my-4 font-kalameh-num">
            سوالات متداول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
