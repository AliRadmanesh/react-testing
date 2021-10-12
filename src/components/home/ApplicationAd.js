import React from 'react';

import bazaar from '../../assets/images/logo/bazaar@2x.png';
import playstore from '../../assets/images/logo/play store@2x.png';
import app from '../../assets/images/app.png';
import bg from '../../assets/svg/home/ad-bg-lg.svg';

export default function ApplicationAd() {
  return (
    <>
      <div className="md:tw-hidden tw-block tw-overflow-hidden">
        <img
          src={app}
          alt=""
          className="tw-h-auto tw-max-w-max tw-relative"
          style={{ width: '130vw', left: '30%' }}
        />
      </div>
      <div
        className="application-ad tw-w-full tw-h-screen tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-justify-between tw-items-center tw-relative tw--top-28 md:tw-static md:tw-top-0"
        style={{
          // clipPath: 'polygon(0 90%, 0 100%, 100% 100%, 100% 0 )',
          // background: 'linear-gradient(to bottom, rgba(17, 138, 178, .08), rgba(17, 138, 178, .01))',
          background: `url("${bg}") no-repeat center right/cover`,
        }}
      >
        <div className="tw-w-full md:tw-w-1/2 tw-mx-auto tw-px-4 md:tw-px-0">
          <h1>اپلیکیشن کارساز</h1>
          <p>
            دسترسی آسان و راحت به دوره های آموزشی و فرصت های .شغلی، با استفاده از اپلیکیشن کارساز
            همه آموزش ها توی جیبته
          </p>
          <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-mt-2">
            <img src={bazaar} alt="" />
            <img src={playstore} alt="" />
          </div>
        </div>
        <div className="tw-hidden md:tw-block tw-h-full md:tw-h-3/4 lg:tw-h-1/2 tw-ml-0">
          <img src={app} alt="" className="tw-w-full tw-h-auto" />
        </div>
      </div>
    </>
  );
}
