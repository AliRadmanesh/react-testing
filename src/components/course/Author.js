import React from 'react';

export default function Author({
  instructors: { id, first_name, last_name, position, description, image },
}) {
  return (
    <div className="container">
      <div className="course-author bg-white tw-rounded-xl tw-shadow-lg tw-p-4 lg:tw-p-5 tw-mt-4">
        <div className="tw-flex tw-items-center">
          <img src={image} alt="" className="avatar tw-rounded-md" />
          <div>
            <p className="font-kalameh-num text-dark tw-mr-2 tw-text-sm tw-font-semibold 2xl:tw-text-lg 2xl">
              {first_name} {last_name}
            </p>
          </div>
          {position && (
            <p className="font-kalameh-num text-blue tw-text-xs tw-font-normal 2xl:tw-text-xm">
              {position}
            </p>
          )}
        </div>
        <p className="course-author-about text-gray font-iranyekan-num tw-mt-4 2xl:tw-text-lg tw-font-normal tw-text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
