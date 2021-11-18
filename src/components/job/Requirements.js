import React from 'react';
import { useSelector } from 'react-redux';

export default function Requirements({ data }) {
  const { requirements } = data;

  return (
    <div className="bg-white tw-rounded-xl tw-shadow-xl tw-p-4 tw-mt-8 font-kalameh-num">
      <p className="text-blue tw-mr-2 tw-text-base tw-font-semibold 2xl:tw-text-2xl 2xl:tw-font-black tw-mb-4">
        شاخص های کلیدی از نظر کارفرما
      </p>
      <p className="text-gray 2xl:tw-text-base tw-font-normal tw-text-xs text-gray">
        {requirements !== null &&
          requirements.map((item, index) => {
            if (index === requirements.length - 1) return item;
            return `${item} - `;
          })}
      </p>
    </div>
  );
}
