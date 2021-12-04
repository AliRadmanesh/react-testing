import React from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import NavigationMobile from '../../../components/dashboard/NavigationMobile';
import NavigationDesktop from '../../../components/dashboard/NavigationDesktop';
import PopUp from '../../../components/dashboard/PopUp';
import MenuDesktop from '../../../components/global/MenuDesktop';
import MenuMobile from '../../../components/global/MenuMobile';
import CategoryMenuDesktop from '../../../components/global/CategoryMenuDesktop';
import CategoryMenuMobile from '../../../components/global/CategoryMenuMobile';
import UserMenu from '../../../components/global/UserMenu';
import NavigationButton from '../../../components/dashboard/NavigationButton';
import Footer from '../../../components/global/Footer';

export default function Layout({ children }) {
  const {
    mobile: { show: showMobileNav },
  } = useSelector((state) => state.dashboard.navigation);

  return (
    <div className="bg-light">
      <>
        <PopUp />
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
      </>
      <div style={{ display: showMobileNav ? 'block' : 'none' }}>
        <NavigationMobile />
      </div>
      <div className="layout-content bg-light">
        <div className="tw-grid tw-gap-x-4 tw-items-start dashboard-content container">
          <NavigationDesktop />
          <div className="">{children}</div>
        </div>
      </div>
      <NavigationButton />
      <Footer />
    </div>
  );
}
