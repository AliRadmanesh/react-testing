import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderUserSection from '../global/HeaderUserSection';
import logoLarge from '../../assets/images/logo/karsaz/logo-large.svg';
import searchIcon from '../../assets/icons/Search.svg';
import UserMenu from '../global/UserMenu';

const MenuDesktop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, doShow] = useState(false);
  const [width, setWidth] = useState('160px');

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrollY(window.scrollY);
    });

    if (window.innerWidth >= 1280) setWidth('220px');
  }, []);

  return (
    <>
      <div className="tw-w-full" style={{}}>
        <div
          id="desktop-menu"
          className="tw-hidden container tw-w-full lg:tw-flex tw-justify-between tw-items-center tw-py-4 2xl:tw-py-8"
          style={{
            position: 'fixed',
            top: '0',
            background: scrollY === 0 ? 'transparent' : '#fbfbfb',
            transition: 'background .7s, top .7s',
            zIndex: '8888',
          }}
        >
          <div className="tw-flex tw-items-center tw-py-2">
            <Link to="https://google.com" className="tw-ml-4 lg:tw-ml-8 tw-flex tw-items-center">
              <img src={logoLarge} alt="" />
              <h3 className="tw-mr-4 tw-font-black text-blue">کارساز</h3>
            </Link>
            <Link
              to="https://google.com"
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
            <div
              id="page-header-desktop-search"
              className="page-header-desktop-search tw-flex tw-flex-row tw-items-center border-smooth tw-py-1 tw-ml-4"
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
            <HeaderUserSection />
          </div>
        </div>
      </div>
      <UserMenu />
    </>
  );
};

export default MenuDesktop;
