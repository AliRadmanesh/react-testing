/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../../common/Layout/dashboard';
import {
  getDashboardNotifications,
  closeDashboardModal,
  showDashboardModal,
  changeNotifViewStatus,
} from '../../../app/redux/actions/dashboardActions';

import closeIcon from '../../../assets/icons/Close Fill Light.svg';

export function Modal() {
  const {
    modal: { show, data },
  } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  return (
    <div
      className="tw-fixed tw-top-0 tw-right-0 tw-h-full tw-w-full modal-box-container tw-p-4"
      style={{
        zIndex: '9999',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: show ? 'grid' : 'none',
        placeItems: 'center',
      }}
    >
      <div
        style={{ zIndex: '999999' }}
        className="tw-relative tw-w-full md:tw-w-5/6 xl:tw-w-3/4 2xl:tw-w-2/3"
      >
        <button
          className="tw-p-0 tw-mb-2 tw-block tw-w-auto"
          onClick={() => dispatch(closeDashboardModal())}
        >
          <img src={closeIcon} alt="" />
        </button>
        <div className="tw-rounded-xl bg-light font-kalameh-num text-dark tw-p-4">
          <div>
            <div className="tw-flex tw-justify-between tw-items-center">
              <p className="tw-text-base 2xl:tw-text-xl tw-font-medium 2xl:tw-font-semibold">
                {data.notification.title}
              </p>
              <p className="tw-text-xs 2xl:tw-text-base tw-font-normal text-gray">
                {data.created_at}
              </p>
            </div>
            <p className="tw-text-sm tw-font-normal 2xl:tw-text-lg">{data.notification.body}</p>
          </div>
          <div className="tw-flex tw-justify-center">
            {data.data.type === '1' && data.data.link_url && (
              <Link
                className="button-primary tw-p-4"
                to={{ pathname: data.data.link_url }}
                target="_blank"
              >
                {data.data.link_title}
              </Link>
            )}
            {data.data.type === '2' && (
              <Link
                to={`/course/${data.data.id}`}
                target="_blank"
                className="button-primary tw-p-4"
              >
                جزئیات
              </Link>
            )}
            {data.data.type === '3' && (
              <Link to={`/job/${data.data.id}`} target="_blank" className="button-primary tw-p-4">
                جزئیات
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Notifications() {
  const [section, setSection] = useState(1);
  const dispatch = useDispatch();
  const {
    modal: { show },
  } = useSelector((state) => state.dashboard);

  const {
    notifications: { user_notifications, multicast_notifications },
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardNotifications());
  }, []);

  return (
    <Layout>
      <Modal show={show} />
      <div className="tw-my-4 tw-relative">
        {/* Indicator Line */}
        <div
          className="tw-absolute bg-primary 2xl:tw-w-28 lg:tw-w-20 tw-w-16 tw-h-1 tw-top-0"
          style={{
            borderRadius: '0 0 12px 12px',
            right: section === 1 ? '25%' : '75%',
            transform: 'translateX(50%)',
            transition: 'right .7s ease-in-out',
          }}
        />
        {/* Tabs */}
        <div className="tw-rounded-xl tw-font-medium tw-grid tw-grid-cols-2 tw-place-items-center font-kalameh-num tw-w-full tw-py-4 2xl:tw-py-8 bg-primary-pale">
          <div
            className={
              section === 1
                ? 'tw-text-sm tw-cursor-pointer tw-font-medium 2xl:tw-text-xl text-blue'
                : 'tw-text-sm tw-cursor-pointer tw-font-normal 2xl:tw-text-xl 2xl:tw-font-medium text-black'
            }
            role="none"
            onClick={() => setSection(1)}
          >
            اعلان‌‌های شخصی
          </div>
          <div
            className={
              section === 2
                ? 'tw-text-sm tw-cursor-pointer tw-font-medium 2xl:tw-text-xl text-blue'
                : 'tw-text-sm tw-cursor-pointer tw-font-normal 2xl:tw-text-xl 2xl:tw-font-medium text-black'
            }
            role="none"
            onClick={() => setSection(2)}
          >
            اعلان‌های عمومی
          </div>
        </div>
      </div>
      <div
        className="dashboard-table-container font-kalameh-num"
        style={{ display: section === 1 ? 'block' : 'none' }}
      >
        <table>
          <thead>
            <tr>
              <th>عنوان</th>
              <th>نوع</th>
              <th>شرکت یا برگزارکننده</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {user_notifications.map((item) => (
              <tr key={item.id}>
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="text-primary-hover tw-cursor-pointer"
                  // role="none"
                  onClick={() => {
                    dispatch(changeNotifViewStatus(item));
                    dispatch(showDashboardModal(item));
                  }}
                >
                  {item.notification.title}
                </td>
                <td>
                  {item.data.type == 1 && <span className="text-blue">خبری</span>}
                  {item.data.type == 2 && <span className="text-blue">آموزشی</span>}
                  {item.data.type == 3 && <span className="text-blue">شغلی</span>}
                </td>
                <td>
                  <img src={item.notification.image} alt="" className="tw-w-8 tw-h-8" />
                </td>
                <td style={{ borderRadius: '12px 0 0 12px' }}>{item.created_at_difference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="dashboard-table-container font-kalameh-num"
        style={{ display: section === 2 ? 'block' : 'none' }}
      >
        <table>
          <thead>
            <tr>
              <th>عنوان</th>
              <th>نوع</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {multicast_notifications.map((item) => (
              <tr key={item.id}>
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="text-primary-hover tw-cursor-pointer"
                  // role="none"
                  onClick={() => {
                    dispatch(changeNotifViewStatus(item));
                    dispatch(showDashboardModal(item));
                  }}
                >
                  {item.notification.title}
                </td>
                <td>
                  {item.data.type == 1 && <span className="text-blue">خبری</span>}
                  {item.data.type == 2 && <span className="text-blue">آموزشی</span>}
                  {item.data.type == 3 && <span className="text-blue">شغلی</span>}
                </td>
                <td style={{ borderRadius: '12px 0 0 12px' }}>{item.created_at_difference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
