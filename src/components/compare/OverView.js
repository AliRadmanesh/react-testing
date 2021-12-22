import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import plusIcon from '../../assets/icons/Add Fill.svg';
import closeFillIcon from '../../assets/icons/Close Fill.svg';

import {
  clearPrimary,
  clearSecondary,
  showModal,
  setDispatcher,
} from '../../app/redux/actions/compareActions';

export default function OverView() {
  const dispatch = useDispatch();

  const { primary, secondary } = useSelector((state) => state.compare);

  const {
    id: pid,
    title: ptitle,
    images: { cover: pcover },
    description: pdescription,
    price: pprice,
    is_free: pisfree,
  } = primary;

  const {
    id: sid,
    title: stitle,
    images: { cover: scover },
    description: sdescription,
    price: sprice,
    is_free: sisfree,
  } = secondary;

  return (
    <div>
      <div className="tw-grid compare-gridder bg-white tw-p-4 tw-shadow tw-my-6 2xl:tw-my-10 tw-gap-y-4 tw-rounded-xl font-kalameh-num">
        {/* PRIMARY */}
        <div className="primary-overview">
          {!pid && (
            <div className="compare-gridder-right">
              <div className="tw-border-dashed tw-border-gray-300 tw-rounded-xl tw-border-2 tw-grid tw-place-items-center ">
                <button
                  onClick={() => {
                    dispatch(setDispatcher('primary'));
                    dispatch(showModal(true));
                  }}
                  className="tw-p-0 tw-w-1/2 tw-flex tw-justify-center tw-flex-col tw-items-center"
                >
                  <img src={plusIcon} alt="" className="tw-mb-4" style={{ width: '48px' }} />
                  <p className="tw-text-center text-gray tw-font-kalameh-num tw-text-base 2xl:tw-text-lg">
                    برای افزودن دوره به لیست مقایسه کلیک کنید
                  </p>
                </button>
              </div>
            </div>
          )}
          {pid && (
            <div className="compare-gridder-right">
              <div
                className="tw-rounded-xl"
                style={{ background: `url("${pcover}") center/cover no-repeat` }}
              />
              <div className="tw-flex tw-justify-between tw-items-center tw-my-4">
                <p className="text-dark tw-text-base tw-font-bold 2xl:tw-text-xl 2xl:tw-font-semibold tw-max-w-3/5 tw-truncate">
                  {ptitle}
                </p>
                {pisfree ? (
                  <p className="text-blue tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold tw-max-w-3/5 tw-truncate">
                    رایگان
                  </p>
                ) : (
                  <p className="text-blue tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold tw-max-w-3/5 tw-truncate">
                    {pprice}
                  </p>
                )}
              </div>
              <p className="text-gray 2xl:tw-text-lg tw-text-sm tw-font-normal compare-overview-description">
                {pdescription}
              </p>
              <div className="tw-gap-x-4 tw-grid compare-button-row tw-mt-4">
                <Link
                  to={`/course/${pid}`}
                  className="button button-primary tw-px-0 tw-py-4 tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-text-center"
                >
                  خرید این دوره
                </Link>
                <Link
                  to={sid ? `/compare?primary=${sid}` : './compare'}
                  className="tw-flex tw-justify-center tw-items-center button-secondary tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold"
                  style={{ padding: '0' }}
                  onClick={() => {
                    dispatch(clearPrimary());
                  }}
                >
                  <img
                    className="tw-ml-1 md:tw-ml-2"
                    src={closeFillIcon}
                    alt=""
                    style={{ width: 'auto', height: '50%' }}
                  />
                  حذف این دوره
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="compare-gridder-line " />
        {/* SECONDARY */}
        <div className="secondary-overview">
          {sid === null && (
            <div className="compare-gridder-left">
              <div className="tw-border-dashed tw-border-gray-300 tw-rounded-xl tw-border-2 tw-grid tw-place-items-center">
                <button
                  onClick={() => {
                    if (!new URL(window.location).searchParams.get('primary')) {
                      dispatch(setDispatcher('primary'));
                    } else {
                      dispatch(setDispatcher('secondary'));
                    }
                    dispatch(showModal(true));
                  }}
                  className="tw-p-0 tw-w-1/2 tw-flex tw-justify-center tw-items-center tw-flex-col"
                >
                  <img src={plusIcon} alt="" className="tw-mb-4" style={{ width: '48px' }} />
                  <p className="tw-text-center text-gray tw-font-kalameh-num tw-text-base 2xl:tw-text-lg">
                    برای افزودن دوره به لیست مقایسه کلیک کنید
                  </p>
                </button>
              </div>
            </div>
          )}
          {sid && (
            <div className="compare-gridder-left">
              <div
                className="tw-rounded-xl compare-heighter"
                style={{ background: `url("${scover}") center/cover no-repeat` }}
              />
              <div className="tw-flex tw-justify-between tw-items-center tw-my-4">
                <p className="text-dark tw-text-base tw-font-bold 2xl:tw-text-xl 2xl:tw-font-semibold tw-max-w-3/5 tw-truncate">
                  {stitle}
                </p>
                {sisfree ? (
                  <p className="text-blue tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold tw-max-w-3/5 tw-truncate">
                    رایگان
                  </p>
                ) : (
                  <p className="text-blue tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold tw-max-w-3/5 tw-truncate">
                    {sprice}
                  </p>
                )}
              </div>
              <p className="text-gray 2xl:tw-text-lg tw-text-sm tw-font-normal compare-overview-description">
                {sdescription}
              </p>
              <div className="tw-gap-x-4 tw-grid compare-button-row tw-mt-4">
                <Link
                  to={`/course/${sid}`}
                  className="button-primary tw-px-0 tw-py-4 tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-text-center"
                >
                  خرید این دوره
                </Link>
                <Link
                  to={pid ? `/compare?primary=${pid}` : `./compare`}
                  className="tw-flex tw-justify-center tw-items-center button-secondary tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold"
                  style={{ padding: '0' }}
                  onClick={() => dispatch(clearSecondary())}
                >
                  <img
                    className="tw-ml-1 md:tw-ml-2"
                    src={closeFillIcon}
                    alt=""
                    style={{ width: 'auto', height: '50%' }}
                  />
                  حذف این دوره
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
