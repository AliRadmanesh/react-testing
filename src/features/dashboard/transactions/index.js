import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import instance from '../../../app/instance';
import Layout from '../../../common/Layout/dashboard';
import { getDashboardTransactions } from '../../../app/redux/actions/dashboardActions';

export default function Transactions() {
  const [section, setSection] = useState(1);
  const dispatch = useDispatch();
  const {
    transactions: { transactions, withdrawals_pending },
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardTransactions());
  }, []);

  return (
    <Layout>
      <div className="tw-my-4 tw-relative">
        {/* Indicator Line */}
        <div
          className="tw-absolute bg-primary tw-w-16 2xl:lg:tw-w-28 lg:tw-w-20 tw-h-1 tw-top-0"
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
            برداشت‌های معلق
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
            صورت حساب
          </div>
        </div>
      </div>
      <div className="tw-my-4" style={{ display: section === 1 ? 'block' : 'none' }}>
        <table className="tw-table-auto font-kalameh-num tw-min-w-full tw-text-right tw-overflow-x-scroll">
          <thead className="tw-text-sm tw-font-medium text-blue 2xl:tw-text-lg 2xl:tw-font-semibold">
            <tr className="">
              <th className="tw-p-4 lg:tw-w-1/5">ردیف</th>
              <th className="tw-p-4 lg:tw-w-1/5">تاریخ برداشت</th>
              <th className="tw-p-4 lg:tw-w-1/5">
                مبلغ &nbsp;{' '}
                <span className="tw-font-normal tw-text-xs 2xl:tw-text-base">(تومان)</span>
              </th>
              <th className="tw-p-4 lg:tw-w-1/5">وضعیت</th>
              <th className="tw-p-4 lg:tw-w-1/5">تاریخ رسیدگی</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals_pending.map((item, index) => (
              <tr key={item.id} className="">
                <td style={{ borderRadius: '0 12px 12px 0' }} className="tw-p-2">
                  {index + 1}
                </td>
                <td className="tw-p-2">{item.created_at}</td>
                <td className="tw-p-2">
                  <span className="text-error">{item.amount} - تومان</span>
                </td>
                <td className="tw-p-2">{item.status_title}</td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="tw-p-2">
                  {item.checkout_at === null || item.checkout_at !== '' ? (
                    <span>-</span>
                  ) : (
                    <span>{item.checkout_at}</span>
                  )}
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
              <th className="tw-p-4 lg:tw-w-1/12">ردیف</th>
              <th className="tw-p-4 lg:tw-w-1/6">تاریخ</th>
              <th className="tw-p-4 lg:tw-w-5/12">توضیحات</th>
              <th className="tw-p-4 lg:tw-w-1/6">
                مبلغ &nbsp;{' '}
                <span className="tw-font-normal tw-text-xs 2xl:tw-text-base">(تومان)</span>
              </th>
              <th className="tw-p-4 lg:tw-w-1/6">
                موجودی &nbsp;{' '}
                <span className="tw-font-normal tw-text-xs 2xl:tw-text-base">(تومان)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) => (
              <tr key={item.id} className="">
                <td style={{ borderRadius: '0 12px 12px 0' }} className="tw-p-2">
                  {index + 1}
                </td>
                <td className="tw-p-2">{item.created_at}</td>
                <td className="tw-p-2">{item.title}</td>
                <td style={{ borderRadius: '12px 0 0 12px' }} className="tw-p-2">
                  {item.type === 'pos' ? (
                    <span className="text-success">{item.amount} + تومان</span>
                  ) : (
                    <span className="text-error">{item.amount} - تومان</span>
                  )}
                </td>
                <td className="tw-p-2">{item.after_balance} تومان</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
