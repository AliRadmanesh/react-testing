import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import ScrollToTop from './ScrollToTop';
import UserMenu from './UserMenu';
import CategoryMenuDesktop from './CategoryMenuDesktop';
import CategoryMenuMobile from './CategoryMenuMobile';

export default function PageHeaderPacific({ title, text = '', img = '' }) {
  useEffect(() => {}, []);

  return (
    <>
      <Toaster
        containerClassName="font-kalameh-num"
        toastOptions={{
          success: {
            style: {
              background: '#11b262',
              color: '#fefefe',
            },
          },
          error: {
            style: {
              background: '#b21111',
              color: '#fefefe',
            },
          },
        }}
      />
      <MenuMobile />
      <MenuDesktop />
      <UserMenu />
      <CategoryMenuDesktop />
      <CategoryMenuMobile />
      <div className="page-header tw-w-full tw-h-auto page-header-pacific tw-relative md:tw-top-2">
        <div className="container tw-flex tw-items-center tw-py-12 lg:tw-py-16 page-header-content-pacific tw-w-auto tw-pl-6">
          {img && <img src={img} alt="" />}
          <div>
            <p
              className="tw-font-extrabold page-header-title lg:tw-font-black font-kalameh text-white"
              style={{ marginBottom: '.5rem' }}
            >
              {title}
            </p>
            <p
              className="tw-text-xs font-iranyekan lg:tw-text-sm tw-font-regular text-light tw-opacity-50"
              style={{
                // visibility: text !== '' ? 'visible' : 'hidden',
                display: text !== '' ? 'initial' : 'none',
                marginTop: text !== '' ? '1.5rem' : '0',
              }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

PageHeaderPacific.propTypes = {
  title: PropTypes.string.isRequired,
};
