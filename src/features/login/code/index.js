/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useTimer } from 'react-timer-hook';
import useDigitInput from 'react-digit-input';
import AuthHeader from '../../../components/auth/AuthHeader';
import LeftBanner from '../../../components/auth/LeftBanner';

export default function LoginCode() {
  const stage = 1;
  const history = useHistory();
  const [show, setShow] = useState(false);

  // Timer setup
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => setShow(true),
  });

  // Code input setup
  const [value, onChange] = useState('');
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 6,
    value,
    onChange,
  });

  useEffect(() => {
    if (!window.localStorage.getItem('userPhone')) {
      history.push('../auth');
    }
  }, []);

  const resend = async () => {
    try {
      if (localStorage.getItem('userPhone')) {
        const data = {
          mobile: window.localStorage.getItem('userPhone'),
          state: 'login',
        };

        const res = await axios.post(
          'https://develop.karsazapp.ir/api/v1/web/service/auth/mobile/send',
          data,
        );

        if (res.status === 200) {
          window.localStorage.setItem('tempToken', res.data.data.token);
          setShow(false);
          time.setSeconds(time.getSeconds());
          restart(time);
        }
      }
    } catch (error) {
      // console.log(error);
      const { status, data } = error.response;
      if (status === 422 && data.message.mobile) {
        toast.error(data.message.mobile[0]);
      }
      if (status === 422 && data.message.state) {
        toast.error(data.message.state[0]);
      }
      if (status === 404) {
        toast.error(`کاربری با شماره ${localStorage.getItem('userPhone')} یافت نشد.`);
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (localStorage.getItem('tempToken')) {
        const data = {
          token: localStorage.getItem('tempToken'),
          code: value,
          state: 'login',
          device_name: navigator.userAgent,
        };

        const res = await axios.post(
          'https://develop.karsazapp.ir/api/v1/web/service/auth/mobile/verify',
          data,
        );

        if (res.status === 200) {
          localStorage.setItem('userToken', res.data.data.user.token);
          localStorage.removeItem('tempToken');
          history.push('../');
        }
      }
    } catch (error) {
      const { data, status } = error.response;
      if (status === 422 && data.message.state) toast.error(data.message.state[0]);
      if (status === 422 && data.message.code) toast.error(data.message.code[0]);
      if (status === 422 && data.message.device_name) toast.error(data.message.device_name[0]);
      if (status === 422 && data.message.token) toast.error(data.message.token[0]);
      if (status === 401) toast.error('کد وارد شده درست نیست.');
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
                کد تأیید
              </p>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
                کد تایید ارسال شده به شماره تلفن {localStorage.getItem('userPhone')} را وارد نمایید.
              </p>
              <div
                className="tw-grid tw-grid-cols-6 tw-gap-x-4 tw-text-xs 2xl:tw-text-base"
                style={{ direction: 'ltr' }}
              >
                <input
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus={true}
                  inputMode="decimal"
                  className="tw-text-center tw-text-sm 2xl:tw-text-base"
                  {...digits[0]}
                  style={{ padding: '1rem' }}
                />
                <input
                  inputMode="decimal"
                  className="tw-text-center tw-text-sm 2xl:tw-text-base"
                  {...digits[1]}
                  style={{ padding: '1rem' }}
                />
                <input
                  inputMode="decimal"
                  className="tw-text-center tw-text-sm 2xl:tw-text-base"
                  {...digits[2]}
                  style={{ padding: '1rem' }}
                />
                <input
                  inputMode="decimal"
                  className="tw-text-center tw-text-sm 2xl:tw-text-base"
                  {...digits[3]}
                  style={{ padding: '1rem' }}
                />
                <input
                  inputMode="decimal"
                  className="tw-text-center tw-text-sm 2xl:tw-text-base"
                  {...digits[4]}
                  style={{ padding: '1rem' }}
                />
                <input
                  inputMode="decimal"
                  className="tw-text-center tw-text-sm 2xl:tw-text-base"
                  {...digits[5]}
                  style={{ padding: '1rem' }}
                />
              </div>
              <button
                type="submit"
                className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
              >
                تایید کد و ورود
              </button>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-text-center">
                دریافت مجدد کد &nbsp;
                <button
                  onClick={resend}
                  style={{ visibility: show ? 'visible' : 'hidden', padding: '1rem' }}
                  className="button-secondary tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold"
                >
                  ارسال مجدد
                </button>
                <span style={{ display: show ? 'none' : 'inline' }}>
                  {minutes}:{seconds}
                </span>
              </p>
              <Link
                to="../login/password"
                className="tw-text-xs tw-font-normal 2xl:tw-text-base text-blue tw-mt-4 tw-text-center"
              >
                ورود از طریق گذرواژه
              </Link>
            </div>
          </form>
        </div>
        <LeftBanner stage={stage} />
      </div>
    </div>
  );
}
