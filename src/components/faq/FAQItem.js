import React from 'react';

import down from '../../assets/icons/Arrow Down Gray.svg';
import up from '../../assets/icons/Up Arrow White.svg';

export default function FAQItem({ ask, ans }) {
  return (
    <div className="tw-rounded-xl">
      <div className="faq-item tw-w-full tw-mb-6 tw-shadow-md tw-rounded-xl">
        <button
          className="tw-w-full tw-justify-between tw-items-center tw-rounded-xl font-kalameh tw-text-sm xl:tw-text-base tw-font-normal tw-flex tw-px-4"
          onClick={(e) => {
            if (e.target.className.includes('expand')) {
              e.target.classList.remove('expand');
            } else {
              e.target.classList.add('expand');
            }
          }}
        >
          {ask}
          <img src={down} alt="" className="tw-mr-4 lg:tw-mr-8 down" />
          <img src={up} alt="" className="tw-mr-4 lg:tw-mr-8 up" />
        </button>
        <div className="">
          <div className="tw-full tw-rounded-xl tw-shadow-sm bg-white tw-py-4 tw-w-full font-kalameh tw-text-sm xl:tw-text-lg tw-font-normal tw-px-4 tw-mb-6 lg:tw-mb-12">
            {ans}
          </div>
        </div>
      </div>
    </div>
  );
}
