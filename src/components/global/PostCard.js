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
    author: { name, image: authorImage },
    rating,
    created_at,
    description,
    estimated_time,
  } = props;

  return (
    <div className="tw-p-4 bg-white tw-my-4 tw-shadow-sm tw-rounded-xl font-iranyekan-num home-card">
      {/* <img src={image} alt="" className="border-smooth tw-w-full tw-h-auto tw-mb-4" /> */}
      <div
        className="border-smooth tw-w-full tw-h-auto tw-mb-4"
        style={{
          width: '100%',
          height: '250px',
          background: `url("${image}") no-repeat center/cover`,
        }}
      />
      <p className="tw-font-bold text-black tw-text-base 2xl:tw-text-xl text-dark">{title}</p>
      <div className="tw-mt-4">
        <p className="text-gray font-iranyekan-num tw-font-normal tw-text-sm 2xl:tw-text-lg card-description">
          {description}
        </p>
        <div className="tw-grid tw-grid-cols-2 tw-justify-between tw-items-end tw-mt-8">
          <div className="tw-flex tw-items-end">
            <img src={authorImage} alt="" className="tw-ml-2 border-smooth" />
            <p className="text-guide tw-truncate">{name}</p>
          </div>
          <div>
            <span className="text-blue tw-block tw-text-left font-kalameh-num">
              زمان مطالعه {estimated_time}
            </span>
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
              <span className="text-dark font-kalameh-num">{created_at}</span>
            </div>
            {/* <div className="tw-flex tw-items-center">
              <img
                src={starFillIcon}
                alt=""
                className="tw-ml-2"
                style={{ width: '16px', height: '16px' }}
              />
              <span className="text-dark font-kalameh-num">{rating}</span>
            </div> */}
          </div>
          <div>
            <a href={link} target="_blank" rel="noreferrer">
              <button className="tw-mx-auto button-primary font-kalameh-num">مشاهده بیشتر</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
