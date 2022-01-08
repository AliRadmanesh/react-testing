import React from 'react';

import { Link } from 'react-router-dom';

import onlineIcon from '../../assets/icons/Online.svg';
import starFillIcon from '../../assets/icons/Star Fill.svg';
import { numberWithCommas, replaceString } from '../../common/Functions';

const CourseCard = ({ props }) => {
  const {
    id,
    type,
    images: { cover },
    price,
    title,
    rating: { average, participants },
    description,
    academy: { avatar, name, id: academy_id },
    is_free,
  } = props;

  const linkString = replaceString(title, ' ', '-');

  const limit = 347;
  let uiDescription = String(description).slice(0, limit);

  if (description.length >= limit) uiDescription += '...';

  return (
    <div className="tw-p-4 bg-white border-smooth card-box-shadow tw-my-4 font-kalameh-num home-card">
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2">
        {/* <img src={cover} alt="" className="tw-block md:tw-hidden  border-smooth tw-w-full lg:tw-order-2" /> */}
        <div
          style={{
            background: `url("${cover}") no-repeat center/cover`,
            width: '100%',
            height: 'auto',
            minHeight: '300px',
          }}
          className="border-smooth tw-w-full tw-order-1 lg:tw-order-2"
        />
        <div className="tw-mt-4 lg:tw-mt-0 lg:tw-px-4 tw-px-0 tw-order-1 lg:tw-order-1 lg:tw-flex lg:tw-flex-col tw-justify-between">
          <div>
            <p className="tw-font-bold lg:tw-font-black font-kalameh-num tw-text-base lg:tw-text-lg text-dark">
              {title}
            </p>
            <p className="card-description text-gray tw-mt-2 tw-text-sm 2xl:tw-text-lg font-iranyekan-num">
              {description}
            </p>
          </div>
          <div className="tw-mt-4">
            <div className="tw-flex tw-justify-between tw-items-end tw-mb-4">
              <div className="tw-flex tw-items-end">
                <img
                  src={avatar}
                  alt=""
                  className="tw-ml-2 avatar border-smooth"
                  style={{ borderRadius: '50%' }}
                />
                <p className="text-guide">{name}</p>
              </div>
              <div className="tw-flex tw-justify-end lg:tw-hidden">
                {is_free === 1 ? (
                  <p className="tw-text-sm tw-font-medium text-success font-kalameh-num">رایگان</p>
                ) : (
                  <p className="text-blue font-kalameh tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold font-kalameh-num">
                    {numberWithCommas(price)}
                  </p>
                )}
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-items-end lg:tw-items-center">
              <div className="tw-flex tw-justify-between tw-items-center">
                {type === 'online' ? (
                  <div className="tw-flex tw-items-center tw-ml-4">
                    <img
                      src={onlineIcon}
                      alt=""
                      className="tw-ml-2"
                      style={{ width: '16px', height: '16px' }}
                    />
                    <span className="text-dark">آنلاین</span>
                  </div>
                ) : (
                  <div className="tw-flex tw-items-center tw-ml-4">
                    <span className="text-dark font-kalameh-num">{type}</span>
                  </div>
                )}
                <div className="tw-flex tw-items-center">
                  <img
                    src={starFillIcon}
                    alt=""
                    className="tw-ml-2"
                    style={{ width: '16px', height: '16px' }}
                  />
                  <span className="text-dark font-kalameh-num">{average}</span>
                </div>
              </div>
              <div className="lg:tw-flex lg:tw-items-center">
                <p className="tab tw-hidden lg:tw-block tw-ml-6 font-kalameh">
                  {is_free === 1 ? (
                    <span className="tw-text-sm tw-font-medium text-success font-kalameh-num">
                      رایگان
                    </span>
                  ) : (
                    <span className="text-blue font-kalameh tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold font-kalameh-num">
                      {numberWithCommas(price)}
                    </span>
                  )}
                </p>
                <Link to={`/course/${linkString}-ka${id}`}>
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
