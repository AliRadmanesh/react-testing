import React from 'react';

import onlineIcon from '../../assets/icons/Online.svg';
import academyIcon from '../../assets/icons/School.svg';
import starIcon from '../../assets/icons/Star.svg';
import clockIcon from '../../assets/icons/Time Fill.svg';

export default function CourseCard({
  image,
  title,
  price,
  author: { first_name, last_name, image: avatar },
  academy,
  rating,
  type,
  duration,
  description,
}) {
  return (
    <div className="course-card bg-white font-kalameh tw-grid tw-p-4 tw-rounded-xl tw-shadow-sm tw-w-full tw-items-center tw-gap-4">
      <div>
        <img src="" alt="" />
      </div>
      <div className="">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
          <h1 className="course-card-title text-dark tw-font-bold tw-text-base 2xl:tw-text-xl 2xl:tw-font-semibold">
            {title}
          </h1>
          <p className="text-blue tw-hidden md:tw-block tw-font-semibold tw-text-lg">{price}</p>
        </div>
        <p
          className="text-gray font-iranyekan tw-mb-4 tw-font-normal tw-text-sm 2xl:tw-text-lg"
          style={{ lineHeight: '21px' }}
        >
          {description}
        </p>
        <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-items-center md:tw-flex md:tw-items-end">
          <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-items-end">
            <div className="tw-flex tw-items-end tw-mb-4">
              <img src={avatar} alt="" />
              <p className="tw-mr-2">
                {first_name} {last_name}
              </p>
            </div>
            <div className="tw-flex tw-flex-row-reverse md:tw-flex-row tw-items-center tw-justify-between">
              <div className="tw-flex">
                <img src={academyIcon} alt="" className="tw-ml-2 icon" />
                <p>{academy}</p>
              </div>
              <div className="tw-hidden md:tw-flex">
                <img src={clockIcon} alt="" className="tw-ml-2 icon" />
                <p>{duration}</p>
              </div>
              <div className="tw-hidden lg:tw-flex">
                <img src={starIcon} alt="" className="tw-ml-2 icon" />
                <p>{rating}</p>
              </div>
              <div className="tw-flex">
                <img src={onlineIcon} alt="" className="tw-ml-2 icon" />
                <p>{type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
