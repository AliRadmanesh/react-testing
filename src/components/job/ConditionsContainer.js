/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';

export default function ConditionsContainer({ data }) {
  const {
    conditions: {
      age_range: { min, max },
      gender,
      minimum_education_degree,
      skills,
    },
  } = data;
  return (
    <div className="bg-white tw-rounded-xl tw-shadow-xl tw-p-4 tw-mt-8 font-kalameh-num">
      <p className="text-blue tw-mr-2 tw-text-base tw-font-semibold 2xl:tw-text-2xl 2xl:tw-font-black tw-mb-4">
        شرایط احراز شغل
      </p>
      <div className="tw-grid tw-gap-x-4 tw-mb-2 job-condition-gridder tw-items-start">
        <div className="tw-hidden lg:tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl">
          <p className="tw-text-sm tw-font-normal text-black 2xl:tw-text-base 2xl:tw-font-semibold">
            سن
          </p>
        </div>
        <div className="tw-w-full">
          <p className="tw-mb-2 tw-mr-4 tw-text-sm tw-font-normal text-black tw-block lg:tw-hidden">
            سن
          </p>
          <div className="tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl">
            <p className="tw-text-sm tw-font-normal text-dark 2xl:tw-text-base">
              {min} الی {max} سال
            </p>
          </div>
        </div>
      </div>
      <div className="tw-grid tw-gap-x-4 tw-mb-2 job-condition-gridder tw-items-start tw-mt-4">
        <div className="tw-hidden lg:tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl">
          <p className="tw-text-sm tw-font-normal text-black 2xl:tw-text-base 2xl:tw-font-semibold">
            جنسیت
          </p>
        </div>
        <div className="tw-w-full">
          <p className="tw-mb-2 tw-mr-4 tw-text-sm tw-font-normal text-black tw-block lg:tw-hidden">
            جنسیت
          </p>
          <div className="tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl text-dark">
            <p className="tw-text-sm tw-font-normal text-dark 2xl:tw-text-base">{gender}</p>
          </div>
        </div>
      </div>
      <div className="tw-grid tw-gap-x-4 tw-mb-2 job-condition-gridder tw-items-start tw-mt-4">
        <div className="tw-hidden lg:tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl">
          <p className="tw-text-sm tw-font-normal text-black 2xl:tw-text-base 2xl:tw-font-semibold">
            تحصیلات
          </p>
        </div>
        <div className="tw-w-full">
          <p className="tw-mb-2 tw-mr-4 tw-text-sm tw-font-normal text-black tw-block lg:tw-hidden">
            تحصیلات
          </p>
          <div className="tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl text-dark">
            <p className="tw-text-sm tw-font-normal text-dark 2xl:tw-text-base">
              {minimum_education_degree}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="tw-grid tw-gap-x-4 tw-mb-2 job-condition-gridder tw-items-start tw-mt-4">
        <div className="tw-hidden lg:tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl">
          <p className="tw-text-sm tw-font-normal text-black 2xl:tw-text-base 2xl:tw-font-semibold">
            زبان
          </p>
        </div>
        <div className="tw-w-full">
          <p className="tw-mb-2 tw-mr-4 tw-text-sm tw-font-normal text-black tw-block lg:tw-hidden">
            زبان
          </p>
          <div className="tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl text-dark">
            <p className="tw-text-sm tw-font-normal text-dark 2xl:tw-text-base">TO BE DECIDED...</p>
          </div>
        </div>
      </div> */}
      <div className="tw-grid tw-gap-x-4 tw-mb-2 job-condition-gridder tw-items-start tw-mt-4">
        <div className="tw-hidden lg:tw-grid tw-p-4 tw-items-center bg-primary-pale tw-rounded-xl">
          <p className="tw-text-sm tw-font-normal text-black 2xl:tw-text-base 2xl:tw-font-semibold">
            مهارت‌ها
          </p>
        </div>
        <div className="tw-w-full">
          <p className="tw-mb-2 tw-mr-4 tw-text-sm tw-font-normal text-black tw-block lg:tw-hidden">
            مهارت‌ها
          </p>
          <div className="tw-flex tw-flex-wrap tw-items-center bg-primary-pale tw-rounded-xl text-dark tw-p-3">
            {skills.map((item) => (
              <div className="tw-rounded bg-light text-gray tw-p-2 tw-my-1 tw-mx-1">
                <p className="tw-font-normal tw-text-xs 2xl:tw-text-base">
                  {item.name} | {item.seniority_level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
