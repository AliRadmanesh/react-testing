import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import AuthHeader from '../../components/auth/AuthHeader';
import LeftBanner from '../../components/auth/LeftBanner';

export default function Authentication() {
  const history = useHistory();
  const stage = 1;
  const [phone, setPhone] = useState(null);
  const [state, setState] = useState(null);

  const regex = /09[0-9]{9}$/i;

  const onChange = (event) => {
    setPhone(event.target.value);
  };

  const onBlur = (event) => {
    setState(regex.test(event.target.value));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!regex.test(phone)) {
      toast.error('لطفا شماره موبایل خود را به درستی وارد کنید.');
    } else {
      try {
        const data = {
          mobile: phone,
        };
        const res = await axios.post(
          'https://develop.karsazapp.ir/api/v1/web/service/auth/mobile/check',
          data,
        );
        if (res.status === 200 || res.status === 201) {
          window.localStorage.setItem('userPhone', phone);
          history.push('../login/password');
        }
      } catch (error) {
        const { status, data } = error.response;
        if (status === 422) toast.error(data.message);
        else if (status === 404) {
          // toast.error('کاربری با این شماره یافت نشد.');
          window.localStorage.setItem('tempToken', data.data.token);
          window.localStorage.setItem('userPhone', phone);
          history.push('../register/code');
        } else toast.error('عملیات ورود ناموفق بود.');
      }
    }
  };

  return (
    <div className="tw-overflow-x-hidden font-kalameh-num" style={{}}>
      <AuthHeader />
      <div className="auth-gridder tw-grid tw-h-full" style={{ minHeight: window.innerHeight }}>
        <div className="bg-light tw-grid tw-place-items-center">
          <form
            onSubmit={onSubmit}
            className="tw-w-full md:tw-w-2/3 lg:tw-w-4/5 xl:tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto tw-px-4 md:tw-px-0"
          >
            <div className="tw-flex tw-flex-col">
              <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
                ورود یا ثبت نام
              </p>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
                برای ادامه مراحل، شماره موبایل خود را وارد کنید.
              </p>
              <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
                شماره موبایل
              </p>
              <input
                type="tel"
                className={
                  (state === false && 'tw-text-sm tw-font-normal 2xl:tw-text-base input-error') ||
                  (state === true && 'tw-text-sm tw-font-normal 2xl:tw-text-base input-success') ||
                  (state === null && 'tw-text-sm tw-font-normal 2xl:tw-text-base')
                }
                placeholder="شماره موبایل خود را وارد کنید."
                style={{ padding: '1rem' }}
                value={phone}
                onChange={onChange}
                onBlur={onBlur}
              />
              <button
                type="submit"
                className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mt-12"
              >
                تأیید شماره
              </button>
            </div>
          </form>
        </div>
        <LeftBanner stage={stage} />
      </div>
    </div>
  );
}
