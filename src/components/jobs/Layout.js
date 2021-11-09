import React from 'react';
import { Toaster } from 'react-hot-toast';
import MenuDesktop from '../global/MenuDesktop';
import MenuMobile from '../global/MenuMobile';
import ScrollToTop from '../global/ScrollToTop';
import UserMenu from '../global/UserMenu';
import CategoryMenuDesktop from '../global/CategoryMenuDesktop';
import CategoryMenuMobile from '../global/CategoryMenuMobile';
import Footer from '../global/Footer';
import Search from './Search';

export default function Layout({ children }) {
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
      <CategoryMenuDesktop />
      <CategoryMenuMobile />
      <div className="bg-light">
        <div className="" style={{ position: 'relative' }}>
          <div className="" style={{ height: 'auto', display: 'block' }}>
            <div className="jobs-page-bg-pattern" style={{ zIndex: '-2' }}>
              <div className="jobs-page-bg-fade" style={{ zIndex: '-1' }} />
              <div className="container tw-py-4" style={{ width: '100%', height: '100%' }}>
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
