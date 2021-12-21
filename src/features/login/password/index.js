import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import AuthHeader from '../../../components/auth/AuthHeader';
import LeftBanner from '../../../components/auth/LeftBanner';

import viewIcon from '../../../assets/icons/View.svg';
import dontViewIcon from "../../../assets/icons/don't view.svg";

export default function LoginPassword() {
  const stage = 1;
  const history = useHistory();
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem('userPhone')) {
      history.push('../auth');
    }
  }, []);

  const onChange = (event) => setPassword(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (window.localStorage.getItem('userPhone') && password) {
      try {
        const data = {
          mobile: window.localStorage.getItem('userPhone'),
          password,
          device_name: window.navigator.userAgent,
        };
        const res = await axios.post(
          'https://develop.karsazapp.ir/api/v1/web/service/users/login',
          data,
        );
        if (res.status === 200) {
          if (res.data.code === 200) {
            window.localStorage.setItem('userToken', res.data.data.user.token);
            history.push('/');
            window.location.reload();
          }
          if (res.data.code === 401) {
            toast.error('ورود ناموفق. از درستی گذرواژه وارد شده، اطمینان حاصل نمایید');
          }
        }
      } catch (error) {
        const { data, status } = error?.response;
        if (status === 422 && data.message.mobile) toast.error(data.message.mobile[0]);
        if (status === 422 && data.message.device_name) toast.error(data.message.device_name[0]);
        if (status === 422 && data.message.password) toast.error(data.message.password[0]);
        if (status === 401)
          toast.error('ورود ناموفق. از درستی شماره و گذرواژه ورودی اطمینان حاصل نمایید');
      }
    }

    if (!window.localStorage.getItem('userPhone')) {
      history.push('/auth');
    }
  };

  const linkClick = async () => {
    if (window.localStorage.getItem('userPhone')) {
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
      }
    }
  };

  const forgetClick = async (event) => {
    if (localStorage.getItem('userPhone')) {
      try {
        const data = {
          mobile: localStorage.getItem('userPhone'),
          state: 'reset',
        };

        const res = await axios.post(
          'https://develop.karsazapp.ir/api/v1/web/service/auth/mobile/send',
          data,
        );

        if (res.status === 200) {
          localStorage.setItem('tempToken', res.data.data.token);
          history.push('/forget/code');
        }
      } catch (error) {
        const { status, data } = error.response;
        if (status === 422 && data.message.mobile) toast.error(data.message.mobile[0]);
        if (status === 422 && data.message.state) toast.error(data.message.state[0]);
        if (status === 404) {
          toast.error(
            `متأسفانه شماره ${localStorage.getItem(
              'userPhone',
            )} یافت نشد. لطفاً شماره دیگری وارد کنید.`,
          );
          history.push('/auth');
        }
      }
    }
  };

  return (
    <div className="tw-overflow-x-hidden font-kalameh-num ">
      <AuthHeader />
      <div className="auth-gridder tw-grid tw-h-full" style={{ minHeight: window.innerHeight }}>
        <div className="bg-light tw-grid tw-place-items-center">
          <form
            onSubmit={onSubmit}
            className="tw-w-full md:tw-w-2/3 lg:tw-w-4/5 xl:tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto tw-px-4 md:tw-px-0"
          >
            <div className="tw-flex tw-flex-col ">
              <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
                گذرواژه
              </p>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
                گذرواژه حساب کاربری خود را وارد نمایید یا می‌توانید از ورود آسان استفاده کنید.
              </p>
              <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
                گذرواژه
              </p>
              <div
                className="auth-forget-pass tw-py-0 tw-pr-0 tw-pl-4 tw-text-sm tw-font-normal 2xl:tw-text-base tw-grid tw-items-center tw-justify-between tw-rounded-xl"
                style={{ gridTemplateColumns: 'auto auto', width: '100%' }}
              >
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="گذرواژه خود را وارد نمایید."
                  style={{
                    outline: 'none',
                    border: 'none',
                    background: 'transparent',
                    padding: '1rem',
                    display: 'flex',
                  }}
                  value={password}
                  onFocus={() => document.querySelector('.auth-forget-pass').classList.add('focus')}
                  onBlur={() =>
                    document.querySelector('.auth-forget-pass').classList.remove('focus')
                  }
                  onChange={onChange}
                />

                <div
                  role="none"
                  className="tw-p-0"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  style={{ width: '24px', cursor: 'pointer' }}
                >
                  {showPassword ? (
                    <img
                      src={viewIcon}
                      alt=""
                      className="tw-ml-4"
                      style={{ width: '24px', height: '24px' }}
                    />
                  ) : (
                    <img
                      src={dontViewIcon}
                      alt=""
                      className="tw-ml-4"
                      style={{ width: '24px', height: '24px' }}
                    />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mt-12"
              >
                تأیید گذرواژه و ورود
              </button>
              <p
                to="../"
                className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mt-2 tw-text-center"
              >
                گذرواژه خود را فراموش کرده‌ام. &nbsp;
                <button
                  className="text-blue tw-p-0 tw-text-xs tw-font-normal 2xl:tw-text-base tw-mt-2 tw-text-center"
                  onClick={forgetClick}
                >
                  بازیابی
                </button>
              </p>
              <div className="tw-relative tw-border-b tw-border-gray-400 tw-py-0 tw-my-6 tw-w-full tw-flex tw-justify-center">
                <p
                  className="tw-text-xs tw-font-normal 2xl:tw-text-base tw-px-2 tw-absolute bg-light tw-text-gray-400"
                  style={{ top: '-0.8rem' }}
                >
                  یا
                </p>
              </div>
              <Link
                to={window.localStorage.getItem('userPhone') ? '/login/code' : '/auth'}
                className="button-secondary tw-text-center tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold "
                onClick={linkClick}
              >
                ورود آسان (دریافت پیامک)
              </Link>
            </div>
          </form>
        </div>
        <LeftBanner stage={2} />
      </div>
    </div>
  );
}
