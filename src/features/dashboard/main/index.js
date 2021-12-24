import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../../common/Layout/dashboard';
import { WalletCard, BookmarksCard, CartCard } from '../../../components/dashboard/InfoCards';

import notificationsFillIcon from '../../../assets/icons/Notification Fill.svg';
import {
  getDashboardData,
  closeDashboardModal,
  showDashboardModal,
} from '../../../app/redux/actions/dashboardActions';

import { Modal } from '../notifications';

const TableItem = ({ props }) => {
  const temp = 'to prevent prettier brackets removal';
  const date = new Date().toLocaleDateString('fa-IR');

  const {
    created_at,
    notification: { title, body },
  } = props;

  const dispatch = useDispatch();

  return (
    <div className="dashboard-main-table-item tw-rounded-xl tw-p-4 tw-mt-2 tw-grid tw-items-center tw-grid-cols-2 2xl:tw-text-base 2xl:tw-font-normal">
      <p
        className="text-black tw-truncate text-primary-hover tw-cursor-pointer"
        role="none"
        onClick={() => dispatch(showDashboardModal(props))}
      >
        {title}: {body}
      </p>
      <p className="text-gray tw-truncate tw-text-left">{created_at}</p>
    </div>
  );
};

const Table = () => {
  const {
    dashboard: { notifications },
  } = useSelector((state) => state.dashboard);

  return (
    <div className="tw-p-4 bg-white font-kalameh-num">
      <div className="tw-flex tw-items-center tw-pr-4">
        <img src={notificationsFillIcon} alt="" className="tw-w-6 tw-h-6 tw-ml-4" />
        <p className="tw-text-base tw-font-semibold 2xl:tw-text-lg text-blue">اعلان‌های جدید</p>
      </div>
      {notifications.map((item) => (
        <TableItem props={item} key={item.id} />
      ))}
    </div>
  );
};

export default function Main() {
  const {
    dashboard: {
      stat: { purchases, bookmarks, wallet },
    },
  } = useSelector((state) => state.dashboard);
  const {
    modal: { show },
  } = useSelector((state) => state.dashboard);
  const [props, setProps] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  return (
    <Layout>
      <Modal show={show} props={props !== null && props} />
      <div className="tw-grid tw-gap-4 tw-grid-cols-1 md:tw-grid-cols-3 tw-py-4 tw-rounded-xl">
        <CartCard purchases={purchases} />
        <BookmarksCard bookmarks={bookmarks} />
        <WalletCard wallet={wallet} />
      </div>
      <Table />
    </Layout>
  );
}
