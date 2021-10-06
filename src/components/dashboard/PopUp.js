import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearPopup, setPopup } from '../../app/redux/actions/dashboardActions';

import closeIcon from '../../assets/icons/Close Fill Light.svg';

export default function PopUp() {
  const {
    display,
    data: { title, text, img, date },
  } = useSelector((state) => state.dashboard.popup);

  const dispatch = useDispatch();

  return (
    <div style={{ display: display ? 'grid' : 'none' }}>
      <div
        className="tw-grid popup-container tw-z-50 tw-absolute tw-top-0 tw-right-0 tw-w-screen tw-h-screen"
        style={{ background: 'rgba(0,0,0, .7)', placeItems: 'center' }}
      >
        <div className="">
          <button
            className="tw-flex-start tw-h-auto tw-w-auto tw-p-0 tw-mb-4 tw-opacity-50"
            onClick={() => dispatch(clearPopup())}
          >
            <img src={closeIcon} alt="" />
          </button>
          <div className="tw-py-6 tw-px-4 bg-white tw-flex tw-flex-col tw-rounded-xl">
            <div className="tw-border-gray-200 tw-border-b tw-flex tw-flex-col tw-justify-between lg:tw-flex-row tw-pb-4">
              <p className="tw-text-sm lg:tw-text-xl tw-font-semibold text-secondary">{title}</p>
              <p className="tw-text-xs lg:tw-text-base text-gray tw-font-regular tw-mt-4 lg:tw-mt-auto">
                {date}
              </p>
            </div>
            <p className="text-secondary tw-text-sm lg:tw-text-lg tw-font-regular">{text}</p>
            {img && <img src={img} alt="" className="tw-rounded-xl" />}
          </div>
        </div>
      </div>
    </div>
  );
}
