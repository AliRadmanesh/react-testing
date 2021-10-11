import React from 'react';
import { Link } from 'react-router-dom';
import starFillIcon from '../../assets/icons/Star Fill.svg';
import onlineIcon from '../../assets/icons/Online.svg';

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
  } = props;

  return (
    <div className="tw-p-4 bg-white border-smooth card-box-shadow tw-my-4">
      {/* <img src={image} alt="" className="border-smooth tw-w-full tw-h-auto tw-mb-4" /> */}
      <div
        className="border-smooth tw-w-full tw-h-auto tw-mb-4"
        style={{
          width: '100%',
          height: '250px',
          background: `url("${cover}") no-repeat center/cover`,
        }}
      />
      <p className="tw-font-bold tw-text-base 2xl:tw-text-xl text-dark tw-truncate">{title}</p>
      <div className="tw-mt-4">
        <div style={{ height: '40px' }} className="tw-overflow-hidden tw-text-ellipses">
          <p className="text-gray tw-text-sm 2xl:tw-text-lg">{description}</p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-justify-between tw-items-end tw-mt-8">
          <div className="tw-flex tw-items-end">
            <img
              src={avatar}
              alt=""
              className="tw-ml-2 border-smooth avatar"
              style={{ borderRadius: '50%' }}
            />
            <p className="text-guide tw-truncate">{name}</p>
          </div>
          <div className="lg:tw-hidden">
            <p className="tab text-blue">{price}</p>
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-end tw-mt-4">
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
  );
}

export default RecommendedPostCard;
