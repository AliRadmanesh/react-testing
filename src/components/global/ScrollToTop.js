import React, { useState, useEffect } from 'react';

import arrow from '../../assets/icons/Right arrow white.svg';

export default function ScrollToTop() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <button
      className="tw-fixed tw-bottom-4 tw-p-4 bg-primary"
      onClick={() => window.scrollTo(0, 0)}
      style={{
        left: scroll !== (0, 0) ? '1rem' : '-10rem',
        transition: 'left .85s ease-out',
        zIndex: '9999',
      }}
    >
      <img src={arrow} alt="" style={{ transform: 'rotate(90deg)' }} />
    </button>
  );
}
