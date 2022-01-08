import React from 'react';
import { Link } from 'react-router-dom';

import { numberWithCommas, isObjEmpty, replaceString } from '../../common/Functions';

import onlineIcon from '../../assets/icons/Online.svg';
import academyIcon from '../../assets/icons/School.svg';
import starIcon from '../../assets/icons/Star Fill.svg';
import clockIcon from '../../assets/icons/Time Fill.svg';

export default function CourseCard({
  id,
  image,
  title,
  prices,
  academy: { name, avatar },
  rating,
  type,
  duration,
  description,
  is_free,
  discount,
}) {
  const linkString = replaceString(title, ' ', '-');

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

  return (
    <div className="course-card bg-white search-course-card font-kalameh-num tw-grid tw-p-4 tw-rounded-xl tw-shadow tw-w-full tw-items-stretch tw-gap-4 tw-mb-4">
      <div
        className="tw-w-auto tw-h-auto tw-rounded-xl"
        style={{
          background: `url("${image}") no-repeat center/cover`,
          minHeight: '200px',
        }}
      />
      <div className="tw-flex tw-flex-col tw-justify-between tw-h-full text-dark">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
          <Link to={`/course/${linkString}-ka${id}`}>
            <h1 className="course-card-title text-dark tw-font-bold tw-text-base 2xl:tw-text-xl 2xl:tw-font-semibold text-primary-hover">
              {title}
            </h1>
          </Link>
          <div className="tw-flex tw-flex-col tw-items-end">
            <div className="tw-flex tw-items-center">
              {realPrice.length > 0 && (
                <p
                  className={`tw-hidden lg:tw-block ${
                    discountPrice.length > 0
                      ? 'tw-ml-2 text-gray tw-font-normal tw-text-md tw-line-through'
                      : 'text-blue tw-font-bold tw-text-lg'
                  }`}
                >
                  {`${realPrice} ${discountPrice.length > 0 ? '' : ' تومان'}`}
                </p>
              )}
              {courseDiscount.length > 0 && (
                <p className="tw-text-md tw-font-normal tw-hidden lg:tw-block tw-px-3 tw-py-1 bg-error text-white tw-rounded-lg">
                  {courseDiscount}
                </p>
              )}
              {parseInt(is_free, 10) === 1 && (
                <p className="tw-text-base tw-font-bold tw-hidden lg:tw-block text-success">
                  رایگان
                </p>
              )}
            </div>
            {discountPrice.length > 0 && (
              <p className="tw-hidden lg:tw-block text-blue tw-font-bold tw-text-xl">
                {discountPrice}
              </p>
            )}
          </div>
        </div>
        <p className="text-gray card-description font-iranyekan-num tw-mb-4 tw-font-normal tw-text-sm 2xl:tw-text-lg">
          {description}
        </p>
        <div className="tw-flex tw-items-center tw-justify-between lg:tw-hidden tw-mb-4">
          <div className="tw-flex lg:tw-hidden tw-items-center">
            <img
              src={avatar}
              alt=""
              className="tw-rounded-xl tw-ml-2"
              style={{ width: '32px', height: '32px' }}
            />
            <p className="tw-mr-2 lg:tw-mr-0">{name}</p>
          </div>

          <div className="tw-flex tw-flex-col tw-items-end">
            <div className="tw-flex tw-items-center">
              {realPrice.length > 0 && (
                <p
                  className={`lg:tw-hidden tw-block ${
                    discountPrice.length > 0
                      ? 'tw-ml-2 text-gray tw-font-normal tw-text-sm tw-line-through'
                      : 'text-blue tw-font-semibold tw-text-lg'
                  }`}
                >
                  {`${realPrice} ${discountPrice.length > 0 ? '' : ' تومان'}`}
                </p>
              )}
              {courseDiscount.length > 0 && (
                <p className="tw-text-xs tw-font-normal lg:tw-hidden tw-block tw-px-2 tw-py-1 bg-error text-white tw-rounded-lg">
                  {courseDiscount}
                </p>
              )}
              {parseInt(is_free, 10) === 1 && (
                <p className="tw-text-base tw-font-bold lg:tw-hidden tw-block text-success">
                  رایگان
                </p>
              )}
            </div>
            {discountPrice.length > 0 && (
              <p className="text-blue tw-font-bold tw-text-lg">{discountPrice}</p>
            )}
          </div>
        </div>
        <div className="tw-flex tw-items-center lg:tw-flex lg:tw-items-end tw-justify-between">
          <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center">
            <div className="tw-flex tw-flex-row-reverse lg:tw-flex-row tw-items-center tw-justify-between">
              <div className="tw-hidden lg:tw-flex tw-items-center tw-mb-4 lg:tw-mb-0 lg:tw-ml-4">
                <img
                  src={avatar}
                  alt=""
                  className="tw-rounded-xl tw-ml-2"
                  style={{ width: '34px', height: '34px' }}
                />
                <p className="tw-mr-2 lg:tw-mr-0">{name}</p>
              </div>
              {/* <div className="tw-hidden xl:tw-flex tw-items-center tw-ml-4">
                <img src={academyIcon} alt="" className="tw-ml-2 tw-w-4 2xl:tw-w-6" />
                <p className="tw-text-xs tw-font-normal text-dark 2xl:tw-text-base">{academy}</p>
              </div> */}
              <div className="tw-hidden lg:tw-flex tw-items-center tw-ml-4">
                <img src={clockIcon} alt="" className="tw-ml-2 tw-w-4 2xl:tw-w-6" />
                <p className="tw-text-xs tw-font-normal text-dark 2xl:tw-text-base">{duration}</p>
              </div>
              <div className="tw-flex tw-items-center tw-ml-4">
                <img src={starIcon} alt="" className="tw-ml-2 tw-w-4 2xl:tw-w-6" />
                <p className="tw-text-xs tw-font-normal text-dark 2xl:tw-text-base">{rating}</p>
              </div>
              <div className="tw-flex tw-items-center tw-ml-4">
                <img src={onlineIcon} alt="" className="tw-ml-2 tw-w-4 2xl:tw-w-6" />
                <p className="tw-text-xs tw-font-normal text-dark 2xl:tw-text-base">{type}</p>
              </div>
            </div>
          </div>
          <Link to={`/course/${linkString}-ka${id}`} className="button-primary">
            مشاهده بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}
