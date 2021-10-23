/* 
  Category Menu Mobile Version. This files contains of a simple dispatch calling
  for Close functionlity imported from headerActions. Dropping the sub-menus is 
  being handled by css targeted in _pages.scss under category-dropdown section. 
  Also, sections are devided seperately and commented by their number. 
*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showCategoryMobileMenu } from '../../app/redux/actions/headerActions';
import it from '../../assets/icons/Category/IT-Dark-Small.svg';
import data from '../../assets/icons/Category/Intelligence and data-Dark-Small.svg';
import marketing from '../../assets/icons/Category/Marketing-Dark-Small.svg';
import art from '../../assets/icons/Category/Graphic-Dark-Small.svg';
import economic from '../../assets/icons/Category/Economics and Finance-Dark-Small.svg';
import science from '../../assets/icons/Category/Science-Dark-Small.svg';
import language from '../../assets/icons/Category/Language-Dark-Small.svg';
import general from '../../assets/icons/Category/General-Dark-Small.svg';
import arrow from '../../assets/icons/Arrow Down Gray.svg';
import close from '../../assets/icons/Close-Gray.svg';

export default function CategoryMenuMobile() {
  const dispatch = useDispatch();
  const { categoryMobile } = useSelector((state) => state.header);

  return (
    <div style={{ display: categoryMobile ? 'block' : 'none' }}>
      <div
        className="bg-light tw-min-h-screen tw-w-full tw-fixed tw-top-0 font-kalameh-num"
        style={{ zIndex: '99999' }}
      >
        <div className="tw-flex tw-items-center tw-p-4 tw-shadow bg-white">
          <button className="tw-p-0 tw-m-0" onClick={() => dispatch(showCategoryMobileMenu(false))}>
            <img src={close} alt="" className="icon" />
          </button>
          <p className="tw-text-base tw-font-normal tw-mr-4">دسته بندی</p>
        </div>
        <div className="tw-p-4">
          {/* CATEGORY 1 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={it} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">علوم رایانه و IT</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-relative tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                برنامه نویسی تحت وب
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                برنامه نویسی نرم افزار
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                برنامه نویسی موبایل
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                متخصص آی‌تی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                کارشناس شبکه
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                دیتابیس
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                هوش مصنوعی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                برنامه نویسی سحت افزار
              </div>
            </div>
          </div>
          {/* CATEGORY 2 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={data} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">هوش و داده</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                یادگیری ماشین
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                شبکه های عصبی مصنوعی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                پردازش تصویر و سیگنال
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                هوش ازدحامی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                محاسبات تکاملی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                آمار و احتمالات
              </div>
            </div>
          </div>
          {/* CATEGORY 3 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={marketing} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">بازاریابی و مدیریت</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                کسب و کار
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                دیجیتال مارکتینگ
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                منابع انسانی
              </div>
            </div>
          </div>
          {/* CATEGORY 4 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={art} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">طراحی و هنر</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                طراحی سایت
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                ساخت انیمیشن
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                ساخت و توسعه بازی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                طراحی و گرافیک
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                ساخت ویدیو
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                عکاسی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                سینما
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                نقاشی
              </div>
            </div>
          </div>
          {/* CATEGORY 5 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={economic} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">علوم اقتصادی و مالی</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                حسابداری
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                بورس و بازار سهام
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                بلاکچین
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                متخصص آی‌تی
              </div>
            </div>
          </div>
          {/* CATEGORY 6 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={science} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">علوم پایه</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                آکادمیک
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                مهندسی برق
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                علوم ریاضی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                فیزیک
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                علوم تجربی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                علوم انسانی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                علوم جغرافیایی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                مدرسه
              </div>
            </div>
          </div>
          {/* CATEGORY 7 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={language} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">زبان خارجه</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                انگلیسی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                اسپانیایی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                عربی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                ترکی استانبول
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                فرانسوی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                چینی
              </div>
            </div>
          </div>
          {/* CATEGORY 8 */}
          <div className="category-dropdown-container tw-relative tw-my-2">
            <div
              onClick={(e) => e.target.classList.toggle('active')}
              role="none"
              className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
            >
              <div className="tw-flex tw-items-center">
                <img src={general} alt="" className="icon tw-opacity-50" />
                <p className="tw-text-sm tw-font-medium tw-mr-4">عمومی</p>
              </div>
              <img src={arrow} alt="" className="tw-w-4" />
            </div>
            <div className="category-dropdown-items tw-w-full">
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                توسعه فردی
              </div>
              <div className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4">
                روانشناسی
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
