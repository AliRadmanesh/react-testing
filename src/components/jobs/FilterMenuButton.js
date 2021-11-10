import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import filterIcon from '../../assets/icons/Filter-White.svg';
import { showJobsMobileMenu } from '../../app/redux/actions/jobsActions';

export default function ScrollToTop() {
  const { mobile } = useSelector((state) => state.jobs.search);
  const dispatch = useDispatch();

  return (
    <button
      className="tw-fixed tw-bottom-4 tw-p-5 bg-primary tw-block lg:tw-hidden"
      onClick={() => dispatch(showJobsMobileMenu(true))}
      style={{
        right: '1rem',
        transition: 'left .85s ease-out',
        zIndex: '9999',
      }}
    >
      <img src={filterIcon} alt="" className="" style={{ width: '24px', height: '24px' }} />
    </button>
  );
}
