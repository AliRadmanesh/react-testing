import React from 'react';
import { useSelector } from 'react-redux';

export default function Company({ data }) {
  const {
    company: { name_fa, industry, about },
  } = data;

  return (
    <div className="bg-white tw-rounded-xl tw-shadow-xl tw-p-4 font-kalameh-num tw-mb-8">
      <p className="text-blue tw-mr-2 tw-text-base tw-font-semibold 2xl:tw-text-2xl 2xl:tw-font-black tw-mb-4">
        درباره {name_fa}
      </p>
      <p className="tw-mt-4 2xl:tw-mt-6 2xl:tw-text-base 2xl:tw-font-semibold tw-text-xs tw-font-medium text-black">
        خدمات و محصولات
      </p>
      <p className="text-gray 2xl:tw-text-base tw-font-normal tw-text-xs text-gray">{industry}</p>
      <p className="tw-mt-4 2xl:tw-mt-6 2xl:tw-text-base 2xl:tw-font-semibold tw-text-xs tw-font-medium text-black">
        اندازه سازمان
      </p>
      <p className="text-gray 2xl:tw-text-base tw-font-normal tw-text-xs text-gray">{about}</p>
    </div>
  );
}
