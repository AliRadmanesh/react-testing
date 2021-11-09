import React from 'react';

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
    <div className="bg-white tw-flex tw-items-center tw-justify-center tw-w-full tw-shadow-lg border-smooth tw-p-4 font-kalameh-num">
      <img src={avatar} alt="" className="tw-ml-4" />
      <div className="tw-flex tw-flex-col">
        <div className="tw-mb-2">
          <p className="font-iranyekan-num text-dark tw-text-base tw-font-normal 2xl:tw-text-xl 2xl:tw-font-bold">
            {title}
          </p>
        </div>
        <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-mb-2">
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
        <div className="tw-flex tw-w-full tw-items-center tw-justify-between">
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
  );
}
