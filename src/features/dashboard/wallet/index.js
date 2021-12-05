import React from 'react';
import Layout from '../../../common/Layout/dashboard';
import { WalletCard, CartCard, AmountCard } from '../../../components/dashboard/InfoCards';

export default function Wallet() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <div className="tw-grid tw-gap-4 dashboard-wallet-container tw-items-start">
        <div className="tw-grid tw-grid-rows-3 tw-gap-4 lg:tw-hidden">
          <CartCard />
          <AmountCard />
          <WalletCard />
        </div>
        <div className="bg-white tw-p-4 font-kalameh-num">
          <p className="2xl:tw-text-lg tw-font-semibold tw-text-base text-blue">
            برداشت از کیف پول
          </p>
          <p className="tw-text-xs tw-font-normal text-black 2xl:tw-text-base">
            کاربر گرامی شما می توانید مبلغ مورد نظر خود را از کیف پول خود برداشت کنید.
          </p>
          <p className="tw-mt-6 tw-text-base tw-font-normal 2xl:tw-text-lg 2xl:tw-font-semibold text-black">
            مبلغ
          </p>
          <form onSubmit={onSubmit} className="tw-mt-2 tw-grid dashboard-wallet-form tw-gap-4">
            <div className="tw-flex tw-items-center tw-w-full">
              <input
                type="number"
                placeholder="مبلغ برداشت را وارد نمایید برای مثال 100,000"
                className="bg-error tw-w-full tw-relative"
                style={{ borderRadius: '0 12px 12px 0' }}
              />
              <span
                className="tw-px-2 md:tw-px-4 xl:tw-px-6 text-gray bg-dark-gray tw-h-full tw-grid tw-place-items-center"
                style={{ borderRadius: '12px 0 0 12px' }}
              >
                تومان
              </span>
            </div>
            <button
              type="submit"
              className="button-primary tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl"
            >
              برداشت از کیف پول
            </button>
          </form>
        </div>
        <div className="tw-hidden tw-grid-rows-3 tw-gap-4 lg:tw-grid">
          <CartCard />
          <AmountCard />
          <WalletCard />
        </div>
      </div>
    </Layout>
  );
}
