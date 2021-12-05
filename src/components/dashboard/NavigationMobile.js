import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavigationItem from './NavigationItem';

import dashboardIcon from '../../assets/icons/Dashboard.svg';
import dashboardFillIcon from '../../assets/icons/Dashboard Fill.svg';
import favoritesIcon from '../../assets/icons/Favorites.svg';
import favoritesFillIcon from '../../assets/icons/Favorites Fill.svg';
import bookmarkIcon from '../../assets/icons/Bookmark.svg';
import bookmarkFillIcon from '../../assets/icons/Bookmark Fill.svg';
import cartIcon from '../../assets/icons/Cart.svg';
import cartFillIcon from '../../assets/icons/Cart Fill.svg';
import walletIcon from '../../assets/icons/Wallet.svg';
import walletFillIcon from '../../assets/icons/Wallet Fill.svg';
import transactionIcon from '../../assets/icons/List.svg';
import transactionFillIcon from '../../assets/icons/List Fill.svg';
import notificationsIcon from '../../assets/icons/Notification.svg';
import notificationsFillIcon from '../../assets/icons/Notification Fill.svg';
import editIcon from '../../assets/icons/Edit.svg';
import editFillIcon from '../../assets/icons/Edit Fill.svg';
import close from '../../assets/icons/Close-Gray.svg';

import { showDashboardMobileMenu } from '../../app/redux/actions/dashboardActions';

export default function NavigationMobile() {
  const dispatch = useDispatch();
  const section = window.location.href.split('me/')[1];

  return (
    <div className="bg-light tw-h-screen tw-flex tw-flex-col lg:tw-hidden tw-justify-between">
      <div>
        <div
          className="tw-flex tw-items-center tw-py-4 container"
          style={{ boxShadow: '0 0 5px 5px #efefef' }}
        >
          <button className="tw-p-0" onClick={() => dispatch(showDashboardMobileMenu(false))}>
            <img src={close} alt="بستن" className="menu-icon" />
          </button>
          <p className="tw-text-base tw-mx-4 font-kalameh">منوی داشبورد</p>
        </div>
        <Link to="../me/dashboard">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'dashboard'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img
              src={section === 'dashboard' ? dashboardFillIcon : dashboardIcon}
              alt=""
              className="menu-icon"
            />
            <span
              className={
                section === 'dashboard'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              داشبورد
            </span>
          </span>
        </Link>
        <Link to="../me/favorites">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'favorites'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img
              src={section === 'favorites' ? favoritesFillIcon : favoritesIcon}
              alt=""
              className="menu-icon"
            />
            <span
              className={
                section === 'favorites'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              علاقه‌مندی‌ها
            </span>
          </span>
        </Link>
        <Link to="../me/bookmarks">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'bookmarks'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img
              src={section === 'bookmarks' ? bookmarkFillIcon : bookmarkIcon}
              alt=""
              className="menu-icon"
            />
            <span
              className={
                section === 'bookmarks'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              بوک‌مارک‌ها
            </span>
          </span>
        </Link>
        <Link to="../me/purchases">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'purchases'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img
              src={section === 'purchases' ? cartFillIcon : cartIcon}
              alt=""
              className="menu-icon"
            />
            <span
              className={
                section === 'purchases'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              خریدها
            </span>
          </span>
        </Link>
        <Link to="../me/wallet">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'wallet'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img
              src={section === 'wallet' ? walletFillIcon : walletIcon}
              alt=""
              className="menu-icon"
            />
            <span
              className={
                section === 'wallet'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              کیف پول
            </span>
          </span>
        </Link>
        <Link to="../me/transactions">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'transactions'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img
              src={section === 'transactions' ? transactionFillIcon : transactionIcon}
              alt=""
              className="menu-icon"
            />
            <span
              className={
                section === 'transactions'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              تراکنش‌ها
            </span>
          </span>
        </Link>
        <Link to="../me/notifications">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'notifications'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img
              src={section === 'notifications' ? notificationsFillIcon : notificationsIcon}
              alt=""
              className="menu-icon"
            />
            <span
              className={
                section === 'notifications'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              اعلان‌ها
            </span>
          </span>
        </Link>
        <Link to="../me/edit">
          <span className="tw-flex tw-my-6 tw-items-center dashboard-item">
            <span
              className={
                section === 'edit'
                  ? 'bg-primary dashboard-item-indicator active tw-h-full'
                  : 'bg-primary dashboard-item-indicator tw-h-full'
              }
            />
            <img src={section === 'edit' ? editFillIcon : editIcon} alt="" className="menu-icon" />
            <span
              className={
                section === 'edit'
                  ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
                  : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
              }
            >
              ویرایش پروفایل
            </span>
          </span>
        </Link>
      </div>
      <button type="button" className="button-error container tw-mx-4 tw-mb-4">
        خروج از حساب
      </button>
    </div>
  );
}
