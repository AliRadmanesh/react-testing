import React from 'react';
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

// import styles from '../../features/dashboard/dashboard.module.css';

// const classes = {
//   dashboardItem: `tw-flex tw-items-center ${styles.dashboardItem}`,
// };

export default function NavigationDesktop() {
  return (
    <div
      className="tw-h-auto tw-rounded-xl tw-hidden tw-flex-col lg:tw-flex tw-w-full bg-white"
      style={{ maxHeight: '912px' }}
    >
      <div>
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
      <button
        type="button"
        className="button-error tw-mx-4 tw-mb-4 tw-mt-20 tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl"
      >
        خروج از حساب
      </button>
    </div>
  );
}
