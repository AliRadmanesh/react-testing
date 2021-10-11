import React from 'react';
import { Link } from 'react-router-dom';
import timeFillIcon from '../../assets/icons/Time Fill.svg';
import starFillIcon from '../../assets/icons/Star Fill.svg';

function PostCard({ props }) {
  const {
    id,
    link,
    image,
    title,
    author: { last_name, first_name, image: authorImage },
    rating,
    created_at,
    description,
    estimated_time,
  } = props;

  return (
    <div className="tw-p-4 bg-white border-smooth card-box-shadow tw-my-4">
      {/* <img src={image} alt="" className="border-smooth tw-w-full tw-h-auto tw-mb-4" /> */}
      <div
        className="border-smooth tw-w-full tw-h-auto tw-mb-4"
        style={{
          width: '100%',
          height: '250px',
          background: `url("${image}") no-repeat center/cover`,
        }}
      />
      <p className="tw-font-bold tw-text-base 2xl:tw-text-xl text-dark tw-truncate">{title}</p>
      <div className="tw-mt-4">
        <div style={{ height: '40px' }} className="tw-text-truncate">
          <p className="text-gray tw-text-sm 2xl:tw-text-lg">{description}</p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-justify-between tw-items-end tw-mt-8">
          <div className="tw-flex tw-items-end">
            <img src={authorImage} alt="" className="tw-ml-2 border-smooth" />
            <p className="text-guide tw-truncate">
              {first_name} {last_name}
            </p>
          </div>
          <div>
            <caption className="text-blue tw-block tw-text-left">
              زمان مطالعه {estimated_time}
            </caption>
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-end tw-mt-4">
          <div className="tw-flex tw-justify-between tw-items-center">
            <div className="tw-flex tw-items-center">
              <img
                src={timeFillIcon}
                alt=""
                className="tw-ml-2"
                style={{ width: '16px', height: '16px' }}
              />
              <caption className="text-dark">{created_at}</caption>
            </div>
            <div className="tw-flex tw-items-center">
              <img
                src={starFillIcon}
                alt=""
                className="tw-ml-2"
                style={{ width: '16px', height: '16px' }}
              />
              <caption className="text-dark">{rating}</caption>
            </div>
          </div>
          <div>
            <Link to="https://karsaz.app/" className="">
              <button className="tw-mx-auto button-primary">مشاهده بیشتر</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
