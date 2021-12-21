import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthHeader from '../../../components/auth/AuthHeader';
import LeftBanner from '../../../components/auth/LeftBanner';

export default function ForgetPhone() {
  const stage = 1;

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="tw-overflow-x-hidden font-kalameh-num">
      <AuthHeader />
      <div className="auth-gridder tw-grid tw-h-full" style={{ minHeight: window.innerHeight }}>
        <div className="bg-light tw-grid tw-place-items-center">
          <form
            onSubmit={onSubmit}
            className="tw-w-full md:tw-w-2/3 lg:tw-w-4/5 xl:tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto tw-px-4 md:tw-px-0"
          >
            <div className="tw-flex tw-flex-col">
              <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
                فراموشی گذرواژه
              </p>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
                برای دریافت کد یک بار مصرف شماره موبایل ثبت نامی خود را وارد نمایید.
              </p>
              <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
                شماره موبایل
              </p>
              <input
                type="tel"
                pattern="/^09[0-9]{9}$/i"
                className="tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
                placeholder="شماره موبایل خود را وارد کنید."
                style={{ padding: '1rem' }}
              />
              <button
                type="submit"
                className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
              >
                ارسال کد یک‌ بار مصرف
              </button>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center">
                آیا در کارساز ثبت نام نکردید؟{' '}
                <Link to="/register" className="text-blue">
                  ثبت‌نام
                </Link>
              </p>
            </div>
          </form>
        </div>
        <LeftBanner stage={stage} />
      </div>
    </div>
  );
}
