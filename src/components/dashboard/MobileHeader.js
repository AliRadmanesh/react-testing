/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showCategoryMobileMenu, showMenu } from '../../app/redux/actions/headerActions';
import bars from '../../assets/icons/bars.svg';
import logotype from '../../assets/images/logo/karsaz/logotype.png';
import close from '../../assets/icons/Close-Gray.svg';
import searchIcon from '../../assets/icons/Search.svg';
import HeaderUserSection from '../global/HeaderUserSection';
import NavigationMobile from './NavigationMobile';

function MenuHeader() {
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
      <div className="bg-white tw-flex tw-justify-between tw-items-center tw-p-4">
        <div className="tw-flex tw-items-center bg-white">
          <div
            role="presentation"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(showMenu(true))}
          >
            <img src={bars} alt="" />
          </div>
          <img src={logotype} className="tw-mx-4 tw-w-20" alt="" />
          {/* <h3 className="tw-font-black text-blue">کارساز</h3> */}
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
          className="tw-flex tw-flex-col tw-pb-4 top-shadow-inner tw-h-full"
          style={
            {
              // boxShadow: '-10px 10px 15px -10px #ddd inset',
              // paddingRight: '16px',
              // paddingLeft: '16px',
            }
          }
        >
          <div className="tw-flex tw-px-4 tw-justify-between tw-items-center tw-py-4">
            <div className="tw-flex tw-items-center ">
              <div
                role="presentation"
                style={{ cursor: 'pointer' }}
                className="tw-ml-2"
                onClick={() => dispatch(showMenu(false))}
              >
                <img src={close} alt="" />
              </div>
              <h3 className="tab">منو داشبورد</h3>
            </div>
          </div>
          <NavigationMobile />
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
