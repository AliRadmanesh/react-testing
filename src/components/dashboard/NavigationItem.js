import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePart } from '../../app/redux/actions/dashboardActions';

export default function NavigationMobileItem({ src, fill, section, title }) {
  const active = useSelector((state) => state.dashboard.active);

  const dispatch = useDispatch();

  return (
    <div className="tw-flex tw-my-6 tw-items-center dashboard-item tw-cursor-pointer ">
      <div
        className={
          section === active
            ? 'bg-primary dashboard-item-indicator active tw-h-full'
            : 'bg-primary dashboard-item-indicator tw-h-full'
        }
      />
      <img
        src={src}
        className={active === section ? 'tw-hidden menu-icon' : 'tw-block menu-icon'}
        alt=""
      />
      <img
        src={fill}
        className={active === section ? 'tw-block menu-icon' : 'tw-hidden menu-icon'}
        alt=""
      />
      <button
        className={
          active === section
            ? 'tw-text-sm 2xl:tw-font-semibold tw-font-bold 2xl:tw-text-xl text-blue tw-mx-4 font-kalameh tw-p-0'
            : 'tw-text-sm 2xl:tw-font-semibold tw-font-regular 2xl:tw-text-xl text-gray tw-mx-4 font-kalameh tw-p-0'
        }
        onClick={() => {
          dispatch(setActivePart(section));
        }}
      >
        {title}
      </button>
    </div>
  );
}

NavigationMobileItem.propTypes = {
  src: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
