import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showDashboardMobileMenu } from '../../app/redux/actions/dashboardActions';
import homeIcon from '../../assets/icons/Home-White.svg';

export default function NavigationButton() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Link
      to="/"
      className="tw-fixed tw-bottom-4 tw-p-4 bg-primary scroll-to-top-button tw-block lg:tw-hidden tw-rounded-xl"
      onClick={() => dispatch(showDashboardMobileMenu(true))}
      style={{
        left: '1rem',
        transition: 'left .85s ease-out',
        zIndex: '999',
      }}
    >
      <img src={homeIcon} alt="بخش‌ها" />
    </Link>
  );
}
