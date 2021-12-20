import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import bookmarkIcon from '../../assets/icons/Bookmark.svg';
import bookmarkFillIcon from '../../assets/icons/Bookmark Fill.svg';
import starFillIcon from '../../assets/icons/Star Fill.svg';
import airplaneIcon from '../../assets/icons/Airplane.svg';
import bagIcon from '../../assets/icons/Job Bag.svg';

import { bookmarkJob } from '../../app/redux/actions/jobActions';

export default function Header({ data }) {
  const {
    id,
    province,
    city,
    title,
    created_at,
    contract_type,
    work_days,
    benefits,
    salary_from,
    is_bookmarked,
    company: { name_fa, name_en, avatar },
  } = data;
  const dispatch = useDispatch();

  return (
    <div className="tw-grid job-gridder  tw-gap-4 container font-kalameh-num">
      <div className="job-header-right bg-white tw-rounded-xl tw-p-4 tw-shadow-xl">
        <div className="tw-pb-4 tw-flex tw-border-b tw-border-gray-200 tw-w-full">
          <div className="">
            <img src={avatar} alt="" className="tw-rounded-xl detail-avatar tw-ml-4" />
          </div>
          <div className="tw-w-full tw-pr-4">
            <div className="tw-flex tw-w-full tw-justify-between">
              <div className="tw-flex">
                <div className="">
                  <div className="tw-flex tw-items-center">
                    <p className="text-dark tw-text-base tw-font-semibold tw-mb-1 2xl:tw-text-2xl 2xl:tw-font-black">
                      {title}
                    </p>
                    <p className="tw-mr-4 tw-hidden md:tw-block text-gray tw-text-xs tw-font-normal 2xl:tw-text-base">
                      {created_at}
                    </p>
                  </div>
                  <p className="tw-block md:tw-hidden tw-mb-4 text-blue tw-text-xs tw-font-normal 2xl:tw-text-xl 2xl:tw-font-semibold">
                    {name_fa} - {name_en}
                  </p>
                  <p className="tw-block md:tw-hidden text-gray tw-text-xs tw-font-normal 2xl:tw-text-base">
                    {created_at}
                  </p>
                </div>
              </div>
              <div className="" style={{}}>
                <button
                  className="tw-bg-transparent tw-p-0"
                  onClick={() => dispatch(bookmarkJob(id))}
                >
                  {is_bookmarked ? (
                    <img src={bookmarkFillIcon} alt="" className="tw-w-8 icon" />
                  ) : (
                    <img src={bookmarkIcon} alt="" className="tw-w-8 icon" />
                  )}
                </button>
              </div>
            </div>
            <div className="tw-hidden md:tw-flex tw-items-center tw-justify-between tw-mt-6">
              <p className="text-blue tw-text-xs tw-font-normal 2xl:tw-text-xl 2xl:tw-font-semibold">
                {name_fa} - {name_en}
              </p>
              <p className="text-blue tw-text-xs tw-font-normal 2xl:tw-text-base">{salary_from}</p>
            </div>
            <div className="tw-hidden md:tw-flex tw-items-center tw-justify-between tw-mt-6">
              <p className="text-gray tw-text-xs tw-font-normal 2xl:tw-text-xl 2xl:tw-font-semibold">
                {province} - {city}
              </p>
              <p className="text-gray tw-text-xs tw-font-normal 2xl:tw-text-base">
                {contract_type}
              </p>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-w-full">
          <div className="detail-avatar" />
          <div className="tw-hidden md:tw-grid tw-grid-cols-3 tw-gap-x-4 tw-pt-4 tw-w-full">
            <div className="tw-flex tw-items-center">
              <img src={bagIcon} alt="" className="icon" />
              <div className="tw-pr-4 tw-mr-4 tw-border-r tw-border-gray-200">
                <p className="text-dark tw-mb-4 tw-text-xs tw-font-normal 2xl:tw-text-base 2xl:tw-font-semibold">
                  روزها و ساعت‌های کاری
                </p>
                <p className="text-gray tw-text-xs tw-font-normal 2xl:tw-text-base 2xl:tw-font-semibold">
                  {work_days}
                </p>
              </div>
            </div>
            <div className="tw-flex tw-items-center">
              <img src={starFillIcon} alt="" className="icon" />
              <div className="tw-pr-4 tw-mr-4 tw-border-r tw-border-gray-200">
                <p className="text-dark tw-mb-4 tw-text-xs tw-font-normal 2xl:tw-text-base 2xl:tw-font-semibold">
                  مزایا و تسهیلات
                </p>
                <p className="text-gray tw-text-xs tw-font-normal 2xl:tw-text-base 2xl:tw-font-semibold">
                  {benefits.map((item, index) => {
                    if (index === benefits.length - 1) return item.name;
                    return `${item.name} - `;
                  })}
                </p>
              </div>
            </div>
            <div className="tw-flex tw-items-center">
              <img src={airplaneIcon} alt="" className="icon" />
              <div className="tw-pr-4 tw-mr-4 tw-border-r tw-border-gray-200">
                <p className="text-dark tw-mb-4 tw-text-xs tw-font-normal 2xl:tw-text-base 2xl:tw-font-semibold">
                  سفر کاری
                </p>
                <p className="text-gray tw-text-xs tw-font-normal 2xl:tw-text-base 2xl:tw-font-semibold">
                  -
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-block md:tw-hidden">
          <div className="tw-pt-4 tw-flex tw-justify-between tw-items-center">
            <p className="text-gray tw-text-xs tw-font-normal">محل کار</p>
            <p className="text-dark tw-text-xs tw-font-normal">
              {province} - {city}
            </p>
          </div>
          <div className="tw-pt-4 tw-flex tw-justify-between tw-items-center">
            <p className="text-gray tw-text-xs tw-font-normal">حقوق</p>
            <p className="text-dark tw-text-xs tw-font-normal">{salary_from}</p>
          </div>
          <div className="tw-pt-4 tw-flex tw-justify-between tw-items-center">
            <p className="text-gray tw-text-xs tw-font-normal">نوع قرارداد</p>
            <p className="text-dark tw-text-xs tw-font-normal">{contract_type}</p>
          </div>
          <div className="tw-pt-4 tw-flex tw-justify-right tw-items-center">
            <p className="text-gray tw-text-xs tw-font-normal">روزها و ساعت‌های کاری</p>
          </div>
          <div className="tw-flex tw-pt-4 tw-text-justify">
            <p className="text-dark tw-text-xs tw-font-normal">{work_days}</p>
          </div>
          <div className="tw-pt-4 tw-flex tw-justify-between tw-items-center">
            <p className="text-gray tw-text-xs tw-font-normal">مزایا و تسهیلات</p>
            <p className="text-dark tw-text-xs tw-font-normal">
              {benefits.map((item, index) => {
                if (index === benefits.length - 1) return item.name;
                return `${item.name} - `;
              })}
            </p>
          </div>
          <div className="tw-pt-4 tw-flex tw-justify-between tw-items-center">
            <p className="text-gray tw-text-xs tw-font-normal">سفر کاری</p>
            <p className="text-dark tw-text-xs tw-font-normal">-</p>
          </div>
        </div>
      </div>
      <div className="tw-hidden lg:tw-flex tw-flex-col tw-p-4 tw-rounded-xl tw-shadow-xl bg-white">
        <Link
          to={{ pathname: data.ref_url }}
          target="_blank"
          className="button-primary tw-py-4 tw-text-center tw-mb-8"
        >
          مشاهده و ارسال رزومه
        </Link>
        <p className="tw-text-xs 2xl:tw-text-base tw-font-normal text-gray tw-text-justify ">
          برای ارسال رزومه به سایت مربوط آگهی ارجاع داده خواهید شد.
          <br />
          لطفا اطلاعات فرصت شغلی را کامل مطالعه کرده و بعد از مطالعه کامل شرایط و شرح شغل و وظایف
          .نسبت به ارسال رزومه اقدام کنید
        </p>
      </div>
    </div>
  );
}
