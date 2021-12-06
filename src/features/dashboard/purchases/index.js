import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../../common/Layout/dashboard';
import { getDashboardPurchases } from '../../../app/redux/actions/dashboardActions';

// const Table = () => {

// }

export default function Purchases() {
  const dispatch = useDispatch();
  const {
    purchases: { course_purchases, course_purchases_approved },
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardPurchases());
  }, []);

  return (
    <Layout>
      <section className="dashboard-purchases tw-my-4 tw-p-4 bg-white tw-shadow tw-rounded-xl">
        <p className="2xl:tw-text-2xl 2xl:tw-font-black text-blue font-kalameh-num tw-font-bold tw-text-base tw-mb-4 2xl:tw-mb-6">
          خرید‌های تأیید شده شما
        </p>
        <table className="tw-table-fixed font-kalameh-num lg:tw-w-full tw-text-right">
          <thead className="tw-text-sm tw-font-medium text-blue 2xl:tw-text-lg 2xl:tw-font-semibold">
            <tr className="">
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none tw-w-1/2">
                نام دوره آموزشی
              </th>
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none tw-w-1/6">
                تاریخ خرید
              </th>
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none tw-w-1/6">
                کد پیگیری
              </th>
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-gray-300 lg:tw-border-none tw-w-1/6">
                هزینه پرداخت شده
              </th>
            </tr>
          </thead>
          <tbody>
            {course_purchases_approved.map((item) => (
              <tr key={item.id} className="">
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none"
                >
                  {item.course.title}
                </td>
                <td className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none">
                  {item.created_at}
                </td>
                <td className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none">
                  {item.purchase.track_id}
                </td>
                <td
                  style={{ borderRadius: '12px 0 0 12px' }}
                  className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-gray-300 lg:tw-border-none"
                >
                  {item.purchase.amount} تومان
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="dashboard-purchases tw-my-4 tw-p-4 bg-white tw-shadow tw-rounded-xl">
        <p className="2xl:tw-text-2xl 2xl:tw-font-black text-blue font-kalameh-num tw-font-bold tw-text-base tw-mb-4 2xl:tw-mb-6">
          خرید‌های شما
        </p>
        <table className="tw-table-fixed font-kalameh-num lg:tw-w-full tw-text-right">
          <thead className="tw-text-sm tw-font-medium text-blue 2xl:tw-text-lg 2xl:tw-font-semibold">
            <tr className="">
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none tw-w-1/2">
                نام دوره آموزشی
              </th>
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none tw-w-1/6">
                تاریخ خرید
              </th>
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none tw-w-1/6">
                کد پیگیری
              </th>
              <th className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-gray-300 lg:tw-border-none tw-w-1/6">
                هزینه پرداخت شده
              </th>
            </tr>
          </thead>
          <tbody>
            {course_purchases.map((item) => (
              <tr key={item.id} className="">
                <td
                  style={{ borderRadius: '0 12px 12px 0' }}
                  className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none"
                >
                  {item.course.title}
                </td>
                <td className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none">
                  {item.created_at}
                </td>
                <td className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-l tw-border-gray-300 lg:tw-border-none">
                  {item.purchase.track_id}
                </td>
                <td
                  style={{ borderRadius: '12px 0 0 12px' }}
                  className="tw-py-4 tw-px-2 lg:tw-px-4 tw-border-gray-300 lg:tw-border-none"
                >
                  {item.purchase.amount} تومان
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}
