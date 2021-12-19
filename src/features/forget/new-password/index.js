import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import AuthHeader from '../../../components/auth/AuthHeader';
import LeftBanner from '../../../components/auth/LeftBanner';

import viewIcon from '../../../assets/icons/View.svg';
import dontViewIcon from "../../../assets/icons/don't view.svg";

export default function NewPassword() {
  const stage = 1;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (localStorage.getItem('userPhone')) {
      try {
        const data = {
          mobile: localStorage.getItem('userPhone'),
          password,
          password_confirmation: password,
          device_name: navigator.userAgent,
        };

        const res = await axios.post(
          'https://develop.karsazapp.ir/api/v1/web/service/users/reset',
          data,
        );
        if (res.status === 200) {
          localStorage.setItem('userToken', res.data.data.user.token);
          history.push('/');
          window.location.reload();
        }
      } catch (error) {
        const { data, status } = error.response;
        if (status === 422 && data.message.state) toast.error(data.message.state[0]);
        if (status === 422 && data.message.code) toast.error(data.message.code[0]);
        if (status === 422 && data.message.device_name) toast.error(data.message.device_name[0]);
        if (status === 422 && data.message.token) toast.error(data.message.token[0]);
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
                گذرواژه جدید
              </p>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
                گذرواژه جدید حساب کاربری خود را وارد نمایید
              </p>
              <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
                گذرواژه
              </p>
              <div
                className="auth-forget-pass tw-py-0 tw-pr-0 tw-pl-4 tw-text-sm tw-font-normal 2xl:tw-text-base tw-grid tw-items-center tw-justify-between tw-rounded-xl"
                style={{ gridTemplateColumns: 'auto auto', width: '100%' }}
              >
                <input
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  className=""
                  placeholder="گذرواژه خود را وارد نمایید."
                  style={{
                    outline: 'none',
                    border: 'none',
                    background: 'transparent',
                    padding: '1rem',
                    display: 'flex',
                  }}
                  onFocus={() => document.querySelector('.auth-forget-pass').classList.add('focus')}
                  onBlur={() =>
                    document.querySelector('.auth-forget-pass').classList.remove('focus')
                  }
                  onChange={(e) => setPassword(e.target.value)}
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
                className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
              >
                تایید گذرواژه
              </button>
            </div>
          </form>
        </div>
        <LeftBanner stage={3} />
      </div>
    </div>
  );
}
