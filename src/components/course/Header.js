import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import { numberWithCommas, isObjEmpty } from '../../common/Functions';
import { bookmarkCourse } from '../../app/redux/actions/courseActions';

import compareIcon from '../../assets/icons/Comparison.svg';
import bookmarkIcon from '../../assets/icons/Bookmark.svg';
import bookmarkfillIcon from '../../assets/icons/Bookmark Fill.svg';
import academyIcon from '../../assets/icons/School-Gray.svg';
import offlineIcon from '../../assets/icons/Offline.svg';
import onlineIcon from '../../assets/icons/Online.svg';
import studentIcon from '../../assets/icons/Student-Gray.svg';
import starIcon from '../../assets/icons/Star Fill-Gray.svg';
import timeIcon from '../../assets/icons/Time Fill-Gray.svg';
import closeIcon from '../../assets/icons/Close Fill-Gray.svg';
import tickIcon from '../../assets/icons/Tick Fill-Gray.svg';

export default function Header({
  id,
  image,
  title,
  description_summary_string,
  description_summary,
  prices,
  is_free,
  discount,
  rating,
  type: { type, name: typeName },
  academy: { id: academyId, name: academyName, avatar: academyAvatar },
  start_datetime,
  end_datetime,
  duration_hours,
  duration_minutes,
  is_purchased,
  is_bookmarked,
  cashback,
  ref_url,
  ref_url_discount,
}) {
  let realPrice = '';
  let discountPrice = '';
  let courseDiscount = '';

  if (!isObjEmpty(prices) && parseInt(is_free, 10) === 0) {
    realPrice = `${numberWithCommas(prices.original.price)}`;

    if (!isObjEmpty(discount)) {
      if (discount.percentage && parseInt(discount.percentage, 10) > 0) {
        discountPrice = `${numberWithCommas(
          prices.original.price * (1 - parseInt(discount.percentage, 10) / 100),
        )} تومان`;
        courseDiscount = `${discount.percentage} %`;
      } else {
        discountPrice = `${numberWithCommas(prices.original.price - discount.amount)} تومان`;
        courseDiscount = `${numberWithCommas(discount.amount)} تومان`;
      }
    }
  }

  const dispatch = useDispatch();
  const {
    user: { authenticated },
  } = useSelector((state) => state.auth);

  const openCourseLink = () => {
    window.open(ref_url_discount || ref_url, '_blank');
  };

  const checkAndbookmarkCourse = () => {
    if (authenticated) {
      dispatch(bookmarkCourse(id));
    } else {
      toast.error('برای نشان کردن آموزش‌ها باید وارد شوید یا ثبت‌نام کنید!');
    }
  };

  return (
    <div className="tw-grid course-header tw-gap-4 container">
      <div className="course-header-right bg-white tw-p-4 lg:tw-p-5 tw-rounded-xl tw-flex tw-flex-col md:tw-grid tw-gap-x-4 lg:tw-gap-x-6 tw-shadow-lg tw-relative">
        {/* <img src={image} alt="" className="tw-rounded-lg tw-w-full tw-h-auto" /> */}
        <div
          className="tw-rounded-xl tw-w-full tw-h-auto"
          style={{ background: `url("${image}") no-repeat center/cover`, minHeight: '180px' }}
        />
        <div className="tw-pt-4 tw-w-full md:tw-pt-0 tw-flex tw-flex-col tw-justify-between">
          <div>
            <div className="tw-flex tw-items-center tw-justify-between ">
              <p className="text-dark font-kalameh-num tw-text-base tw-font-bold lg:tw-text-xl 2xl:tw-text-2xl 2xl:tw-font-black">
                {title}
              </p>
              <div className="tw-hidden md:tw-flex tw-items-center tw-mr-4">
                <Link
                  title="مقایسه کردن"
                  to={`/compare?primary=${window.location.href.split('course/')[1]}`}
                  className="tw-bg-transparent tw-p-2"
                >
                  <img src={compareIcon} alt="" className="tw-w-8" />
                </Link>
                <button
                  title="نشان کردن"
                  className="tw-bg-transparent tw-p-2"
                  onClick={checkAndbookmarkCourse}
                >
                  {is_bookmarked ? (
                    <img src={bookmarkfillIcon} alt="" className="tw-w-8" />
                  ) : (
                    <img src={bookmarkIcon} alt="" className="tw-w-8" />
                  )}
                </button>
              </div>
            </div>
            <p className="text-gray course-header-description font-iranyekan-num tw-mt-2 tw-text-sm tw-font-normal 2xl:tw-text-lg tw-text-justify">
              {description_summary_string}
            </p>
          </div>
          <div>
            <div className="tw-flex tw-flex-col tw-items-end font-kalameh-num">
              <div className="tw-flex tw-justify-end tw-items-center tw-mt-4">
                {realPrice.length > 0 && (
                  <p
                    className={
                      discountPrice.length > 0
                        ? 'tw-ml-2 text-gray tw-font-normal tw-text-sm tw-line-through'
                        : 'font-kalameh-num text-blue tw-text-base tw-font-bold 2xl:tw-text-lg 2xl:tw-font-semibold'
                    }
                  >
                    {`${realPrice} ${discountPrice.length > 0 ? '' : ' تومان'}`}
                  </p>
                )}
                {courseDiscount.length > 0 && (
                  <p className="tw-text-xs lg:tw-text-sm tw-font-normal tw-px-2 tw-py-1 bg-error text-white tw-rounded-lg">
                    {courseDiscount}
                  </p>
                )}
                {parseInt(is_free, 10) === 1 && (
                  <p className="tw-text-base tw-font-bold text-success">رایگان</p>
                )}
              </div>
              {discountPrice.length > 0 && (
                <p className="text-blue tw-font-bold tw-text-lg">{discountPrice}</p>
              )}
            </div>
            <div className="tw-flex tw-mt-2 tw-w-full tw-items-stretch md:tw-justify-end">
              <Link
                to={`/compare?primary=${window.location.href.split('course/')[1]}`}
                className="tw-p-6 md:tw-hidden tw-rounded-xl"
                style={{ backgroundColor: '#118ab222' }}
              >
                <img src={compareIcon} alt="" className="tw-w-8" />
              </Link>
              <button
                className="button-primary button-padding font-kalameh-num tw-mr-2 tw-w-full md:tw-w-auto tw-text-center"
                onClick={is_purchased ? null : openCourseLink}
              >
                {is_purchased ? 'خریداری شده' : 'خرید این دوره'}
              </button>
            </div>
          </div>
        </div>
        <button
          className="tw-p-4 md:tw-hidden tw-w-auto tw-absolute tw-left-8 tw-top-8"
          style={{ backgroundColor: '#118ab288' }}
          onClick={checkAndbookmarkCourse}
        >
          {is_bookmarked ? (
            <img src={bookmarkfillIcon} alt="" className="tw-w-4" />
          ) : (
            <img src={bookmarkIcon} alt="" className="tw-w-4" />
          )}
        </button>
      </div>
      <div className="course-header-left font-kalameh-num bg-white tw-p-4 lg:tw-py-5 lg:tw-px-4 tw-rounded-xl tw-grid md:tw-grid-cols-4 md:tw-gap-y-4  lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-x-6 tw-grid-cols-2 tw-shadow-lg tw-relative">
        <div>
          <div className="tw-flex tw-items-center">
            <img src={academyIcon} alt="" className="tw-w-6" />
            <p className="text-gray tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">
              برگزارکننده
            </p>
          </div>
          <div className="tw-flex tw-items-center">
            <div className="tw-w-6 tw-bg-transparent" />
            <p className="text-blue tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">
              {academyName}
            </p>
          </div>
        </div>
        <div>
          <div className="tw-flex tw-items-center">
            <img src={offlineIcon} alt="" className="tw-w-6" />
            <p className="text-gray tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">
              نحوه برگزاری
            </p>
          </div>
          <div className="tw-flex tw-items-center">
            <div className="tw-w-6 tw-bg-transparent" />
            <p className="text-blue tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">{typeName}</p>
          </div>
        </div>
        <div>
          <div className="tw-flex tw-items-center">
            <img src={studentIcon} alt="" className="tw-w-6" />
            <p className="text-gray tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">ثبت نامی</p>
          </div>
          <div className="tw-flex tw-items-center">
            <div className="tw-w-6 tw-bg-transparent" />
            <p className="text-blue tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">{cashback}</p>
          </div>
        </div>
        <div>
          <div className="tw-flex tw-items-center">
            <img src={starIcon} alt="" className="tw-w-6" />
            <p className="text-gray tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">امتیاز</p>
          </div>
          <div className="tw-flex tw-items-center">
            <div className="tw-w-6 tw-bg-transparent" />
            <p className="text-blue tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">{rating}</p>
          </div>
        </div>
        <div>
          <div className="tw-flex tw-items-center">
            <img src={tickIcon} alt="" className="tw-w-6" />
            <p className="text-gray tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">زمان شروع</p>
          </div>
          <div className="tw-flex tw-items-center">
            <div className="tw-w-6 tw-bg-transparent" />
            <p className="text-blue tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">
              {start_datetime || 'نامشخص'}
            </p>
          </div>
        </div>
        <div>
          <div className="tw-flex tw-items-center">
            <img src={closeIcon} alt="" className="tw-w-6" />
            <p className="text-gray tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">زمان پایان</p>
          </div>
          <div className="tw-flex tw-items-center">
            <div className="tw-w-6 tw-bg-transparent" />
            <p className="text-blue tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">
              {end_datetime || 'نامشخص'}
            </p>
          </div>
        </div>
        <div>
          <div className="tw-flex tw-items-center">
            <img src={academyIcon} alt="" className="tw-w-6" />
            <p className="text-gray tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg">مدت زمان</p>
          </div>
          <div className="tw-flex tw-items-center">
            <div className="tw-w-6 tw-bg-transparent" />
            <p className="text-blue tw-mr-2 tw-text-sm tw-font-medium 2xl:tw-text-lg tw-ltr">
              {duration_hours || '۰۰'} :{duration_minutes || '۰۰'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
