import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Item = ({ first_name }) => {
  // const { first_name, last_name, image, position } = instructor;

  <div className="tw-flex">
    {/* <img src={instructor.image} alt="" className="tw-rounded-xl tw-w-8" /> */}
    <p className="tw-text-xs text-dark tw-font-normal 2xl:tw-text-base tw-mx-2">{first_name}</p>
    {/* {instructor.position !== null && instructor.position.length > 0 && (
      <p className="tw-text-xs text-gray tw-font-normal 2xl:tw-text-base tw-border-r tw-border-gray-400">
        {instructor.position}
      </p>
    )} */}
  </div>;
};

export default function Instructors() {
  const { primary, secondary } = useSelector((state) => state.compare);

  return (
    <>
      <p className="text-blue tw-mb-4 tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-text-bold tw-text-center md:tw-text-right">
        مدرس‌(ها)
      </p>
      <div className="comapare-gridder-detail bg-primary-pale tw-rounded-xl tw-mb-4">
        {primary.instructors.length > 0 ? (
          <div className="compare-gridder-right tw-px-4">
            {primary.instructors.map((item) => (
              <span key={item.id} className="tw-h-auto tw-flex tw-items-center tw-my-4">
                {item.image !== '' && (
                  <img src={item.image} alt="" className="tw-rounded-xl tw-w-8 tw-h-8" />
                )}
                <p className="tw-text-xs text-dark tw-font-normal 2xl:tw-text-base tw-mx-2">
                  {item.first_name} {item.last_name}
                </p>
                {item.position !== null && item.position.length > 0 && (
                  <p className="tw-text-xs text-gray tw-font-normal 2xl:tw-text-base tw-border-r tw-border-gray-400">
                    {item.position}
                  </p>
                )}
              </span>
            ))}
          </div>
        ) : (
          <div className="compare-gridder-right tw-p-4" />
        )}
        <div className="compare-gridder-line-constant" />
        {secondary.instructors.length > 0 ? (
          <div className="compare-gridder-left tw-px-4">
            {secondary.instructors.map((item) => (
              <span key={item.id} className="tw-h-auto tw-flex tw-items-center tw-my-4">
                {item.image !== '' && (
                  <img src={item.image} alt="" className="tw-rounded-xl tw-w-8 tw-h-8" />
                )}
                <p className="tw-text-xs text-dark tw-font-normal 2xl:tw-text-base tw-mx-2">
                  {item.first_name} {item.last_name}
                </p>
                {item.position !== null && item.position.length > 0 && (
                  <p className="tw-text-xs text-gray tw-font-normal 2xl:tw-text-base tw-border-r tw-border-gray-400">
                    {item.position}
                  </p>
                )}
              </span>
            ))}
          </div>
        ) : (
          <div className="compare-gridder-left tw-p-4" />
        )}
      </div>
    </>
  );
}
