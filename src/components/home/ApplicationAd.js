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
          className="tw-h-auto tw-mt-8 tw-bg-transparent tw-max-w-max tw-relative"
          style={{ width: '130vw', left: '30%' }}
        />
      </div>
      <div className="tw-w-full tw-h-screen tw-relative">
        <div className="clipper" />
        <div
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-h-full tw-w-full tw-absolute tw-items-center"
          style={{ background: 'transparent' }}
        >
          <div className="tw-grid" style={{ placeItems: 'center' }}>
            <div className="tw-w-full md:tw-w-2/3 tw-mx-auto tw-px-4 md:tw-px-0">
              <h1
                className="text-black tw-font-extrabold 2xl:tw-font-black"
                style={{ fontSize: window.innerWidth <= 1536 ? '22px' : '34px' }}
              >
                اپلیکیشن کارساز
              </h1>
              <p className="tw-mt-4 text-black font-iranyekan tw-font-normal tw-text-xs 2xl:tw-text-lg">
                دسترسی آسان و راحت به دوره های آموزشی و فرصت های .شغلی، با استفاده از اپلیکیشن
                کارساز همه آموزش ها توی جیبته
              </p>
              <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-mt-4 tw-mx-auto tw-max-w-md lg:tw-mr-0">
                <a href="https://cafebazaar.ir/app/com.karsaz.app" target="_blank" rel="noreferrer">
                  <img src={bazaar} alt="" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.karsaz.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={playstore} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="tw-hidden md:tw-flex tw-items-center tw-h-full md:tw-h-3/4 lg:tw-h-1/2 tw-ml-0">
            <img src={app} alt="" className="tw-w-full tw-h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
