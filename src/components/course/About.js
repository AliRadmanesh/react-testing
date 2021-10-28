import React from 'react';

export default function About({ description_summary_string }) {
  return (
    <div className="container">
      <div className="course-about bg-white tw-rounded-xl tw-shadow-lg tw-p-4 lg:tw-p-5 tw-mt-4">
        <p className="text-blue font-kalameh-num tw-text-base tw-font-semibold lg:tw-text-xl lg:tw-font-bold 2xl:tw-text-3xl 2xl:tw-font-black">
          درباره دوره
        </p>
        <p className="text-gray tw-mt-4 tw-text-sm tw-font-normal font-iranyekan-num 2xl:tw-text-lg">
          {description_summary_string}
        </p>
      </div>
    </div>
  );
}
