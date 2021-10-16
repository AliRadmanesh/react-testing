import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import ScrollToTop from './ScrollToTop';

export default function PageHeaderPacific({ title, text = '', img = '' }) {
  useEffect(() => {}, []);

  return (
    <>
      <Toaster
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
      <div className="tw-w-full tw-h-auto page-header-pacific tw-relative">
        <div className="container tw-flex tw-items-center tw-py-12 lg:tw-py-16 page-header-content-pacific tw-w-auto tw-pl-6">
          {img && <img src={img} alt="" />}
          <div>
            <p className="tw-font-extrabold page-header-title lg:tw-font-black font-kalameh text-white">
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

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
