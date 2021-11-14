import React from 'react';
import { Link } from 'react-router-dom';
import onlineIcon from '../../assets/icons/Online.svg';
import academyIcon from '../../assets/icons/School.svg';
import starIcon from '../../assets/icons/Star Fill.svg';
import clockIcon from '../../assets/icons/Time Fill.svg';

export default function CourseCard({
  id,
  image,
  title,
  price,
  academy: { id: academyID, name, avatar },
  rating,
  type,
  duration,
  description,
  is_free,
  discount,
}) {
  return (
    <div className="course-card bg-white font-kalameh-num tw-grid tw-p-4 tw-rounded-xl tw-shadow tw-w-full tw-items-center tw-gap-4 tw-mb-4">
      <div
        className="tw-w-auto tw-rounded-xl"
        style={{
          background: `url("${image}") no-repeat center/cover`,
          minHeight: '200px',
        }}
      >
        {/* <img src={image} alt="" className/> */}
      </div>
      <div className="tw-flex tw-flex-col tw-justify-between tw-h-full text-dark">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
          <Link to={`../course/${id}`}>
            <h1 className="course-card-title text-dark tw-font-bold tw-text-base 2xl:tw-text-xl 2xl:tw-font-semibold text-primary-hover">
              {title}
            </h1>
          </Link>
          <div className="tw-flex tw-items-center">
            <p className="text-blue tw-hidden lg:tw-block tw-font-semibold tw-text-lg">{price}</p>
            <p className="tw-text-sm tw-font-normal tw-hidden lg:tw-block text-error">{discount}</p>
            {is_free === 1 && (
              <p className="tw-text-sm tw-font-normal tw-hidden lg:tw-block text-success">رایگان</p>
            )}
          </div>
        </div>
        <p
          className="text-gray font-iranyekan-num tw-mb-4 tw-font-normal tw-text-sm 2xl:tw-text-lg"
          style={{ lineHeight: '21px' }}
        >
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

          <div className="tw-flex tw-items-end">
            <p className="text-blue lg:tw-hidden tw-block tw-font-semibold tw-text-lg">{price}</p>
            <p className="tw-text-sm tw-font-normal lg:tw-hidden tw-block text-error">{discount}</p>
            {is_free === 1 && (
              <p className="tw-text-sm tw-font-normal lg:tw-hidden tw-block text-success">رایگان</p>
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
          <Link to={`../course/${id}`} className="button-primary" style={{}}>
            مشاهده بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}
