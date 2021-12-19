import React from 'react';
import { Link } from 'react-router-dom';

export default function JobCard({ props }) {
  const {
    id,
    contract_type,
    province,
    city,
    title,
    company: { name_fa, name_en, avatar },
    salary_from,
    created_at,
  } = props;

  return (
    <Link to={`/job/${id}`}>
      <div className="bg-white tw-flex tw-w-full tw-shadow-lg border-smooth font-kalameh-num">
        <img src={avatar} alt="" className="tw-m-4 tw-w-20 tw-h-20 2xl:tw-w-28 2xl:tw-h-28" />
        <div className="tw-flex tw-flex-col tw-justify-between tw-p-4 tw-overflow-hidden tw-w-full">
          <div className="">
            <p className="font-iranyekan-num text-dark tw-text-base tw-font-normal 2xl:tw-text-xl 2xl:tw-font-bold tw-w-full tw-truncate">
              {title}
            </p>
          </div>
          <div className="tw-flex tw-justify-between tw-w-full">
            <div>
              <p className="tw-text-xs 2xl:tw-text-base tw-font-normal font-kalameh-num text-blue">
                {name_fa}
              </p>
            </div>
            <div>
              <p className="tw-text-xs 2xl:tw-text-base tw-font-normal font-kalameh-num text-blue">
                {salary_from}
              </p>
            </div>
          </div>
          <div className="tw-flex tw-justify-between tw-w-full">
            <div>
              <p className="tw-text-xs 2xl:tw-text-base tw-font-normal font-kalameh-num text-gray">
                {province}/{city} - {contract_type}
              </p>
            </div>
            <div className="tw-text-left">
              <p className="tw-text-xs 2xl:tw-text-base tw-font-normal font-kalameh-num text-gray">
                {created_at}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
