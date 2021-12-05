import React from 'react';
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
        <NavigationItem
          src={dashboardIcon}
          fill={dashboardFillIcon}
          section="dashboard"
          title="داشبورد"
        />
        <NavigationItem
          src={favoritesIcon}
          fill={favoritesFillIcon}
          section="favorites"
          title="علاقه‌مندی‌ها"
        />
        <NavigationItem
          src={bookmarkIcon}
          fill={bookmarkFillIcon}
          section="bookmarks"
          title="بوک‌مارک‌ها"
        />
        <NavigationItem src={cartIcon} fill={cartFillIcon} section="cart" title="خریدها" />
        <NavigationItem src={walletIcon} fill={walletFillIcon} section="wallet" title="کیف پول" />
        <NavigationItem
          src={transactionIcon}
          fill={transactionFillIcon}
          section="transactions"
          title="تراکنش‌ها"
        />
        <NavigationItem
          src={notificationsIcon}
          fill={notificationsFillIcon}
          section="notifications"
          title="اعلان‌ها"
        />
        <NavigationItem src={editIcon} fill={editFillIcon} section="edit" title="ویرایش پروفایل" />
      </div>
      <button type="button" className="button-error container tw-mx-4 tw-mb-4">
        خروج از حساب
      </button>
    </div>
  );
}
