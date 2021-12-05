import React from 'react';
import walletPaleIcon from '../../assets/icons/Dashboard/wallet-pale.svg';
import bookmarkPaleIcon from '../../assets/icons/Dashboard/bookmark-pale.svg';
import cartPaleIcon from '../../assets/icons/Dashboard/cart-pale.svg';

export const WalletCard = () => {
  const balance = 1520000;
  return (
    <div className="bg-primary-light tw-p-4 tw-flex tw-justify-between font-kalameh-num tw-items-center tw-rounded-xl">
      <div className="">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-xl 2xl:tw-font-normal">
          کیف پول
        </p>
        <p className="tw-text-xs tw-font-normal text-gray 2xl:tw-text-base">تومان</p>
      </div>
      <p className="tw-font-extrabold text-blue tw-text-xl 2xl:tw-text-3xl 2xl:tw-font-black">
        {balance}
      </p>
      <div
        style={{ backgroundImage: `url("${walletPaleIcon}")` }}
        className="tw-w-8 2xl:tw-w-16 tw-h-8 2xl:tw-h-16"
      />
    </div>
  );
};

export const BookmarksCard = () => {
  const balance = 1520000;
  return (
    <div className="bg-warning-light tw-p-4 tw-flex tw-justify-between font-kalameh-num tw-items-center tw-rounded-xl">
      <div className="">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-xl 2xl:tw-font-normal">
          بوک‌ماارک‌ها
        </p>
      </div>
      <p className="tw-font-extrabold text-warning tw-text-xl 2xl:tw-text-3xl 2xl:tw-font-black">
        {balance}
      </p>
      <div
        style={{ backgroundImage: `url("${bookmarkPaleIcon}")` }}
        className="tw-w-8 2xl:tw-w-16 tw-h-8 2xl:tw-h-16"
      />
    </div>
  );
};

export const CartCard = () => {
  const balance = 1520000;
  return (
    <div className="bg-success-light tw-p-4 tw-flex tw-justify-between font-kalameh-num tw-items-center tw-rounded-xl">
      <div className="">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-xl 2xl:tw-font-normal">
          خرید‌ها
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base">
          <span className="text-gray">تومان</span> <span className="text-black">{balance}</span>
        </p>
      </div>
      <p className="tw-font-extrabold text-success tw-text-xl 2xl:tw-text-3xl 2xl:tw-font-black">
        {balance}
      </p>
      <div
        className="tw-w-8 2xl:tw-w-16 tw-h-8 2xl:tw-h-16"
        style={{ backgroundImage: `url("${cartPaleIcon}")` }}
      />
    </div>
  );
};
