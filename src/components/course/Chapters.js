import React, { useEffect } from 'react';

export default function Chapters({ topics, topics_summary }) {
  useEffect(() => {
    document.querySelector('.course-chapters-container').innerHTML = topics_summary;
    document.querySelector('.course-chapters-description-container').innerHTML = topics;
  });

  return (
    <div className="container">
      <div className="tw-grid tw-gap-4 course-chapters tw-mt-4 tw-items-start font-kalameh-num text-dark">
        <div className=" tw-rounded-xl tw-shadow-lg tw-p-4 lg:tw-p-5">
          <p className="text-blue font-kalameh-num tw-mb-4 tw-text-base tw-font-semibold lg:tw-text-xl lg:tw-font-bold 2xl:tw-text-3xl 2xl:tw-font-black">
            سرفصل‌های دوره
          </p>
          <div className="tw-flex tw-flex-col font-kalameh-num tw-border-r tw-pr-4 course-chapters-container" />
        </div>
        <div className="tw-rounded-xl tw-shadow-lg tw-p-4 lg:tw-p-5 course-chapters-description-container" />
      </div>
    </div>
  );
}
