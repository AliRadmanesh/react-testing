import React, { useState } from 'react';

import Layout from '../../../common/Layout/dashboard';
import { WalletCard, BookmarksCard, CartCard } from '../../../components/dashboard/InfoCards';

import notificationsFillIcon from '../../../assets/icons/Notification Fill.svg';

const TableItem = () => {
  const temp = 'to prevent prettier brackets removal';
  const date = new Date().toLocaleDateString('fa-IR');
  return (
    <div className="dashboard-main-table-item tw-rounded-xl tw-p-4 tw-mt-2 tw-grid tw-items-center tw-grid-cols-2 2xl:tw-text-base 2xl:tw-font-normal">
      <p className="text-black tw-truncate">{temp}</p>
      <p className="text-gray tw-truncate tw-text-left">{date}</p>
    </div>
  );
};

const Table = () => {
  const [state, setstate] = useState();
  return (
    <div className="tw-p-4 bg-white font-kalameh-num">
      <div className="tw-flex tw-items-center tw-pr-4">
        <img src={notificationsFillIcon} alt="" className="tw-w-6 tw-h-6 tw-ml-4" />
        <p className="tw-text-base tw-font-semibold 2xl:tw-text-lg text-blue">اعلان‌های جدید</p>
      </div>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
    </div>
  );
};

export default function Main() {
  return (
    <Layout>
      <div className="tw-grid tw-gap-4 tw-grid-cols-1 md:tw-grid-cols-3 tw-py-4 tw-rounded-xl">
        <CartCard />
        <BookmarksCard />
        <WalletCard />
      </div>
      <Table />
    </Layout>
  );
}
