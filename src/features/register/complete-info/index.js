import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import AuthHeader from '../../../components/auth/AuthHeader';
import LeftBanner from '../../../components/auth/LeftBanner';

import viewIcon from '../../../assets/icons/View.svg';
import dontViewIcon from "../../../assets/icons/don't view.svg";

export default function CompleteInfo() {
  const stage = 1;
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState(null);

  const history = useHistory();

  useEffect(() => {
    axios.get('https://develop.karsazapp.ir/api/v1/web/service/login-stat').then((res) => {
      if (res.status === 200) {
        setUsers(res.data.data.stat.users);
      }
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const regex = /09[0-9]{9}$/i;

    if (!localStorage.getItem('userPhone')) {
      toast.error('لطفا شماره همراه خود را دوباره با شکل صحیح وارد نمایید.');
      history.push('/auth');
    }

    if (localStorage.getItem('userPhone') && regex.test(localStorage.getItem('userPhone'))) {
      console.log(1);
      if (!password || password.length < 8) toast.error('گذرواژه بهتری را انتخاب کنید.');
      if (!firstname || !lastname) toast.error('لطفا نام و نام خانوادگی خود را وارد نمایید');
      if (password && password.length >= 8 && firstname && lastname) {
        try {
          const data = {
            mobile: window.localStorage.getItem('userPhone'),
            first_name: firstname,
            last_name: lastname,
            password,
            device_name: navigator.userAgent,
          };
          console.log(data);

          const res = await axios.post(
            'https://develop.karsazapp.ir/api/v1/web/service/users/register',
            data,
          );

          if (res.status === 200) {
            localStorage.setItem('userToken', res.data.data.user.token);
            localStorage.removeItem('tempToken');
            history.push('/');
            window.location.reload();
          }
        } catch (error) {
          console.log(error);
          const { status, data } = error.response;
          console.log(error.response);
          if (status === 422 && data.message.mobile) {
            toast.error(data.message.mobile[0]);
          }
          if (status === 422 && data.message.first_name) {
            toast.error(data.message.first_name[0]);
          }
          if (status === 422 && data.message.last_name) {
            toast.error(data.message.last_name[0]);
          }
          if (status === 422 && data.message.password) {
            toast.error(data.message.password[0]);
          }
        }
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
              <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-8">
                تکمیل اطلاعات
              </p>
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
                برای تکمیل فرایند ثبت نام در کارساز فرم پایین را پر کنید و به جمع {users} دانشجو
                کارزار بپیوندید.
              </p>
              <div className="tw-grid tw-gride-cols-1 md:tw-grid-cols-2 2xl:tw-grid-cols-1 tw-items-center tw-gap-x-4 tw-w-full">
                <div>
                  <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
                    نام
                  </p>
                  <input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    className="tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
                    placeholder="برای مثال، احمد "
                    style={{ padding: '1rem', width: '100%' }}
                    maxLength={50}
                  />
                </div>
                <div>
                  <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
                    نام خانوادگی
                  </p>
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    className="tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
                    placeholder="برای مثال، احمدی"
                    style={{ padding: '1rem', width: '100%' }}
                    maxLength={50}
                  />
                </div>
              </div>
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
                تکمیل ثبت نام
              </button>
            </div>
          </form>
        </div>
        <LeftBanner stage={5} />
      </div>
    </div>
  );
}
