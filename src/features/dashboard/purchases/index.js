import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../../common/Layout/dashboard';
import { getDashboardPurchases } from '../../../app/redux/actions/dashboardActions';

import { numberWithCommas } from '../../../common/Functions';

export default function Purchases() {
  const [section, setSection] = useState(1);
  const dispatch = useDispatch();
  const {
    purchases: { course_purchases, course_purchases_pending },
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardPurchases());
  }, []);

  return (
    <Layout>
      <div className="tw-my-4 tw-relative">
        {/* Indicator Line */}
        <div
          className="tw-absolute bg-primary tw-w-10 2xl:lg:tw-w-28 lg:tw-w-20 tw-h-1 tw-top-0"
          style={{
            borderRadius: '0 0 12px 12px',
            right: section === 1 ? '25%' : '75%',
            transform: 'translateX(50%)',
            transition: 'right .7s ease-in-out',
          }}
        />
        {/* Tabs */}
        <div className="tw-rounded-xl tw-font-medium tw-grid tw-grid-cols-2 tw-place-items-center font-kalameh-num lg:tw-w-full tw-py-4 2xl:tw-py-8 bg-primary-pale">
          <div
            className={
              section === 1
                ? 'tw-text-sm tw-cursor-pointer tw-font-medium 2xl:tw-text-xl text-blue'
                : 'tw-text-sm tw-cursor-pointer tw-font-normal 2xl:tw-text-xl 2xl:tw-font-medium text-black'
            }
            role="none"
            onClick={() => setSection(1)}
          >
            خرید‌های تأیید نشده
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
            تمامی خرید‌های شما
          </div>
        </div>
      </div>
      <div className="tw-my-4" style={{ display: section === 1 ? 'block' : 'none' }}>
        <table className="tw-table-auto font-kalameh-num tw-min-w-full tw-text-right tw-overflow-x-scroll">
          <thead className="tw-text-sm tw-font-medium text-blue 2xl:tw-text-lg 2xl:tw-font-semibold">
            <tr className="">
              <th className="tw-p-2 lg:tw-w-1/2">نام دوره آموزشی</th>
              <th className="tw-p-2 lg:tw-w-1/6">تاریخ خرید</th>
              <th className="tw-p-2 lg:tw-w-1/6">کد پیگیری</th>
              <th className="tw-p-2 lg:tw-w-1/6">هزینه پرداخت شده</th>
            </tr>
          </thead>
          <tbody>
            {course_purchases_pending.map((item) => (
              <tr key={item.id} className="">
                <td style={{ borderRadius: '0 12px 12px 0' }} className="tw-p-2">
                  {item.course.title}
                </td>
                <td className="tw-p-2">{item.created_at}</td>
                <td className="tw-p-2">{item.purchase.track_id}</td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="tw-p-2">
                  {numberWithCommas(item.purchase.amount)} تومان
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
              <th className="tw-p-2 lg:tw-w-1/2">نام دوره آموزشی</th>
              <th className="tw-p-2 lg:tw-w-1/12">تاریخ خرید</th>
              <th className="tw-p-2 lg:tw-w-1/6">کد پیگیری</th>
              <th className="tw-p-2 lg:tw-w-1/6">هزینه پرداخت شده</th>
              <th className="tw-p-2 lg:tw-w-1/12">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {course_purchases.map((item) => (
              <tr key={item.id} className="">
                <td style={{ borderRadius: '0 12px 12px 0' }} className="tw-p-2">
                  {item.course.title}
                </td>
                <td className="tw-p-2">{item.created_at}</td>
                <td className="tw-p-2">{item.purchase.track_id}</td>
                <td className="tw-p-2">{numberWithCommas(item.purchase.amount)} تومان</td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="tw-p-2">
                  {item.status_title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
