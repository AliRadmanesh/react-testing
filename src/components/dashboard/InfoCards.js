import React from 'react';
import walletPaleIcon from '../../assets/icons/Dashboard/wallet-pale.svg';
import bookmarkPaleIcon from '../../assets/icons/Dashboard/bookmark-pale.svg';
import cartPaleIcon from '../../assets/icons/Dashboard/cart-pale.svg';
import giftPaleIcon from '../../assets/icons/Dashboard/gift-pale.svg';
import { numberWithCommas } from '../../common/Functions';

console.log(2);
// eslint-disable-next-line arrow-body-style
export const WalletCard = ({ wallet }) => {
  return (
    <div className="bg-primary-light tw-p-4 tw-flex tw-justify-between font-kalameh-num tw-items-center tw-rounded-xl">
      <div className="">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-xl 2xl:tw-font-normal">
          کیف پول
        </p>
        <p className="tw-text-xs tw-font-normal text-gray 2xl:tw-text-base">تومان</p>
      </div>
      <p className="tw-font-extrabold text-blue tw-text-xl 2xl:tw-text-3xl 2xl:tw-font-black">
        {numberWithCommas(wallet.balance)}
      </p>
      <img alt="" src={walletPaleIcon} className="tw-w-8 2xl:tw-w-16 tw-h-8 2xl:tw-h-16" />
    </div>
  );
};

// eslint-disable-next-line arrow-body-style
export const BookmarksCard = ({ bookmarks }) => {
  return (
    <div className="bg-warning-light tw-p-4 tw-flex tw-justify-between font-kalameh-num tw-items-center tw-rounded-xl">
      <div className="">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-xl 2xl:tw-font-normal">
          بوک‌ماارک‌ها
        </p>
      </div>
      <p className="tw-font-extrabold text-warning tw-text-xl 2xl:tw-text-3xl 2xl:tw-font-black">
        {bookmarks.sum}
      </p>
      <img alt="" src={bookmarkPaleIcon} className="tw-w-8 2xl:tw-w-16 tw-h-8 2xl:tw-h-16" />
    </div>
  );
};

// eslint-disable-next-line arrow-body-style
export const CartCard = ({ purchases }) => {
  return (
    <div className="bg-success-light tw-p-4 tw-flex tw-justify-between font-kalameh-num tw-items-center tw-rounded-xl">
      <div className="">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-xl 2xl:tw-font-normal">
          خرید‌ها
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base">
          <span className="text-gray">تومان</span>{' '}
          <span className="text-black">{purchases.amount}</span>
        </p>
      </div>
      <p className="tw-font-extrabold text-success tw-text-xl 2xl:tw-text-3xl 2xl:tw-font-black">
        {purchases.count}
      </p>
      <img alt="" className="tw-w-8 2xl:tw-w-16 tw-h-8 2xl:tw-h-16" src={cartPaleIcon} />
    </div>
  );
};

// eslint-disable-next-line arrow-body-style
export const AmountCard = ({ cashback }) => {
  return (
    <div className="bg-warning-light tw-p-4 tw-flex tw-justify-between font-kalameh-num tw-items-center tw-rounded-xl">
      <div className="">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-xl 2xl:tw-font-normal">
          مبلغ دریافتی
        </p>
        <p className="tw-text-xs tw-font-normal text-gray 2xl:tw-text-base">تومان</p>
      </div>
      <p className="tw-font-extrabold text-warning tw-text-xl 2xl:tw-text-3xl 2xl:tw-font-black">
        {cashback.amount}
      </p>
      <img alt="" src={giftPaleIcon} className="tw-w-8 2xl:tw-w-16 tw-h-8 2xl:tw-h-16" />
    </div>
  );
};
