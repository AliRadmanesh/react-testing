import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showDashboardMobileMenu } from '../../app/redux/actions/dashboardActions';
import homeIcon from '../../assets/icons/Home.svg';

export default function NavigationButton() {
  const [scroll, setScroll] = useState(window.scrollY);
  const { show } = useSelector((state) => state.dashboard.navigation.mobile);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <button
      className="tw-fixed tw-bottom-4 tw-p-4 bg-primary scroll-to-top-button"
      onClick={() => dispatch(showDashboardMobileMenu(true))}
      style={{
        left: scroll !== (0, 0) ? '1rem' : '-10rem',
        transition: 'left .85s ease-out',
        zIndex: '999999',
      }}
    >
      <img src={homeIcon} alt="" style={{ transform: 'rotate(90deg)' }} />
    </button>
  );
}
