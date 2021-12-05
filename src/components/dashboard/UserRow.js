import React from 'react';
import { Link } from 'react-router-dom';
import notificationsFillIcon from '../../assets/icons/Notification Fill.svg';
import editFillIcon from '../../assets/icons/Edit Fill.svg';

export default function UserRow() {
  return (
    <div className="dashboard-user-row font-kalameh-num bg-white tw-flex tw-justify-between tw-items-center tw-p-4">
      <div className="tw-flex tw-items-center">
        {/* User Avatar */}
        <div className="tw-ml-4 tw-rounded-xl avatar tw-bg-red-500" />
        <div className="tw-block tw-w-auto">
          <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-lg 2xl:tw-font-semibold">
            نام و نام خانوادگی
          </p>
          <p className="text-gray tw-text-sm tw-font-normal 2xl:tw-text-base">عنوان شغلی</p>
        </div>
      </div>
      <div className="tw-flex tw-items-center">
        <Link to="./edit" className="tw-p-2 2xl:tw-p-3 tw-rounded-xl bg-primary-light">
          <img src={editFillIcon} alt="ویرایش" className="tw-w-6 tw-h-6" />
        </Link>
        <Link
          to="./notifications"
          className="tw-mr-2 tw-p-2 2xl:tw-p-3 tw-rounded-xl bg-primary-light"
        >
          <img src={notificationsFillIcon} alt="اعلان‌ها" className="tw-w-6 tw-h-6" />
        </Link>
      </div>
    </div>
  );
}
