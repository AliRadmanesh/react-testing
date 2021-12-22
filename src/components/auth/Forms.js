/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  setLoginStage,
  setRetrieveStage,
  setSignupStage,
} from '../../app/redux/actions/authActions';

import viewIcon from '../../assets/icons/View.svg';
import dontViewIcon from "../../assets/icons/don't view.svg";

export const LoginContainer = () => {
  const {
    login: { stage },
  } = useSelector((state) => state.auth);
  return (
    <div className="auth-container tw-relative tw-overflow-hidden tw-w-full md:tw-w-2/3 lg:tw-w-4/5 xl:tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto tw-px-4 font-kalameh-num">
      {/* <Swiper className="tw-items-center" spaceBetween={16}>
        <SwiperSlide>
          <PhonePassLogin />
        </SwiperSlide>
        <SwiperSlide>
          <LoginLanding />
        </SwiperSlide>
        <SwiperSlide>
          <PhoneCodeLogin />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSubmitLogin />
        </SwiperSlide>
      </Swiper> */}
      {stage === 1 && <LoginLanding />}
      {stage === 2 && <PhonePassLogin />}
      {stage === 3 && <PhoneCodeLogin />}
      {stage === 4 && <CodeSubmitLogin />}
    </div>
  );
};

export const ForgetPassContainer = () => {
  const {
    retrieve: { stage },
  } = useSelector((state) => state.auth);
  return (
    <div className="auth-container tw-relative tw-overflow-hidden tw-w-full md:tw-w-2/3 lg:tw-w-4/5 xl:tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto tw-px-4 font-kalameh-num">
      {stage === 1 && <ForgetPassPhone />}
      {stage === 2 && <ForgetPassCode />}
      {stage === 3 && <ForgetPassNewPass />}
    </div>
  );
};

export const SignupContainer = () => {
  const {
    signup: { stage },
  } = useSelector((state) => state.auth);
  return (
    <div className="auth-container tw-relative tw-overflow-hidden tw-w-full md:tw-w-2/3 lg:tw-w-4/5 xl:tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto tw-px-4 font-kalameh-num">
      {stage === 1 && <SignupLanding />}
      {stage === 2 && <CodeSubmitSignup />}
      {stage === 3 && <InfoCompletionSignup />}
    </div>
  );
};

const LoginLanding = () => {
  const dispatch = useDispatch();

  return (
    <div className="tw-flex tw-flex-col">
      <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
        ورود
      </p>
      <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
        کاربر عزیز از بازگشت شما به سایت کارساز بسیار خرسندیم شما پس از ورد به حساب کاربری خود می
        توانید آموزش ها و فرصت های شغلی پیشنهادی خود را مشاهده کنید.
      </p>
      <button
        onClick={() => dispatch(setLoginStage(3))}
        className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2"
      >
        ورود آسان
      </button>
      <button
        onClick={() => dispatch(setLoginStage(2))}
        className="button-secondary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2"
      >
        ورود با گذرواژه
      </button>
      <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center">
        آیا در کارساز ثبت نام نکردید؟{' '}
        <Link to="/register" className="text-blue">
          ثبت‌نام
        </Link>
      </p>
    </div>
  );
};

const PhonePassLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-8">
          ورود
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
        <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
          گذرواژه
        </p>
        <div
          className="auth-login-pass tw-p-0 tw-text-sm tw-font-normal 2xl:tw-text-base tw-grid tw-items-center tw-w-full tw-justify-between tw-rounded-xl"
          style={{ gridTemplateColumns: '1fr 56px' }}
        >
          <input
            type="password"
            placeholder="گذرواژه خود را وارد نمایید."
            style={{
              outline: 'none',
              border: 'none',
              background: 'transparent',
              padding: '1rem',
            }}
            onFocus={() => document.querySelector('.auth-login-pass').classList.add('focus')}
            onBlur={() => document.querySelector('.auth-login-pass').classList.remove('focus')}
          />

          <button
            className="tw-p-0"
            onClick={() => {
              setShowPassword(!showPassword);
              if (showPassword) {
                document.querySelector('.auth-login-pass input').setAttribute('type', 'text');
              } else
                document.querySelector('.auth-login-pass input').setAttribute('type', 'password');
            }}
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
          </button>
        </div>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mt-2">
          گذرواژه خود را فراموش کرده‌اید؟
        </p>
        <button
          type="submit"
          className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
        >
          ورود به حساب کاربری
        </button>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center">
          آیا در کارساز ثبت نام نکردید؟{' '}
          <Link to="/register" className="text-blue">
            ثبت‌نام
          </Link>
        </p>
      </div>
    </form>
  );
};

const PhoneCodeLogin = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
          ورود
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
          برای ارسال کد تایید شماره موبایل ثبت نامی خود را وارد نمایید.
        </p>
        <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4 tw-mt-4">
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
          ارسال کد تأیید
        </button>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center">
          آیا در کارساز ثبت نام نکردید؟{' '}
          <Link to="/register" className="text-blue">
            ثبت‌نام
          </Link>
        </p>
      </div>
    </form>
  );
};

const CodeSubmitLogin = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
          کد تأیید
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
          کد تایید ارسال شده به شماره تلفن <span className="tw-text-red-500">user phone</span> را
          وارد نمایید.
        </p>
        <h2>Code input</h2>
        <button
          type="submit"
          className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
        >
          تایید کد و ادامه
        </button>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center">
          دریافت مجدد کد countdown
        </p>
      </div>
    </form>
  );
};

const ForgetPassPhone = () => {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setRetrieveStage(2));
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};

const ForgetPassCode = () => {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setRetrieveStage(3));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
          کد یک بار مصرف
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
          کد یک بار مصرف ارسال شده به شماره تلفن <span className="tw-text-red-500">user phone</span>{' '}
          را وارد نمایید.
        </p>
        <h2>Code input</h2>
        <button
          type="submit"
          className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
        >
          تایید و ورود
        </button>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center tw-flex tw-items-center tw-justify-between">
          <span>دریافت مجدد کد</span>
          <span>countdown</span>
        </p>
      </div>
    </form>
  );
};

const ForgetPassNewPass = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    alert('retrive user complete');
  };

  return (
    <form onSubmit={onSubmit}>
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
          className="auth-forget-pass tw-p-0 tw-text-sm tw-font-normal 2xl:tw-text-base tw-grid tw-items-center tw-w-full tw-justify-between tw-rounded-xl"
          style={{ gridTemplateColumns: '1fr 56px' }}
        >
          <input
            type="password"
            placeholder="گذرواژه خود را وارد نمایید."
            style={{
              outline: 'none',
              border: 'none',
              background: 'transparent',
              padding: '1rem',
            }}
            onFocus={() => document.querySelector('.auth-forget-pass').classList.add('focus')}
            onBlur={() => document.querySelector('.auth-forget-pass').classList.remove('focus')}
          />

          <button
            className="tw-p-0"
            onClick={() => {
              setShowPassword(!showPassword);
              if (showPassword) {
                document.querySelector('.auth-forget-pass input').setAttribute('type', 'text');
              } else
                document.querySelector('.auth-forget-pass input').setAttribute('type', 'password');
            }}
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
          </button>
        </div>
        <button
          type="submit"
          className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
        >
          تایید گذرواژه
        </button>
      </div>
    </form>
  );
};

const SignupLanding = () => {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setSignupStage(2));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
          ثبت نام
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
          برای دسترسی به هزاران ویدیو آموزشی و فرصت شغلی در کارساز ثبت نام کنید.
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
          ارسال کد
        </button>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center">
          قبلاً در کارساز ثبت‌ نام کرده‌اید؟ <span className="text-blue">ورود</span>
        </p>
      </div>
    </form>
  );
};

const CodeSubmitSignup = () => {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setSignupStage(3));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-4">
          کد تأیید
        </p>

        <h2>Code input</h2>
        <button
          type="submit"
          className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
        >
          تایید کد و ادامه
        </button>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4 tw-text-center tw-flex tw-items-center tw-justify-between">
          <span>دریافت مجدد کد</span>
          <span>countdown</span>
        </p>
      </div>
    </form>
  );
};

const InfoCompletionSignup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    alert('Signup completed');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-2xl tw-font-bold text-blue 2xl:tw-text-4xl 2xl:tw-font-black tw-mb-8">
          تکمیل اطلاعات
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-dark tw-mb-4">
          برای تکمیل فرایند ثبت نام در کارساز فرم پایین را پر کنید و به جمع{' '}
          <span className="tw-text-red-500">user phone</span> دانشجو کارزار بپیوندید.
        </p>
        <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
          نام و نام خانوادگی
        </p>
        <input
          type="tel"
          pattern="/^09[0-9]{9}$/i"
          className="tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
          placeholder="برای مثال، احمد احمدی"
          style={{ padding: '1rem' }}
        />
        <p className="tw-text-base tw-font-normal text-dark 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4">
          گذرواژه
        </p>
        <div
          className="auth-signup-pass tw-p-0 tw-text-sm tw-font-normal 2xl:tw-text-base tw-grid tw-items-center tw-w-full tw-justify-between tw-rounded-xl"
          style={{ gridTemplateColumns: '1fr 56px' }}
        >
          <input
            type="password"
            placeholder="گذرواژه خود را وارد نمایید."
            style={{
              outline: 'none',
              border: 'none',
              background: 'transparent',
              padding: '1rem',
            }}
            onFocus={() => document.querySelector('.auth-signup-pass').classList.add('focus')}
            onBlur={() => document.querySelector('.auth-signup-pass').classList.remove('focus')}
          />

          <button
            className="tw-p-0"
            onClick={() => {
              setShowPassword(!showPassword);
              if (showPassword) {
                document.querySelector('.auth-signup-pass input').setAttribute('type', 'text');
              } else
                document.querySelector('.auth-signup-pass input').setAttribute('type', 'password');
            }}
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
          </button>
        </div>
        <button
          type="submit"
          className="button-primary tw-p-4 tw-text-sm tw-font-medium 2xl:tw-text-2xl 2xl:tw-font-semibold tw-mb-2 tw-mt-12"
        >
          تکمیل ثبت نام
        </button>
      </div>
    </form>
  );
};
