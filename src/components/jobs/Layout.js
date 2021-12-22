import React from 'react';
import { Toaster } from 'react-hot-toast';
import MenuDesktop from '../global/MenuDesktop';
import MenuMobile from '../global/MenuMobile';
import ScrollToTop from '../global/ScrollToTop';
import UserMenu from '../global/UserMenu';
import CategoryMenuDesktop from '../global/CategoryMenuDesktop';
import CategoryMenuMobile from '../global/CategoryMenuMobile';
import Footer from '../global/Footer';
import SearchBox from './SearchBox';

export default function Layout({ children }) {
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
      <div className="bg-light">
        <div style={{ position: 'relative' }}>
          <div
            style={{
              height: 'auto',
              display: 'block',
            }}
          >
            <div className="jobs-page-bg-pattern" style={{ zIndex: '-2' }}>
              <div className="jobs-page-bg-fade" style={{ zIndex: '-1' }} />
              <div
                className="container tw-py-4 lg:tw-pb-10 lg:tw-pt-12"
                style={{ width: '100%', height: '100%' }}
              >
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <div>{children}</div>
      <Footer />
    </>
  );
}
