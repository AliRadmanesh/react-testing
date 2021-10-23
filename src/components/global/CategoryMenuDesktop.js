import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showCategoryDesktopMenu } from '../../app/redux/actions/headerActions';
import it from '../../assets/icons/Category/IT-Dark-Small.svg';
import data from '../../assets/icons/Category/Intelligence and data-Dark-Small.svg';
import marketing from '../../assets/icons/Category/Marketing-Dark-Small.svg';
import art from '../../assets/icons/Category/Graphic-Dark-Small.svg';
import economic from '../../assets/icons/Category/Economics and Finance-Dark-Small.svg';
import science from '../../assets/icons/Category/Science-Dark-Small.svg';
import language from '../../assets/icons/Category/Language-Dark-Small.svg';
import general from '../../assets/icons/Category/General-Dark-Small.svg';

export default function CategoryMenuDesktop() {
  const [active, setActive] = useState(1);
  const [total, setTotal] = useState(3);
  // const [segment, setSegment] = useState(0)
  const [right, setRight] = useState(0);
  const [width, setWidth] = useState(0);

  const dispatch = useDispatch();
  const { categoryDesktop } = useSelector((state) => state.header);

  const activate = (num, val) => {
    setActive(num, true);
    const segment = width / total;
    // alert(segment);
    // setRight(`${segment * num}px`);
    setRight(`${val}%`);
  };

  useEffect(() => {
    console.log(document.querySelector('.titles-container').offsetWidth);

    setWidth(document.querySelector('.titles-container').offsetWidth);
  }, []);

  return (
    <div style={{ display: categoryDesktop ? 'block' : 'none' }}>
      <div
        className="desktop-category-menu-container container text-black tw-fixed tw-w-full tw-h-screen tw-top-0 font-kalameh tw-hidden lg:tw-block"
        style={{ zIndex: '8888', background: 'rgba(0,0,0,.5)' }}
      >
        {/* <p className="tw-text-white">منوی دسته‌بندی</p> */}
        <div
          className="bg-white"
          style={{ borderRadius: '0 0 12px 12px', transition: 'height .2s' }}
        >
          <div className="tw-relative" style={{ borderBottom: '1px solid #ddd' }}>
            <div className="tw-px-4 titles-container tw-flex tw-justify-between tw-w-auto">
              <div
                className={
                  active === 1
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(1)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={it}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    علوم رایانه و IT
                  </p>
                </div>
              </div>
              <div
                className={
                  active === 2
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(2)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={data}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    هوش و داده
                  </p>
                </div>
              </div>
              <div
                className={
                  active === 3
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(3)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={marketing}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    بازاریابی و مدیریت
                  </p>
                </div>
              </div>
              <div
                className={
                  active === 4
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(4)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={art}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    طراحی و هنر
                  </p>
                </div>
              </div>
              <div
                className={
                  active === 5
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(5)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={economic}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    علوم اقتصادی و مالی
                  </p>
                </div>
              </div>
              <div
                className={
                  active === 6
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(6)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={science}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    علوم پایه
                  </p>
                </div>
              </div>
              <div
                className={
                  active === 7
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(7)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={language}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    زبان خارجه
                  </p>
                </div>
              </div>
              <div
                className={
                  active === 8
                    ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                    : 'header-category-title tw-py-4 tw-cursor-pointer'
                }
                onClick={() => setActive(8)}
                role="none"
                style={{}}
              >
                <div className="tw-flex tw-items-center">
                  <img
                    src={general}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                    عمومی
                  </p>
                </div>
              </div>
            </div>

            {/* ACTIVE LINE */}
            {/* <div
              className="tw-absolute bg-primary tw-mx-2"
              style={{
                width: '100px',
                height: '4px',
                bottom: '-2px',
                borderRadius: '6px',
                transition: 'right .2s ease-in-out',
                margin: 'auto 2.5rem',
                right:
                  (active === 1 && '0') ||
                  (active === 2 && '12.5%') ||
                  (active === 3 && '25%') ||
                  (active === 4 && '37.5%') ||
                  (active === 5 && '50%') ||
                  (active === 6 && '62.5%') ||
                  (active === 7 && '75%') ||
                  (active === 8 && '87.5%'),
              }}
            /> */}
          </div>
          {/* CONTENT */}
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 1 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              برنامه نویسی تحت وب
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              برنامه نویسی نرم افزار
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              برنامه نویسی موبایل
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              متخصص آی‌تی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              کارشناس شبکه
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              دیتابیس
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              هوش مصنوعی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              برنامه نویسی سحت افزار
            </div>
          </div>
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 2 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              یادگیری ماشین
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              شبکه های عصبی مصنوعی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              پردازش تصویر و سیگنال
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              هوش ازدحامی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              محاسبات تکاملی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              آمار و احتمالات
            </div>
          </div>
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 3 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              کسب و کار
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              دیجیتال مارکتینگ
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              منابع انسانی
            </div>
          </div>
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 4 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              طراحی سایت
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              ساخت انیمیشن
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              ساخت و توسعه بازی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              طراحی و گرافیک
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              ساخت ویدیو
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              عکاسی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              سینما
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              نقاشی
            </div>
          </div>
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 5 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              حسابداری
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              بورس و بازار سهام
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              بلاکچین
            </div>
          </div>
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 6 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              آکادمیک
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              مهندسی برق
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              علوم ریاضی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              فیزیک
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              علوم تجربی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              علوم انسانی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              علوم جغرافیایی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              مدرسه
            </div>
          </div>
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 7 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              انگلیسی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              اسپانیایی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              عربی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              ترکی استانبول
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              فرانسوی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              چینی
            </div>
          </div>
          <div
            className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
            style={{ display: active === 8 ? 'flex' : 'none' }}
          >
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              توسعه فردی
            </div>
            <div className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg">
              روانشناسی
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
