import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import filterIcon from '../../assets/icons/Filter-White.svg';
import { displayMobileFilterMenu } from '../../app/redux/actions/coursesActions';

export default function ScrollToTop() {
  const { showMenu } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  return (
    <button
      className="tw-fixed tw-bottom-4 tw-p-5 bg-primary tw-block lg:tw-hidden"
      onClick={() => dispatch(displayMobileFilterMenu(true))}
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
