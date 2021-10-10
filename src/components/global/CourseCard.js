import React from 'react';

import { Link } from 'react-router-dom';

import onlineIcon from '../../assets/icons/Online.svg';
import starFillIcon from '../../assets/icons/Star Fill.svg';

const CourseCard = ({ props }) => {
  const {
    id,
    type,
    image,
    price,
    title,
    rating: { average, participants },
    description,
    instructors: { image: avatar, first_name, last_name },
  } = props;

  return (
    <div className="tw-p-4 bg-white border-smooth card-box-shadow tw-my-4">
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2">
        <img src={image} alt="" className="border-smooth tw-w-full lg:tw-order-2" />
        <div className="tw-mt-4 lg:tw-mt-0 lg:tw-p-4 tw-p-0 lg:tw-order-1 lg:tw-flex lg:tw-flex-col tw-justify-between">
          <div>
            <p className="tw-font-bold lg:tw-font-black font-kalameh tw-text-base lg:tw-text-lg text-dark tw-truncate">
              {title}
            </p>
            <p className="text-gray tw-mt-2 tw-text-sm 2xl:tw-text-lg tw-truncate">{description}</p>
          </div>
          <div className="tw-mt-4">
            <div className="tw-flex tw-justify-between tw-items-end tw-mt-4">
              <div className="tw-flex tw-items-end">
                <img src={avatar} alt="" className="tw-ml-2 avatar border-smooth" />
                <p className="text-guide">
                  {first_name} {last_name}
                </p>
              </div>
              <div className="lg:tw-hidden">
                <p className="tab text-blue">{price}</p>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-items-end lg:tw-items-center tw-mt-4">
              <div className="tw-flex tw-justify-between tw-items-center">
                {type === 'online' ? (
                  <div className="tw-flex tw-items-center tw-ml-4">
                    <img
                      src={onlineIcon}
                      alt=""
                      className="tw-ml-2"
                      style={{ width: '16px', height: '16px' }}
                    />
                    <caption className="text-dark">آنلاین</caption>
                  </div>
                ) : (
                  <div className="tw-flex tw-items-center tw-ml-4">
                    <caption className="text-dark font-kalameh">{type}</caption>
                  </div>
                )}
                <div className="tw-flex tw-items-center">
                  <img
                    src={starFillIcon}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '16px', height: '16px' }}
                  />
                  <caption className="text-dark">{average}</caption>
                </div>
              </div>
              <div className="lg:tw-flex lg:tw-items-center">
                <p className="tab text-blue tw-hidden lg:tw-block tw-ml-6">{price}</p>
                <Link to="https://karsaz.app/" className="">
                  <button className="tw-mx-auto button-primary">مشاهده بیشتر</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
