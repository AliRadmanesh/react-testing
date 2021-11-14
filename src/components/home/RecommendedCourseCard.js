import React from 'react';
import { Link } from 'react-router-dom';
import starFillIcon from '../../assets/icons/Star Fill.svg';
import onlineIcon from '../../assets/icons/Online.svg';
import offlineIcon from '../../assets/icons/Offline.svg';

import { numberWithCommas } from '../../common/Functions';

function RecommendedPostCard({ props }) {
  const {
    description,
    images: { cover },
    title,
    id,
    type,
    academy: { avatar, name, id: academy_id },
    price,
    rating: { average, participants },
    is_free,
  } = props;

  return (
    <div className="tw-p-4 bg-white border-smooth card-box-shadow tw-my-4 font-iranyekan">
      {/* <img src={image} alt="" className="border-smooth tw-w-full tw-h-auto tw-mb-4" /> */}
      <div
        className="border-smooth tw-w-full tw-h-auto tw-mb-4"
        style={{
          width: '100%',
          height: '250px',
          background: `url("${cover}") no-repeat center/cover`,
        }}
      />
      <p className="tw-font-bold text-black tw-text-base 2xl:tw-text-xl text-dark tw-truncate">
        {title}
      </p>
      <div className="tw-mt-4">
        <div style={{ maxHeight: '110px' }} className="tw-overflow-y-hidden tw-text-ellipses">
          <p className="text-gray font-iranyekan tw-font-normal tw-text-sm 2xl:tw-text-lg">
            {description}
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-justify-between tw-items-center tw-mt-4">
          <div className="tw-flex tw-items-center">
            <img
              src={avatar}
              alt=""
              className="tw-ml-2 border-smooth avatar"
              style={{ borderRadius: '50%' }}
            />
            <p className="text-guide tw-truncate">{name}</p>
          </div>
          <div className="tw-flex tw-justify-end">
            {is_free === 1 && <p className="tw-text-sm tw-font-medium text-success">رایگان</p>}
            {price && (
              <p className="text-blue font-kalameh tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold">
                {numberWithCommas(price)}
              </p>
            )}
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-end tw-mt-2">
          <div className="tw-flex tw-justify-between tw-items-center">
            {type === 'online' ? (
              <div className="tw-flex tw-items-center tw-ml-4">
                <img
                  src={onlineIcon}
                  alt=""
                  className="tw-ml-2"
                  style={{ width: '16px', height: '16px' }}
                />
                <p className="text-dark font-kalameh tw-text-xs tw-font-normal 2xl:tw-text-base">
                  آنلاین
                </p>
              </div>
            ) : (
              <div className="tw-flex tw-items-center tw-ml-4">
                <img
                  src={offlineIcon}
                  alt=""
                  className="tw-ml-2"
                  style={{ width: '16px', height: '16px' }}
                />
                <p className="text-dark font-kalameh tw-text-xs tw-font-normal 2xl:tw-text-base">
                  آفلاین
                </p>
              </div>
            )}
            <div className="tw-flex tw-items-center">
              <img
                src={starFillIcon}
                alt=""
                className="tw-ml-2"
                style={{ width: '16px', height: '16px' }}
              />
              <p className="text-dark font-kalameh tw-text-xs tw-font-normal 2xl:tw-text-base">
                {average}
              </p>
            </div>
          </div>
          <div className="lg:tw-flex lg:tw-items-center">
            <p className="tab text-blue tw-hidden lg:tw-block tw-ml-6 font-kalameh">{price}</p>
            <Link to={`../course/${id}`} className="">
              <button className="tw-mx-auto button-primary font-kalameh tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold">
                مشاهده بیشتر
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedPostCard;
