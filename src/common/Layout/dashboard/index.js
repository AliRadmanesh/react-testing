import React from 'react';
import { Redirect } from 'react-router-dom';
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
import UserRow from '../../../components/dashboard/UserRow';
import MobileHeader from '../../../components/dashboard/MobileHeader';

export default function Layout({ children }) {
  const {
    mobile: { show: showMobileNav },
  } = useSelector((state) => state.dashboard.navigation);
  const {
    user: { authenticated },
  } = useSelector((state) => state.auth);

  if (!window.localStorage.getItem('userToken') || window.localStorage.getItem('userToken') === '')
    return <Redirect to="/auth" />;
  return (
    <div className="bg-light">
      <PopUp />
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
      {/* <MenuMobile /> */}
      <MobileHeader />
      <MenuDesktop />
      <UserMenu />
      <CategoryMenuDesktop />
      <CategoryMenuMobile />
      <div
        className="tw-fixed tw-w-full tw-top-0 tw-right-0"
        style={{ display: showMobileNav ? 'block' : 'none', zIndex: '9999' }}
      >
        <NavigationMobile />
      </div>
      <div className="bg-light tw-shadow-inner tw-pt-8">
        <div className="tw-grid tw-gap-x-6 tw-items-start dashboard-content container tw-mb-60">
          <NavigationDesktop />
          <div className="tw-overflow-x-hidden">
            <UserRow />
            <div className="tw-py-4">{children}</div>
          </div>
        </div>
      </div>
      <NavigationButton />
      <Footer />
    </div>
  );
}
