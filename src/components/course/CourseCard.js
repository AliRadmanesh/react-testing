import React from 'react';
import { Link } from 'react-router-dom';

import { replaceString } from '../../common/Functions';

import onlineIcon from '../../assets/icons/Online.svg';
import starFillIcon from '../../assets/icons/Star Fill.svg';

export default function CourseCard({ props }) {
  const {
    id,
    title,
    description,
    images: { cover },
    academy: { id: academyId, name, avatar },
    type,
    rating: { average, participants },
    price,
    discount,
  } = props;

  const linkString = replaceString(title, ' ', '-');

  return (
    <div className="bg-white tw-my-4 tw-shadow tw-rounded-xl font-iranyekan-num tw-p-4">
      <div
        className="border-smooth tw-w-full tw-h-auto tw-mb-4 course-page-card-background"
        style={{
          width: '100%',
          background: `url("${cover}") no-repeat center/cover`,
        }}
      />
      <p className="tw-font-bold text-black tw-text-base 2xl:tw-text-xl text-dark tw-truncate">
        {title}
      </p>
      <div className="tw-mt-2">
        <p className="text-gray course-page-card-description font-iranyekan-num tw-font-normal tw-text-sm 2xl:tw-text-lg">
          {description}
        </p>
        <div className="tw-grid tw-grid-cols-2 tw-justify-between tw-items-center tw-mt-8">
          <div className="tw-flex tw-items-center">
            <img src={avatar} alt="" className="tw-ml-2 border-smooth avatar" />
            <p className="font-kalameh-num text-dark tw-text-base tw-font-normal 2xl:tw-text-xl 2xl:tw-font-medium tw-truncate">
              {name}
            </p>
          </div>
          <div>
            <span className="text-blue tw-block tw-text-left font-kalameh-num">{price}</span>
            {discount && (
              <span className="text-blue tw-block tw-text-left font-kalameh-num">{price}</span>
            )}
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-end">
          <div className="tw-flex tw-justify-between tw-items-center">
            <div className="tw-flex tw-items-center">
              <img
                src={onlineIcon}
                alt=""
                className="tw-ml-2 icon"
                style={{ width: '16px', height: '16px' }}
              />
              <span className="text-dark font-kalameh-num">{type}</span>
            </div>
            <div className="tw-flex tw-items-center tw-mr-4">
              <img
                src={starFillIcon}
                alt=""
                className="tw-ml-2 icon"
                style={{ width: '16px', height: '16px' }}
              />
              <span className="text-dark font-kalameh-num">{average}</span>
            </div>
          </div>
          <div>
            <Link to={`/course/${linkString}-ka${id}`}>
              <button className="tw-mx-auto button-primary font-kalameh-num">مشاهده بیشتر</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
