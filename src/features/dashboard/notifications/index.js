/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import instance from '../../../app/instance';
import Layout from '../../../common/Layout/dashboard';
import {
  getDashboardNotifications,
  closeDashboardModal,
  showDashboardModal,
} from '../../../app/redux/actions/dashboardActions';

import closeIcon from '../../../assets/icons/Close Fill Light.svg';

export const Modal = () => {
  const {
    modal: { show, data },
  } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  return (
    <>
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
            {/* <img
            src={(data.notification && data.notification.image) || ''}
            alt=""
            style={{ borderRadius: '12px 0 0 12px' }}
          /> */}
            <div className="">
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
    </>
  );
};

export default function Notifications() {
  const [section, setSection] = useState(1);
  const dispatch = useDispatch();
  const {
    modal: { show },
  } = useSelector((state) => state.dashboard);
  const [props, setProps] = useState(null);

  const {
    notifications: { user_notifications, multicast_notifications },
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardNotifications());
  }, []);

  return (
    <Layout>
      <Modal show={show} props={props !== null && props} />
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
        className="dashboard-table-container font-kalameh-num "
        style={{ display: section === 1 ? 'block' : 'none' }}
      >
        <table className="">
          <thead className="">
            <tr className="">
              <th className="">عنوان</th>
              <th className="">نوع</th>
              <th className="">شرکت یا برگزارکننده</th>
              <th className="">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {user_notifications.map((item) => (
              <tr key={item.id} className="">
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="text-primary-hover tw-cursor-pointer"
                  role="none"
                  onClick={() => dispatch(showDashboardModal(item))}
                >
                  {item.notification.title}
                </td>
                <td className="">
                  {item.data.type == 1 && <span className="text-info">خبری</span>}
                  {item.data.type == 2 && <span className="text-info">آموزشی</span>}
                  {item.data.type == 3 && <span className="text-success">شغلی</span>}
                </td>
                <td className="">
                  <img src={item.notification.image} alt="" className="tw-w-8 tw-h-8" />
                </td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="">
                  {item.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="dashboard-table-container font-kalameh-num"
        style={{ display: section === 2 ? 'block' : 'none' }}
      >
        <table className="">
          <thead className="">
            <tr className="">
              <th className="">عنوان</th>
              <th className="">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {multicast_notifications.map((item) => (
              <tr key={item.id} className="">
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="text-primary-hover tw-cursor-pointer"
                  role="none"
                  onClick={() => dispatch(showDashboardModal(item))}
                >
                  {item.notification.title}
                </td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="">
                  {item.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="tw-my-4" style={{ display: section === 1 ? 'block' : 'none' }}>
        <table className="tw-table-auto font-kalameh-num tw-min-w-full tw-text-right">
          <thead className="tw-text-sm tw-font-medium text-blue 2xl:tw-text-lg 2xl:tw-font-semibold">
            <tr className="">
              <th className="tw-p-2 lg:tw-w-1/2">عنوان</th>
              <th className="tw-p-2 lg:tw-w-1/12">نوع</th>
              <th className="tw-p-2 lg:tw-w-1/4">شرکت یا برگزارکننده</th>
              <th className="tw-p-2 lg:tw-w-1/6">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {user_notifications.map((item) => (
              <tr key={item.id} className="">
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="text-primary-hover tw-cursor-pointer tw-p-2"
                  role="none"
                  onClick={() => dispatch(showDashboardModal(item))}
                >
                  {item.notification.title}
                </td>
                <td className="tw-py-2">
                  {item.data.type == 1 && <span className="text-info">خبری</span>}
                  {item.data.type == 2 && <span className="text-info">آموزشی</span>}
                  {item.data.type == 3 && <span className="text-success">شغلی</span>}
                </td>
                <td className="tw-py-2">
                  <img src={item.notification.image} alt="" className="tw-w-16 tw-h-16" />
                </td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="tw-py-2">
                  {item.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tw-my-4" style={{ display: section === 2 ? 'block' : 'none' }}>
        <table className="tw-table-auto font-kalameh-num tw-min-w-full tw-text-right tw-overflow-x-scroll">
          <thead className="tw-text-sm tw-font-medium text-blue 2xl:tw-text-lg 2xl:tw-font-semibold">
            <tr className="">
              <th className="tw-p-2 tw-w-10/12">عنوان</th>
              <th className="tw-p-2 tw-w-1/6">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {multicast_notifications.map((item) => (
              <tr key={item.id} className="">
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="text-primary-hover tw-cursor-pointer tw-p-2"
                  role="none"
                  onClick={() => dispatch(showDashboardModal(item))}
                >
                  {item.notification.title}
                </td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="tw-p-2">
                  {item.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </Layout>
  );
}
