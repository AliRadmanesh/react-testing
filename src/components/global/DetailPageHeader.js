import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import ScrollToTop from './ScrollToTop';
import UserMenu from './UserMenu';

export default function DetailPageHeader() {
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
      <UserMenu />
      <ScrollToTop />
    </>
  );
}
