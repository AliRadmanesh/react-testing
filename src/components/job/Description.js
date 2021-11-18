import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Description({ data }) {
  const { description } = data;

  useEffect(() => {
    document.querySelector('.job-description').innerHTML = description;
  }, [description]);

  return (
    <div className="bg-white tw-rounded-xl tw-shadow-xl tw-p-4 tw-mt-8 font-kalameh-num">
      <p className="text-blue tw-mr-2 tw-text-base tw-font-semibold 2xl:tw-text-2xl 2xl:tw-font-black tw-mb-4">
        شرح شغل و وظایف
      </p>
      <p className="job-description text-gray 2xl:tw-text-base tw-font-normal tw-text-xs" />
    </div>
  );
}
